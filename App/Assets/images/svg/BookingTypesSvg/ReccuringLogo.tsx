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
      d="M39 57h-9c-8.283 0-15-6.717-15-15V15M33 15h9c8.283 0 15 6.717 15 15v27"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22.5 22.5 15 15l-7.5 7.5M48 48l9 9 9-9M42.446 42.038a1.582 1.582 0 1 1-2.238 2.237 1.582 1.582 0 1 1 2.238-2.237M31.456 42.038a1.582 1.582 0 1 1-2.235 2.237 1.582 1.582 0 0 1 2.235-2.237M33.75 27.756h3.996a1 1 0 0 1 1 .999v9.99H25.757"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M28.755 43.157h-1.998a1 1 0 0 1-.999-1v-5.41M38.745 30.753h4.319c.408 0 .776.249.927.628l1.604 4.01c.094.236.143.488.143.742v5.942a1 1 0 0 1-.999.999h-1.83M39.744 43.16h-7.822"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M45.738 37.746h-3.996V33.75h3.197M25.758 27.756h4.995M25.758 30.753h2.997M26.757 33.75h-.999"
      stroke="#0B907B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
