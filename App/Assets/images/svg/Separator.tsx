import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={414}
      height={1}
      viewBox="0 0 414 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path stroke="#DBE2E9" d="M-0.00244141 0.5L414.002 0.5" />
    </Svg>
  )
}

export default SvgComponent