import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11ZM8.707 10.243a1 1 0 0 0-1.414 1.414l2.828 2.828 4.95-4.95a1 1 0 0 0-1.414-1.414l-3.536 3.536-1.414-1.414Z"
      fill="#0B907B"
    />
  </Svg>
);

export default SvgComponent;
