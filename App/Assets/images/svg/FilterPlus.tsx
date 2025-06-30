import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IPlus{
  color?:string;
}

const Plus:React.FC<IPlus> = ({color}) => (
  <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 .167a.583.583 0 00-.583.583v4.667H.75a.583.583 0 000 1.166h4.667v4.667a.583.583 0 101.166 0V6.583h4.667a.583.583 0 000-1.167H6.583V.75A.583.583 0 006 .167z"
        fill={color || 'white'}
      />
    </Svg>
);

export default Plus;
