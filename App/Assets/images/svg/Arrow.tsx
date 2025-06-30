import * as React from 'react';
import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgProps } from 'react-native-svg/lib/typescript/ReactNativeSVG';

interface IArrow {
  angle: number;
  width: number;
  height: number;
  color?: string;
  style?: SvgProps['style']
}

const SvgComponent: FC<IArrow> = ({ angle, width, height, style, color }) => (

  <Svg
    style={[{
      transform: [
        {
          rotate: `${angle}deg`,
        },
      ]
    }, style]}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293.293a1 1 0 0 1 1.414 0L8.67 7.256a1 1 0 0 1 0 1.414l-6.963 6.963A1 1 0 1 1 .293 14.22l6.256-6.256L.293 1.707a1 1 0 0 1 0-1.414Z"
      fill={color ?? "#576473"}
    />
  </Svg>
);

export default SvgComponent;
