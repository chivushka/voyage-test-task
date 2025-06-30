import {TouchableOpacity} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface ITouchableIcon {
  children: ReactNode | string;
  handleClick: () => void;
  customStyles?: any;
}

const TouchableIcon: FC<ITouchableIcon> = ({
  children,
  handleClick,
  customStyles,
}) => {
  return (
    <TouchableOpacity style={{...customStyles}} onPress={handleClick}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableIcon;
