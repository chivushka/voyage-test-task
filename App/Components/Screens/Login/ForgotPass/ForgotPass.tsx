import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from '../../../Core/Layout/Layout';
import InfoSection from '../LoginScreen/InfoSection';
import Input from '../../../Ui/Input';
import Button from '../../../Ui/Button';
import {BottomTabScreens} from '../../../../Navigation/NestedNav';
import RememberLogin from './RememberLogin';
import {useAppSelector} from '../../../../Store/hooks';
import {forgotPassword} from '../../../../Network/ApiActions/AuthActions/authActions';
import Loader from '../../../Ui/Loader';
import { useTranslation } from 'react-i18next';

const ForgotPass = ({navigation}: any) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const authState = useAppSelector(state => state.loginState);
  const loginData = useAppSelector(state => state.loginData);

  useEffect(() => {
    setEmail(loginData.email);
  }, []);

  useEffect(() => {
    email.length ? setIsDisabled(false) : true;
  }, [email, loginData.email]);

  const sendMail = async (): Promise<void> => {
    try {
      const res = await forgotPassword({email: email});
      navigation.navigate(BottomTabScreens.mailSentScreenName);
    } catch (e: any) {
      switch (e.response.status) {
        case 400:
          Alert.alert(`${e.response.data.error}`);
          break;
        case 401:
          Alert.alert(`${e.response.data.detail}`);
          break;
      }
    }
  };

  return (
    <Layout custom={styles.loginScreen}>
      <View>
        <InfoSection
          title={t('ForgotPasswordText')}
          subTitle={t("DontForget")}
        />
        {authState.isLoading ? (
          <Loader />
        ) : (
          <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <Input
              type={'text'}
              title={t('Email')}
              value={email}
              setValue={setEmail}
              placeholder={t('EmailPlaceholder')}
              error={false}
              focused={false}
              propStyles={styles.inputSection}
            />
          </KeyboardAvoidingView>
        )}
      </View>
      <View>
        {authState.isLoading ? (
          <></>
        ) : (
          <Button
            disabled={isDisabled}
            title={t('Continue')}
            handleClick={sendMail}
          />
        )}
        <RememberLogin navigation={navigation} displayText={{remember: t('RememberPassword'), login: t('Login')}}/>
      </View>
    </Layout>
  );
};

export default ForgotPass;

export const styles = StyleSheet.create({
  loginScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? '25%' : '5%',
    paddingTop: Platform.OS === 'android' ? '20%' : '20%',
  },
  inputSection: {
    marginBottom: '7%',
  },
});
