import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Location = (props: SvgProps) => (
  <Svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.667a7.5 7.5 0 0 0-7.5 7.5c0 .716.259 1.545.743 2.453.48.9 1.154 1.825 1.913 2.716 1.519 1.783 3.316 3.356 4.4 4.248a.69.69 0 0 0 .889 0c1.083-.892 2.88-2.465 4.399-4.248.76-.89 1.433-1.815 1.913-2.716.484-.908.743-1.737.743-2.453a7.5 7.5 0 0 0-7.5-7.5Zm-9.167 7.5a9.167 9.167 0 0 1 18.334 0c0 1.094-.387 2.202-.939 3.237-.556 1.043-1.31 2.068-2.116 3.013-1.61 1.89-3.493 3.536-4.609 4.454a2.356 2.356 0 0 1-3.006 0c-1.116-.918-2.999-2.563-4.61-4.454-.805-.945-1.56-1.97-2.115-3.013C1.22 11.37.833 10.261.833 9.167ZM10 7.5a1.667 1.667 0 1 0 0 3.333A1.667 1.667 0 0 0 10 7.5ZM6.667 9.167a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0Z"
      fill="#141F2B"
    />
  </Svg>
);

export default Location;
