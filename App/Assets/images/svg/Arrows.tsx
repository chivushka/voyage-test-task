import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.91 1.078a.833.833 0 0 1 1.18 0l5 5A.833.833 0 0 1 16.5 7.5h-15a.833.833 0 1 1 0-1.667h12.988l-3.577-3.577a.833.833 0 0 1 0-1.178ZM.73 13.015a.833.833 0 0 1 .77-.515h15a.833.833 0 0 1 0 1.667H3.512l3.577 3.577a.833.833 0 0 1-1.178 1.179l-5-5a.833.833 0 0 1-.18-.908Z"
            fill="#0B907B"
        />
    </Svg>
)

export default SvgComponent
