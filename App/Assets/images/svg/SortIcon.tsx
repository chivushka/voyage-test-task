import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SortIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2.035a.583.583 0 0 0-.4 0L.385 2.368a.583.583 0 0 0-.042 1.08l6.417 2.916c.153.07.33.07.482 0l6.417-2.916a.583.583 0 0 0-.042-1.08L7.2.035Zm4.675 2.942L7 5.193 2.125 2.977 7 1.204l4.875 1.773Zm2.073 3.49a.583.583 0 0 0-.773-.29L7 8.984.825 6.177A.583.583 0 1 0 .342 7.24l6.417 2.917c.153.07.33.07.482 0l6.417-2.917a.583.583 0 0 0 .29-.772Zm0 3.792a.583.583 0 0 0-.773-.29L7 12.776.825 9.969a.583.583 0 0 0-.483 1.062l6.417 2.917c.153.07.33.07.482 0l6.417-2.917a.583.583 0 0 0 .29-.772Z"
      fill="#3F4B57"
    />
  </Svg>
)

export default SortIcon
