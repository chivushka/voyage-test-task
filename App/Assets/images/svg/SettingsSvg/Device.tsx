import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Device = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.333 3.333A3.333 3.333 0 0 1 6.667 0h6.666a3.333 3.333 0 0 1 3.334 3.333v13.334A3.333 3.333 0 0 1 13.333 20H6.667a3.333 3.333 0 0 1-3.334-3.333V3.333Zm3.334-1.666C5.747 1.667 5 2.413 5 3.333v13.334c0 .92.746 1.666 1.667 1.666h6.666c.92 0 1.667-.746 1.667-1.666V3.333c0-.92-.746-1.666-1.667-1.666H6.667Zm1.666 14.166c0-.46.373-.833.834-.833h1.666a.833.833 0 1 1 0 1.667H9.167a.833.833 0 0 1-.834-.834Z"
      fill="#0B907B"
    />
  </Svg>
)

export default Device
