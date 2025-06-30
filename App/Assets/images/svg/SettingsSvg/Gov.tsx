import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.173.347a1.667 1.667 0 0 1 1.654 0l8.529 4.873c1.483.848.882 3.114-.827 3.114H18.5v5.833h.833c.92 0 1.667.746 1.667 1.667v2.5c0 .92-.746 1.666-1.667 1.666H2.667C1.747 20 1 19.255 1 18.334v-2.5c0-.92.746-1.667 1.667-1.667H3.5V8.334H2.471c-1.709 0-2.31-2.266-.827-3.114l8.53-4.873Zm9.356 6.32L11 1.794 2.471 6.667H19.53Zm-6.862 1.667H9.333v5.833h3.334V8.334Zm1.666 5.833h2.5V8.334h-2.5v5.833ZM2.667 15.834v2.5h16.666v-2.5H2.667Zm5-1.667V8.334h-2.5v5.833h2.5Z"
      fill="#0B907B"
    />
  </Svg>
)

export default SvgComponent
