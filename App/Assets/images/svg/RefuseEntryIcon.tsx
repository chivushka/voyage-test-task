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
            d="M9.238 8.405 10.833 10l-1.689 1.69M14.167 8.333l3.333 3.333M14.167 11.666 17.5 8.333M10.833 10h-5"
            stroke="#0B907B"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.833 15v.833c0 .921-.745 1.667-1.666 1.667h-10c-.921 0-1.667-.746-1.667-1.667V4.167c0-.921.746-1.667 1.667-1.667h10c.92 0 1.666.746 1.666 1.667V5"
            stroke="#0B907B"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SvgComponent
