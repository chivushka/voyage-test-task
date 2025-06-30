import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={26}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.001 2a5 5 0 0 0-5 5v4c0 .201.012.4.035.593l.024.207L2 12v8.826l.65.759-.65-.76 4.787-4.103A3 3 0 0 1 8.74 16H19a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5h-12Zm-7 5a7 7 0 0 1 7-7h12a7 7 0 0 1 7 7v4a7 7 0 0 1-7 7H8.74a1 1 0 0 0-.65.24l-4.788 4.104-.645-.752.645.752C2.004 23.456 0 22.534 0 20.826V12c0-.119.01-.236.03-.35-.019-.215-.029-.431-.029-.65V7Z"
            fill="#0B907B"
        />
    </Svg>
)

export default SvgComponent
