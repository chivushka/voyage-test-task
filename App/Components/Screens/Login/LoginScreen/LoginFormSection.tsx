import React, { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Input from '../../../Ui/Input';

interface ILoginFormSection {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onForgotPassword: () => void;
  onEmailSubmit: () => void;
  passwordRef: any;
  showForm: boolean;
}

const LoginFormSection: FC<ILoginFormSection> = ({
  email,
  setEmail,
  password,
  setPassword,
  onForgotPassword,
  onEmailSubmit,
  passwordRef,
  showForm,
}) => {
  const { t } = useTranslation();

  if (!showForm) return null;

  return (
    <View>
      <Input
        type={'email'}
        title={t('Email') as string}
        value={email}
        setValue={setEmail}
        placeholder={t('EmailPlaceholder') as string}
        error={false}
        focused={false}
        submit={onEmailSubmit}
      />
      <Input
        type={'password'}
        title={t('Password') as string}
        value={password}
        setValue={setPassword}
        placeholder={t('PasswordPlaceholder') as string}
        error={false}
        focused={false}
        isForgotPass={true}
        forgotPassNav={onForgotPassword}
        reffer={passwordRef}
      />
    </View>
  );
};

export default LoginFormSection; 