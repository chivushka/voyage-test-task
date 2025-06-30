import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  LogBox,
  Alert,
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../../../Core/Layout/Layout';
import InfoSection from './InfoSection';
import Input from '../../../Ui/Input';
import Button from '../../../Ui/Button';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { addEmail, addPassword } from '../../../../Store/Slices/loginSlice';
import { BottomTabScreens } from '../../../../Navigation/NestedNav';

import { doUserLogin, loginAuth0ApiUser } from '../../../../Network/ApiActions/AuthActions/authActions';
import {
  changeAccessToken,
  changeIsLoading,
  changeIsLogged,
  changeRefreshToken,
  handleIsSSOLogin,
} from '../../../../Store/Slices/authSlice';
import AlertC from '../../../Ui/Alert';
import { getPreferencesData } from '../../../../Network/ApiActions/UserActions/userActions';
import { addUserData } from '../../../../Store/Slices/userInfoSlice';
import { useTranslation } from 'react-i18next';
import i18n from '../../../../Translation/i18n';
import * as Keychain from 'react-native-keychain';
import { useFocusEffect } from '@react-navigation/native';
import {
  monoBlack,
  monoInput,
  primaryColor,
} from '../../../../Assets/Styles/styles';
import { biometric } from '../../../../Library/BiometrickAuth';
import { ReactNativeBiometricsLegacy } from 'react-native-biometrics';

import Config from 'react-native-config';
import { auth0 } from '../../../../Library/Utils/SSOLogin';


