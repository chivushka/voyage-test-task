import { TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import TextC from './TextComponent';

interface ITouchableIcon {
  children: any;
  handleClick: () => void;
  customStyles?: any;
}

const TouchableText: FC<ITouchableIcon> = ({
  children,
  handleClick,
  customStyles,
}) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <TextC styles={{ ...customStyles }}>{children}</TextC>
    </TouchableOpacity>
  );
};

export default TouchableText;
