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
      d="M7 0a1 1 0 0 1 1 1v1h8V1a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1V1a1 1 0 0 1 1-1ZM5 4a2 2 0 0 0-2 2v1h18V6a2 2 0 0 0-2-2H5Zm16 5H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9ZM6.5 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm7 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-7 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm7 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      fill="#A0AEBD"
    />
  </Svg>
);

export default SvgComponent;
