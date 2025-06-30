import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IIcon} from './HomeIcon';

const ListIcon: FC<IIcon> = ({color}) => (
  <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5-.75C14 .56 13.44 0 12.75 0H1.25C.56 0 0 .56 0 1.25v3.5C0 5.44.56 6 1.25 6h11.5C13.44 6 14 5.44 14 4.75v-3.5ZM12 2v2H2V2h10Zm10 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5-.75C14 8.56 13.44 8 12.75 8H1.25C.56 8 0 8.56 0 9.25v3.5C0 13.44.56 14 1.25 14h11.5c.69 0 1.25-.56 1.25-1.25v-3.5ZM12 10v2H2v-2h10Zm10 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5-.75c0-.69-.56-1.25-1.25-1.25H1.25C.56 16 0 16.56 0 17.25v3.5C0 21.44.56 22 1.25 22h11.5c.69 0 1.25-.56 1.25-1.25v-3.5ZM12 18v2H2v-2h10Z"
      fill={color}
    />
  </Svg>
);

export default ListIcon;
