import * as React from "react"
import { FC } from "react";
import { View } from "react-native"
import Svg, { SvgProps, Path } from "react-native-svg"

interface IPolygon{
  angle: number;
  width: number;
  height: number;
}

const Polygon:FC<IPolygon> = ({angle, width, height}) => (
   <View
    style={{
      transform: [
        {
          rotate: `${angle}deg`,
        },
      ],
      width: width,
      height: height,
    }}>
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.918 7.006a1.25 1.25 0 0 1-1.836 0L1.01 2.598C.27 1.798.838.5 1.928.5h8.144c1.09 0 1.658 1.298.918 2.098L6.918 7.006Z"
        fill="#A0AEBD"
      />
    </Svg>
  </View>
)

export default Polygon
