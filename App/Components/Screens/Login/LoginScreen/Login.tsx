import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  LogBox,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../../Core/Layout/Layout';
import InfoSection from './InfoSection';
import { useAppDispatch, useAppSelector } from '../../../../Store/hooks';
import { addEmail, addPassword } from '../../../../Store/Slices/loginSlice';
import { BottomTabScreens } from '../../../../Navigation/NestedNav';

import AlertC from '../../../Ui/Alert';
import { useTranslation } from 'react-i18next';
import { useBiometric } from '../../../../Library/Hooks/useBiometric';
import { useAuth } from '../../../../Library/Hooks/useAuth';
import LanguageSelector from '../../../Ui/LanguageSelector';
import BiometricLoginSection from './BiometricLoginSection';
import LoginFormSection from './LoginFormSection';
import LoginButtonsSection from './LoginButtonsSection';
import { useLoginAlert } from '../Hooks/useLoginAlert';



const Login = ({ navigation }: any) => {
  const { t } = useTranslation();
  LogBox.ignoreAllLogs();
  const dispatch = useAppDispatch();
  const loginData = useAppSelector((state) => state.loginData);
  
  const {
    bioState,
    isAvailable,
    isShowFields,
    authenticate: biometricAuthenticate,
    saveCredentials,
    showFields: biometricShowFields,
    setBioState
  } = useBiometric();
  
  const {
    login: authLogin,
    handleSSOLogin: authHandleSSOLogin,
    isLoading: authIsLoading
  } = useAuth();


  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledLogin, setDisabledLogin] = useState(true);
  const passRef = useRef(null);

  const { isAlert, alertData, showAlert, hideAlert } = useLoginAlert();



  useEffect(() => {
    password && dispatch(addPassword(password));
    email && dispatch(addEmail(email.toLowerCase()));
    email.length && password.length
      ? setDisabledLogin(false)
      : setDisabledLogin(true);
  }, [dispatch, email, password]);

  const login = async (): Promise<void> => {
    setDisabledLogin(true);
    
    try {
      const credentials = {
        email: (loginData?.email && loginData?.password ? loginData.email : bioState?.email) ?? email,
        password: (loginData?.email && loginData?.password ? loginData.password : bioState?.password) ?? password
      };
      
      await authLogin(credentials, navigation, saveCredentials);
    } catch (error) {
      console.error('Login failed:', error);
      showAlert('Login failed');
    } finally {
      setDisabledLogin(false);
    }
  }

  useEffect(() => {
    if (bioState?.email && bioState?.password) {
      setEmail(bioState.email);
      setPassword(bioState.password);
    }
  }, [bioState]);


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
          biometricAuthenticate(() => login());
        }
      }, 100);
    }
  };

  const handleShowFields = () => {
    setPassword('');
    setEmail('');
    biometricShowFields();
  };

  const handleSSOLogin = async () => {
    try {
      await authHandleSSOLogin(navigation);
    } catch (error) {
      console.error('SSO Login failed', error);
    }
  }

  const forgotPassNav = () => {
    navigation.navigate(BottomTabScreens.forgotPassScreenName)
  }


  return (
    <Layout custom={styles.loginScreen}>
      <AlertC
        title={alertData}
        isAlert={isAlert}
        setIsAlert={hideAlert}
        navToForgotPass={forgotPassNav}
      />

      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <InfoSection title={t('Welcome')} subTitle={t('LogIn')} />
        
        <LanguageSelector />

        {!isShowFields && isAvailable && (
          <BiometricLoginSection
            email={email}
            bioEmail={bioState?.email}
            onSwitchToForm={handleShowFields}
          />
        )}

        <LoginFormSection
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onForgotPassword={forgotPassNav}
          onEmailSubmit={() => passRef.current && (passRef.current as any).focus()}
          passwordRef={passRef}
          showForm={isShowFields || !isAvailable}
        />

      </KeyboardAvoidingView>
      
      <LoginButtonsSection
        onLogin={!isShowFields && isAvailable ? callAuthenticate : login}
        onSSLogin={handleSSOLogin}
        disabled={disabledLogin}
      />

    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1
  },
});
