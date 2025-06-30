import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.333 2.333a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-6.666 5a6.667 6.667 0 1 1 13.333 0 6.667 6.667 0 0 1-13.333 0Z"
      fill="#576473"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.91 10.91a.833.833 0 0 1 1.18 0l5 5a.833.833 0 0 1-1.18 1.18l-5-5a.833.833 0 0 1 0-1.18Z"
      fill="#576473"
    />
  </Svg>
)

export default SearchIcon
