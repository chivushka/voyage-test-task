import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {FC} from "react";

interface ISvg{
    color?:string;
}
const SvgComponent:FC<ISvg> = ({color}) => (
  <Svg
    width={19}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.678.95a1 1 0 0 1 0 1.414L6.657 14.385.293 8.021a1 1 0 0 1 1.414-1.414l4.95 4.95L17.264.95a1 1 0 0 1 1.414 0Z"
      fill={color ? color : "#0B907B"}
    />
  </Svg>
);

export default SvgComponent;
