import * as React from 'react';
import { FC } from 'react';
import {View} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface IArrow {
  angle: number;
  width: number;
  height: number;
}

const BigArrow:FC<IArrow> = ({angle, width, height}) => (
  <View
    style={{
      transform: [
        {
          rotate: `${angle}deg`,
        },
      ],
      width: width,
      height: height,
    }}>
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.707.293a1 1 0 0 1 0 1.414L3.414 7H19a1 1 0 1 1 0 2H3.414l5.293 5.293a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z"
        fill="#fff"
      />
    </Svg>
  </View>
);

export default BigArrow;
