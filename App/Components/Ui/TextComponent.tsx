import { Text, TextProps } from 'react-native';
import React, { FC, HTMLAttributes } from 'react';
import { globalFontStyles } from '../../Assets/Styles/styles';

interface IText extends TextProps {
  children: React.ReactNode;
  styles?: Object;
}

const TextC: FC<IText> = ({ children, styles }) => {
  return (
    <Text style={styles}>{children}</Text>
  );
};

export default TextC;
