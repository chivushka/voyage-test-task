import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const AlertIcon = (props: SvgProps) => (
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
      d="M10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666ZM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-5c.46 0 .833.373.833.833V10a.833.833 0 0 1-1.666 0V5.833c0-.46.373-.833.833-.833Zm0 7.5c.46 0 .833.373.833.833v.417a.833.833 0 0 1-1.666 0v-.417c0-.46.373-.833.833-.833Z"
      fill="#0B907B"
    />
  </Svg>
)

export default AlertIcon
