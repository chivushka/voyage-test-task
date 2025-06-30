import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { FC } from 'react';
import {
  defaultDanger,
  globalFontStyles,
  monoColor,
  primaryColor,
} from '../../Assets/Styles/styles';
import Loader from './Loader';

interface IButton {
  title: string;
  propStyles?: any;
  textStyles?: any;
  disabled?: boolean;
  outlined?: boolean;
  handleClick: any;

  isLoading?: boolean;
}

const Button: FC<IButton> = ({
  title,
  propStyles,
  disabled,
  outlined,
  handleClick,
  textStyles,
  isLoading,
}) => {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 56,
      backgroundColor: outlined ? 'white' : disabled ? monoColor : primaryColor,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: outlined ? defaultDanger : 'white',
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ ...styles.button, ...propStyles }}
      onPress={isLoading ? () => {} : handleClick}
      activeOpacity={isLoading ? 1 : undefined}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text
          style={{ ...globalFontStyles.h1, ...styles.title, ...textStyles }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
