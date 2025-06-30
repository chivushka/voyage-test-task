import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from '../../../Core/Layout/Layout';
import Button from '../../../Ui/Button';
import InfoSection from '../LoginScreen/InfoSection';
import Input from '../../../Ui/Input';
import RememberLogin from '../ForgotPass/RememberLogin';

const ResetPassword = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [disable, setDisable] = useState(true);

  const navToNext = () => {
    // navigation.navigate(BottomTabScreens.resetDoneScreenName);
  };

  useEffect(() => {
    password.length && rePassword.length ? setDisable(false) : true;
  }, [password, rePassword]);

  return (
    <Layout custom={styles.loginScreen}>
      <View>
        <InfoSection
          title={'Reset Password'}
          subTitle={'Please enter a new password.'}
        />
        <View>
          <Input
            type={'password'}
            title={'New password'}
            value={password}
            setValue={setPassword}
            placeholder={'Enter a new password'}
            error={false}
            focused={false}
            propStyles={styles.inputSection}
          />
          <Input
            type={'password'}
            title={'Confirm Password'}
            value={rePassword}
            setValue={setRePassword}
            placeholder={'Re-enter the password'}
            error={false}
            focused={false}
          />
        </View>
      </View>
      <View>
        <Button
          disabled={disable}
          title={'Proceed to Login'}
          handleClick={navToNext}
        />
        <RememberLogin navigation={navigation} />
      </View>
    </Layout>
  );
};

export default ResetPassword;

export const styles = StyleSheet.create({
  loginScreen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: '10%',
  },
  inputSection: {
    marginBottom: '7%',
  },
});
