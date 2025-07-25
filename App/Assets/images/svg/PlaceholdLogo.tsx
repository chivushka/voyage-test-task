import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';

interface SVG{
  x:24 | 32;
  y:12 | 16;
}

const PlaceholdLogo = ({x, y}) => (
  <Svg
    width={x}
    height={x}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <Circle cx={y} cy={y} r={y} fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.01563)" />
      </Pattern>
      <Image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default PlaceholdLogo;