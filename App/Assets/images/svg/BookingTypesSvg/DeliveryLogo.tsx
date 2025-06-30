import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M56.113 54.888a4.75 4.75 0 0 1 0 6.72 4.75 4.75 0 0 1-6.72 0 4.75 4.75 0 0 1 0-6.72 4.75 4.75 0 0 1 6.72 0M23.112 54.888a4.75 4.75 0 0 1 0 6.72 4.752 4.752 0 1 1 0-6.72M30 12h12c1.656 0 3 1.344 3 3v30H6"
      stroke="#0B907B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 58.248H9c-1.656 0-3-1.344-3-3V39M45 21h12.969c1.227 0 2.331.747 2.784 1.887l4.818 12.042A6.02 6.02 0 0 1 66 37.155v17.844c0 1.656-1.344 3-3 3h-5.493M48 58.26H24.51"
      stroke="#0B907B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M66 42H54V30h9.6M6 12h15M6 21h9M9 30H6"
      stroke="#0B907B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