const Login = ({ navigation }: any) => {
  const { t } = useTranslation();
  LogBox.ignoreAllLogs();
  const dispatch = useAppDispatch();
  const loginData = useAppSelector((state) => state.loginData);
  const [bioState, setBioState] = useState<{
    email: string;
    password: string;
  }>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const [alertData, setAlertData] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);
  const [isShowFields, setIsShowFields] = useState(true);
  const [isAvailable, setIsAvailable] = useState(true);
  const passRef = useRef(null);

  const getSelectedLanguage = async () => {
    try {
      const selectedLanguage = await AsyncStorage.getItem('language');
      if (selectedLanguage !== null) {
        return selectedLanguage;
      }
    } catch (error) {
      console.log('getSelectedLanguage error', error);
    }
    return null;
  };

  const getCredentials = async () => {
    const nameFromAsyncStorage = await AsyncStorage.getItem('name');
    if (nameFromAsyncStorage !== null) {
      setName(nameFromAsyncStorage);
    }
    const lastNameFromAsyncStorage = await AsyncStorage.getItem('lastName');
    if (lastNameFromAsyncStorage !== null) {
      setLastname(lastNameFromAsyncStorage);
    }
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        setBioState({
          email: credentials.username,
          password: credentials.password,
        });
        if (credentials.username && credentials.password) {
          if (isAvailable) {
            setIsShowFields(false);
          }
        }
      } else {
        console.log('No credentials stored.');
      }
    } catch (error) {
      console.log('Error retrieving credentials:', error);
    }
    return null;
  };

  useFocusEffect(
    useCallback(() => {
      checkIsAvailable();
      getCredentials();
    }, [])
  );

  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    getSelectedLanguage().then((language) => {
      if (language) {
        setSelectedLanguage(language);
      }
    });
  }, []);

  useEffect(() => {
    getSelectedLanguage().then((language) => {
      if (language) {
        i18n.changeLanguage(language || 'en');
      }
    });
  }, [selectedLanguage]);

  useEffect(() => {
    password && dispatch(addPassword(password));
    email && dispatch(addEmail(email.toLowerCase()));
    email.length && password.length
      ? setDisabledLogin(false)
      : setDisabledLogin(true);
  }, [dispatch, email, password]);

  const login = async (): Promise<void> => {
    setDisabledLogin(true);
    dispatch(changeIsLoading(true));
    try {
      const res = await doUserLogin(
        loginData?.email && loginData?.password
          ? loginData
          : bioState ?? loginData
      );
      dispatch(changeAccessToken(res.data.access));
      dispatch(changeRefreshToken(res.data.refresh));
      await AsyncStorage.setItem('userToken', `${res.data.access}`);
      await AsyncStorage.setItem('refreshToken', `${res.data.refresh}`);
      const loginTimestamp = new Date().getTime();
      await AsyncStorage.setItem('loginTimestamp', loginTimestamp.toString());
      const data = await getPreferencesData();

      if (data) {
        dispatch(addUserData(data.user));
      }

      await Keychain.setGenericPassword(
        email ?? bioState?.email,
        password ?? bioState?.password
      )
        .then(() => {
          setBioState({
            email: email ?? bioState?.email,
            password: password ?? bioState?.password,
          });
        })
        .catch((error) => {
          console.error(
            'Failed to save login and password to keychain:',
            error
          );
        });
      dispatch(changeIsLoading(false));
      navigation.navigate(BottomTabScreens.chooseProjectScreenName);
    } catch (e: any) {

      console.log(e.request);

      dispatch(changeIsLoading(false));
      switch (e.response.status) {
        case 400:
          Alert.alert('Bad request, try again');
          break;
        case 401:
          break;
        default:
          Alert.alert(e.response._response);
          break;
      }
    } finally {
      dispatch(changeIsLoading(false));
      setDisabledLogin(false);
    }
  }

  useEffect(() => {
    if (bioState?.email && bioState?.password) {
      setEmail(bioState.email);
      setPassword(bioState.password);
    }
  }, [bioState]);

  useEffect(() => {
    if (email && password) {
      setBioState({ email, password });
    }
  }, []);

  const authenticate = async () => {
    try {
      await biometric?.();

      login();
    } catch (e) {
      setIsShowFields(true);
      console.log('biometric error', e);
    }
  };

  const callAuthenticate = () => {
    if (
      !isShowFields &&
      isAvailable &&
      ((bioState?.email && bioState?.password) || (email && password))
    ) {
      setTimeout(() => {
        const isLoginScreen = navigation.isFocused(
          BottomTabScreens.loginScreenName
        );
        if (isLoginScreen) {
          authenticate();
        }
      }, 100);
    }
  };

  const checkIsAvailable = async () => {
    const result = await ReactNativeBiometricsLegacy.isSensorAvailable();

    setIsAvailable(result.available);
  };

  const showFields = () => {
    setPassword('');
    setEmail('');
    setIsShowFields(true);
  };

  const handleSSOLogin = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email',
        redirectUrl: Platform.OS === 'ios' ? Config.REACT_APP_SSO_REDIRECT_CALLBACK_IOS : Config.REACT_APP_SSO_REDIRECT_CALLBACK_ANDROID
      });

      const tokens = await loginAuth0ApiUser(credentials.accessToken, credentials.idToken);


      await handleLogin(tokens.access, tokens.refresh);
      dispatch(handleIsSSOLogin(true))
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  const forgotPassNav = () => {
    navigation.navigate(BottomTabScreens.forgotPassScreenName)
  }

  const handleLogin = async (accessToken: string | null, refreshToken?: string | null) => {
    try {
      dispatch(changeAccessToken(accessToken));
      if (refreshToken) {
        dispatch(changeRefreshToken(refreshToken));
      }
      await AsyncStorage.setItem('userToken', `${accessToken}`);
      await AsyncStorage.setItem('refreshToken', `${refreshToken}`);
      const loginTimestamp = new Date().getTime();
      await AsyncStorage.setItem('loginTimestamp', loginTimestamp.toString());
      const data = await getPreferencesData();
      if (data) {
        dispatch(addUserData(data.user));
      }
      navigation.navigate(BottomTabScreens.chooseProjectScreenName);
    } catch (e: any) {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('selectedDate');
      await auth0.webAuth.clearSession({
        federated: true,
      });
      dispatch(handleIsSSOLogin(false))
      dispatch(changeIsLoading(true));
      dispatch(changeAccessToken(null));
      dispatch(changeIsLogged(false));
      navigation.navigate(BottomTabScreens.loginScreenName);
      dispatch(changeIsLoading(false));

      console.log('Auth failed:', e);
    }
  }

  return (
    <Layout custom={styles.loginScreen}>
      <AlertC
        title={alertData}
        isAlert={isAlert}
        setIsAlert={() => setIsAlert(false)}
        navToForgotPass={forgotPassNav}
      />

      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <InfoSection title={t('Welcome')} subTitle={t('LogIn')} />
        {!isShowFields && isAvailable && (
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                color: monoBlack,
                fontSize: 18,
                lineHeight: 32,
                fontWeight: '700',
                marginTop: '10%',
              }}
            >
              {email ?? bioState?.email}
            </Text>
            <Text
              style={{
                color: primaryColor,
                fontSize: 13,
                lineHeight: 22,
                fontWeight: '600',
                marginTop: '10%',
              }}
              onPress={() => showFields()}
            >
              {t('Switch')}
            </Text>
          </View>
        )}

        {(isShowFields || !isAvailable) && (
          <Input
            type={'email'}
            title={t('Email') as string}
            value={email}
            setValue={setEmail}
            placeholder={t('EmailPlaceholder') as string}
            error={false}
            focused={false}
            submit={() => passRef.current && (passRef.current as any).focus()}
          />
        )}
        {(isShowFields || !isAvailable) && (
          <Input
            type={'password'}
            title={t('Password') as string}
            value={password}
            setValue={setPassword}
            placeholder={t('PasswordPlaceholder') as string}
            error={false}
            focused={false}
            isForgotPass={true}
            forgotPassNav={forgotPassNav}
            reffer={passRef}
          />
        )}

      </KeyboardAvoidingView>
      <Button
        title={t('Login')}
        disabled={disabledLogin}
        handleClick={!isShowFields && isAvailable ? callAuthenticate : login}
      />
      <Button
        title={t('loginSSO')}
        handleClick={() => handleSSOLogin()}
        propStyles={styles.oktaButt}
      />

    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1
  },
  avatarBody: {
    backgroundColor: monoInput,
    marginBottom: 10,
    width: 64,
    height: 64,
  },
  avatarText: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 29,
  },
  oktaButt: { backgroundColor: 'rgb(28, 25, 23)', marginTop: 10 },
  oktaContainer: { position: 'absolute', width: '100%', zIndex: 1, left: 15, top: 80 }
});
