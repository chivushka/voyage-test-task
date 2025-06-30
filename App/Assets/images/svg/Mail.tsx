import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width={26} height={19} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.072 0A3 3 0 0 1 26 3v13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 2.928-3h20.144ZM2 3.273V16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V3.273l-8.297 7.606a4 4 0 0 1-5.406 0L2 3.273ZM22.43 2H3.57l8.079 7.405a2 2 0 0 0 2.702 0L22.43 2Z"
      fill="#0B907B"
    />
  </Svg>
);

export default SvgComponent;
