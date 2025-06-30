import {StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from '../../../Core/Layout/Layout';
import {styles} from '../ChooseProject/ChooseProj';
import InfoSection from '../LoginScreen/InfoSection';
import Button from '../../../Ui/Button';
import {globalFontStyles, monoBG} from '../../../../Assets/Styles/styles';
import TextC from '../../../Ui/TextComponent';
import Check from '../../../../Assets/images/svg/Check';

const ForgotPass = () => {
  const navToDash = (): void => {};
  return (
    <Layout custom={{...styles.loginScreen, ...screenStyles.alignCenter}}>
      <View>
        <InfoSection title="" subTitle={''} />
        <View style={screenStyles.mailContainer}>
          <View style={screenStyles.infoIcon}>
            <Check />
          </View>
          <TextC styles={{...globalFontStyles.h1, marginBottom: '2%'}}>
            Password Reset completed
          </TextC>
          <TextC styles={{...globalFontStyles.monoLabel, textAlign: 'center'}}>
            Congratulations, You have sucessfully reset your password
          </TextC>
        </View>
      </View>
      <Button
        disabled={false}
        title={'Proceed to dashboard'}
        handleClick={navToDash}
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
