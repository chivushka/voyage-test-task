import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1.167a5.833 5.833 0 1 0 0 11.666A5.833 5.833 0 0 0 7 1.167ZM0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm7-3.5c.322 0 .583.261.583.583V7a.583.583 0 1 1-1.166 0V4.083c0-.322.26-.583.583-.583Zm0 5.25c.322 0 .583.261.583.583v.292a.583.583 0 1 1-1.166 0v-.292c0-.322.26-.583.583-.583Z"
      fill="#0B907B"
    />
  </Svg>
);

export default SvgComponent;
