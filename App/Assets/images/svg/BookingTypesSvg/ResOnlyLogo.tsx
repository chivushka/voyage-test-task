import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={72}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      clipRule="evenodd"
      d="M43.902 23.721a14.304 14.304 0 0 1 6.404 6.417c3.561 6.881 1.291 15.342-5.235 19.517-6.527 4.176-15.16 2.69-19.915-3.428a15.16 15.16 0 0 1-1.477-16.09 14.304 14.304 0 0 1 6.417-6.416 1.5 1.5 0 0 1 2.164 1.363v11.915h9.49V25.084a1.5 1.5 0 0 1 2.152-1.363Z"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx={36.999}
      cy={36.999}
      r={27.011}
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M29.495 49.98v12.972"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M44.502 49.982v12.969"
      stroke="#0B907B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
