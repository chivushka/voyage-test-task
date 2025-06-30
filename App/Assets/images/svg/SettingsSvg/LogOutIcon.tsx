import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const LogOutIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M9.167 16.16V6.252c0-.575-.296-1.109-.784-1.413L5.05 2.756C3.94 2.062 2.5 2.86 2.5 4.169v9.907c0 .575.296 1.109.783 1.413l3.334 2.084c1.11.694 2.55-.105 2.55-1.413Z"
      stroke="#CA2867"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 9.167h5M15.833 10.833 17.5 9.167 15.833 7.5M9.167 15.834H12.5c.92 0 1.667-.746 1.667-1.667v-.833M14.167 5v-.833c0-.921-.746-1.667-1.667-1.667H4.167"
      stroke="#CA2867"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LogOutIcon
