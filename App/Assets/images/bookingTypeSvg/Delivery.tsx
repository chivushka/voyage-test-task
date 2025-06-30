import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const DeliveryIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.587 13.247a1.32 1.32 0 1 1-1.865 1.867 1.32 1.32 0 0 1 1.865-1.867M6.42 13.247a1.32 1.32 0 1 1-1.865 1.867 1.32 1.32 0 0 1 1.865-1.867M8.333 1.334h3.334c.46 0 .833.373.833.833v8.334H1.667"
      stroke="#0B907B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.167 14.18H2.5a.834.834 0 0 1-.833-.833V8.834M12.5 3.833h3.602c.341 0 .648.208.774.525l1.338 3.345c.079.196.12.406.12.618v4.957c0 .46-.374.833-.834.833h-1.526M13.333 14.184H6.808"
      stroke="#0B907B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.333 9.667H15V6.334h2.667M1.667 1.334h4.166M1.667 3.834h2.5M2.5 6.334h-.833"
      stroke="#0B907B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DeliveryIcon;
