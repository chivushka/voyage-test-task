import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface IPlus{
  color?:string;
}

const Plus:React.FC<IPlus> = ({color}) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 .667c.46 0 .833.373.833.833v6.667H16.5a.833.833 0 0 1 0 1.666H9.833V16.5a.833.833 0 0 1-1.666 0V9.833H1.5a.833.833 0 0 1 0-1.666h6.667V1.5c0-.46.373-.833.833-.833Z"
      fill={color || "#fff"}
    />
  </Svg>
);

export default Plus;
