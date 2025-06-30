import { Linking, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import TextC from './TextComponent';
import {
  defaultDanger,
  globalFontStyles,
  monoBG,
  monoColor,
  monoDisplay,
  monoInput,
  monoLabel,
  primaryColor,
} from '../../Assets/Styles/styles';
import EyeIcon from '../../Assets/images/svg/EyeIcon';
import Unvisible from '../../Assets/images/svg/Unvisible';
import Plus from '../../Assets/images/svg/Plus';
import { useTranslation } from 'react-i18next';
import { Config } from 'react-native-config';


interface IInput {
  type?:
  | 'text'
  | 'textArea'
  | 'password'
  | 'switch'
  | 'email'
  | 'phone'
  | 'switch';
  title?: string;
  placeholder?: string;
  value?: string;
  setValue: (value: string) => void;
  error: boolean;
  focused: boolean;
  propStyles?: any;
  isForgotPass?: boolean;
  forgotPassNav?: any;
  reffer?: any;
  submit?: () => void;
  disabled?: boolean;
}

const Input: FC<IInput> = ({
  type,
  title,
  placeholder,
  value,
  setValue,
  error,
  focused,
  propStyles,
  isForgotPass,
  forgotPassNav,
  reffer,
  submit,
  disabled,
}) => {
  const [isSecurePass, setIsSecurePass] = useState(true);
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    input: {
      backgroundColor: monoBG,
      paddingHorizontal: 20,
      width: '90%',
      height: 46,
      borderRadius: 6,
      color: disabled ? 'rgba(35, 45, 56, 0.5)' : monoDisplay,
    },
    title: {
      color: disabled ? 'rgba(87, 100, 115, 0.5)' : monoLabel,
      marginBottom: 8,
    },
    wrapper: {
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: monoBG,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    bottomLabel: {
      fontWeight: 'bold',
      color: primaryColor,
      textAlign: 'right',
      marginTop: '5%',
    },
  });

  const getBorderColor = (): string => {
    if (error) {
      return defaultDanger;
    }

    if (focused) {
      return primaryColor;
    } else {
      return monoBG;
    }
  };

  const openForgotPassword = () => {
    Linking.openURL(`${Config.REACT_APP_LOGIN_URL}/api/sso/accounts/password_reset/`)
  }

  switch (type) {
    case 'text':
      return (
        <View style={propStyles}>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              ...styles.title,
            }}
          >
            {title}
          </TextC>
          <View style={{ ...styles.wrapper, borderColor: getBorderColor() }}>
            <TextInput
              returnKeyType={'done'}
              style={styles.input}
              onChangeText={setValue}
              value={`${value}`}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              autoCapitalize={'none'}
              editable={!disabled}
              selectTextOnFocus={!disabled}
            />
          </View>
        </View>
      );
    case 'textArea':
      return (
        <View style={{ ...propStyles }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TextC
              styles={{
                ...globalFontStyles.monoLabel,
                ...styles.title,
              }}
            >
              {title}
            </TextC>
            <TextC>{value?.length}/1000</TextC>
          </View>
          <View
            style={{
              ...styles.wrapper,
              borderColor: getBorderColor(),
              height: 102,

              width: '99%',
            }}
          >
            <TextInput
              blurOnSubmit
              multiline={true}
              numberOfLines={4}
              textAlignVertical={'top'}
              returnKeyType={'done'}
              style={{
                ...styles.input,
                height: 100,
                paddingHorizontal: 20,
                paddingTop: 15,
              }}
              onChangeText={setValue}
              value={`${value}`}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              autoCapitalize={'none'}
              editable={!disabled}
              selectTextOnFocus={!disabled}
              maxLength={1000}
            />
          </View>
        </View>
      );
    case 'email':
      return (
        <View style={propStyles}>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              ...styles.title,
            }}
          >
            {title}
          </TextC>
          <View
            style={{
              ...styles.wrapper,
              borderColor: getBorderColor(),
              paddingRight: 5,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              keyboardType={'email-address'}
              onSubmitEditing={submit}
              autoCapitalize={'none'}
              editable={!disabled}
              selectTextOnFocus={!disabled}
              textContentType={'username'}
              autoComplete={'username'}
            />
            {!disabled && value && value.length > 0 && (
              <TouchableOpacity
                onPress={() => setValue('')}
                style={{
                  borderRadius: 100,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: [
                    {
                      rotate: `45 deg`,
                    },
                  ],
                }}
              >
                <Plus color={monoColor} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    case 'phone':
      return (
        <View style={propStyles}>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              ...styles.title,
            }}
          >
            {title}
          </TextC>
          <View style={{ ...styles.wrapper, borderColor: getBorderColor() }}>
            <TextInput
              autoComplete={'tel'}
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              keyboardType={'phone-pad'}
              onSubmitEditing={submit}
              autoCapitalize={'none'}
              editable={!disabled}
              selectTextOnFocus={!disabled}
            />
          </View>
        </View>
      );
    case 'switch':
      return (
        <View style={propStyles}>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              ...styles.title,
            }}
          >
            {title}
          </TextC>
          <View style={{ ...styles.wrapper, borderColor: getBorderColor() }}>
            <TextInput
              autoComplete={'tel'}
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              keyboardType={'phone-pad'}
              onSubmitEditing={submit}
              autoCapitalize={'none'}
            />
          </View>
        </View>
      );
    case 'password':
      return (
        <View style={propStyles}>
          <TextC
            styles={{
              ...globalFontStyles.monoLabel,
              ...styles.title,
            }}
          >
            {title}
          </TextC>
          <View style={{ ...styles.wrapper, borderColor: getBorderColor() }}>
            <TextInput
              style={styles.input}
              onChangeText={setValue}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={monoColor}
              secureTextEntry={isSecurePass}
              ref={reffer}
              autoCapitalize={'none'}
              textContentType={'password'}
              autoComplete={'password'}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecurePass((prev) => !prev);
              }}
            >
              {isSecurePass ? <EyeIcon /> : <Unvisible />}
            </TouchableOpacity>
          </View>
          {isForgotPass && (
            <View
              style={{ width: '100%', display: 'flex', alignItems: 'flex-end' }}
            >
              <TouchableOpacity
                onPress={openForgotPassword}
                style={{ width: '50%' }}
              >
                <TextC
                  styles={{
                    ...globalFontStyles.monoLabel,
                    ...styles.bottomLabel,
                  }}
                >
                  {t('ForgotPassword')}
                </TextC>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
  }
};

export default Input;
