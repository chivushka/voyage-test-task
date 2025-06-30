import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.841 1.066a.833.833 0 0 1 .024 1.178L3.621 6.667H7.5c6.443 0 11.667 5.223 11.667 11.667a.833.833 0 1 1-1.667 0c0-5.523-4.477-10-10-10H3.621l4.244 4.423a.833.833 0 0 1-1.202 1.154L1.065 8.077a.833.833 0 0 1 0-1.154L6.663 1.09a.833.833 0 0 1 1.178-.024Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent
