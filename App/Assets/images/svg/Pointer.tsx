import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Pointer = (props: SvgProps) => (
  <Svg
    width={16}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.968.354S.466 4.729.423 4.765a.974.974 0 0 0 .008 1.502c.048.039 4.4 4.507 4.4 4.507a.998.998 0 0 0 1.407.018.984.984 0 0 0 .018-1.397L3.452 6.533l9.607.126a.994.994 0 0 0 1.012-.975.994.994 0 0 0-.987-1.002l-9.606-.125L6.356 1.77A.984.984 0 0 0 6.374.372.998.998 0 0 0 4.968.354Z"
      fill="#fff"
    />
  </Svg>
)

export default Pointer
