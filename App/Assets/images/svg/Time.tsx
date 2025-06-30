import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Time = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-5c.46 0 .833.373.833.833v4.655l1.84 1.84a.833.833 0 0 1-1.179 1.178l-2.083-2.083a.833.833 0 0 1-.244-.59v-5c0-.46.373-.833.833-.833Z"
      fill="#141F2B"
    />
  </Svg>
);

export default Time;
