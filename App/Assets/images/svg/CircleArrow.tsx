import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={24}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.908 2.578a5.333 5.333 0 0 0-8.11 2.952.667.667 0 0 1-1.28-.368A6.667 6.667 0 0 1 13.795 3.84l.242-.446a.667.667 0 0 1 1.172.635l-.824 1.52a.667.667 0 0 1-.488.343l-1.711.254a.667.667 0 0 1-.196-1.32l.754-.11a5.333 5.333 0 0 0-1.837-2.138Zm-6.44 6.28a.667.667 0 0 1-.56.758l-.58.086a5.334 5.334 0 0 0 9.511-.629.667.667 0 0 1 1.229.518 6.666 6.666 0 0 1-11.866.827l-.341.63a.667.667 0 1 1-1.173-.634l.824-1.521c.1-.185.28-.312.488-.342l1.712-.254a.667.667 0 0 1 .757.561Z"
            fill="#0B907B"
        />
    </Svg>
)

export default SvgComponent
