import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../../../Ui/Button';

interface ILoginButtonsSection {
  onLogin: () => void;
  onSSLogin: () => void;
  disabled: boolean;
}

const LoginButtonsSection: FC<ILoginButtonsSection> = ({
  onLogin,
  onSSLogin,
  disabled,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        title={t('Login')}
        disabled={disabled}
        handleClick={onLogin}
      />
      <Button
        title={t('loginSSO')}
        handleClick={onSSLogin}
        propStyles={styles.ssoButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  ssoButton: {
    backgroundColor: 'rgb(28, 25, 23)',
    marginTop: 10,
  },
});

export default LoginButtonsSection; 