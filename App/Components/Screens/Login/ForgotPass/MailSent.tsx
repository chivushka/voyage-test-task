import {StyleSheet, View, Linking, Alert} from 'react-native';
import React from 'react';
import Layout from '../../../Core/Layout/Layout';
import {styles} from '../ChooseProject/ChooseProj';
import InfoSection from '../LoginScreen/InfoSection';
import Button from '../../../Ui/Button';
import {globalFontStyles, monoBG} from '../../../../Assets/Styles/styles';
import TextC from '../../../Ui/TextComponent';
import Mail from '../../../../Assets/images/svg/Mail';
import { openInbox } from 'react-native-email-link'
import { useTranslation } from 'react-i18next';

const ForgotPass = () => {
  const { t } = useTranslation();
  const openEmailInbox = async () => {
    try {
      await openInbox();
    } catch (error) {
      Alert.alert('Email application is not found')
    }
  };
  return (
    <Layout custom={{...styles.loginScreen, ...screenStyles.alignCenter}}>
      <View>
        <InfoSection title="" subTitle={''} />
        <View style={screenStyles.mailContainer}>
          <View style={screenStyles.infoIcon}>
            <Mail />
          </View>
          <TextC styles={{...globalFontStyles.h1, marginBottom: '2%'}}>
            {t('CheckEmail')}
          </TextC>
          <TextC styles={{...globalFontStyles.monoLabel, textAlign: 'center'}}>
            {t('PasswordSent')}
          </TextC>
        </View>
      </View>
      <Button
        disabled={false}
        title={t('OpenEmail')}
        handleClick={openEmailInbox}
      />
    </Layout>
  );
};

export default ForgotPass;

const screenStyles = StyleSheet.create({
  infoIcon: {
    backgroundColor: monoBG,
    width: 56,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  mailContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
});
