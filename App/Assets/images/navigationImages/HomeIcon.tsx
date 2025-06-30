import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export interface IIcon {
  color?: string;
  width?: number;
  height?: number;
}

const HomeIcon: FC<IIcon> = ({color}) => (
  <Svg width={22} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.593.195a1 1 0 0 0-1.186 0L1.628 6.659A4 4 0 0 0 0 9.88V20.5A3.5 3.5 0 0 0 3.5 24H7a2 2 0 0 0 2-2v-5.5h4V22a2 2 0 0 0 2 2h3.5a3.5 3.5 0 0 0 3.5-3.5V9.88a4 4 0 0 0-1.628-3.22L11.592.194ZM11 2.242l8.186 6.028A2 2 0 0 1 20 9.88V20.5a1.5 1.5 0 0 1-1.5 1.5H15v-6a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 7 16v6H3.5A1.5 1.5 0 0 1 2 20.5V9.88a2 2 0 0 1 .814-1.61L11 2.242Z"
      fill={color}
    />
  </Svg>
);

export default HomeIcon;
