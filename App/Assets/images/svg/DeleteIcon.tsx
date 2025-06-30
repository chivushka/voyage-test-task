import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3.333A3.333 3.333 0 0 1 8.333 0h3.334A3.333 3.333 0 0 1 15 3.333h4.167a.833.833 0 0 1 0 1.667h-.874l-.513 10.25A5 5 0 0 1 12.786 20H7.215a5 5 0 0 1-4.994-4.75L1.707 5H.833a.833.833 0 0 1 0-1.667H5ZM3.376 5l.508 10.166a3.333 3.333 0 0 0 3.33 3.167h5.572a3.333 3.333 0 0 0 3.33-3.166L16.624 5H3.376Zm9.957-1.667H6.667c0-.92.746-1.666 1.666-1.666h3.334c.92 0 1.666.746 1.666 1.666Zm-5.833 5c.46 0 .833.373.833.834v4.166a.833.833 0 1 1-1.666 0V9.167c0-.46.373-.834.833-.834Zm5 0c.46 0 .833.373.833.834v4.166a.833.833 0 1 1-1.666 0V9.167c0-.46.373-.834.833-.834Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent
