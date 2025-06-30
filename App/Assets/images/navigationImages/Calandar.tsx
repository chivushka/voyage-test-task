import * as React from "react"
import { FC } from "react"
import Svg, { Path } from "react-native-svg"
import { IIcon } from "./HomeIcon"

const SvgComponent:FC<IIcon> = ({color}) => {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.333 0a1 1 0 00-1 1v1h-8V1a1 1 0 10-2 0v1h-1a4 4 0 00-4 4v13a4 4 0 004 4h14a4 4 0 004-4V6a4 4 0 00-4-4h-1V1a1 1 0 00-1-1zm2 4a2 2 0 012 2v1h-18V6a2 2 0 012-2h14zm-16 5h18v10a2 2 0 01-2 2h-14a2 2 0 01-2-2V9zm14.5 4a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zm-7 0a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zm7 4a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zm-7 0a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1z"
        fill={color}
      />
    </Svg>
  )
}

export default SvgComponent