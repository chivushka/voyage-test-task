import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { IIcon } from "./HomeIcon"

const SvgComponent : React.FC<IIcon> = ({color}) => {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_2597_11169)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.5 0h-8v8h8V0zm-2 2v4h-4V2h4zm-8-2h-4v2h2v1h-2v2h2v3h2V0zm-6 0h-8v8h8V0zm-2 2v4h-4V2h4zm6 9h2v2h4v-2h-2V9h-4v2zm0 2h2v2h-2v2h2v2h-2v3h2v2h-8v-2h4v-3h-4v-2h-2v-5h-4v-2h6v5h2v2h2v-2h2v-2zm0 0v-2h-2V9h-2v4h4zm8-2v2h4v-2h-4zm4 5h-8v8h8v-8zm-2 2v4h-4v-4h4zm-22-2h2v-2h-2v2zm2 5h2v-2h-4v5h2v-3z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2597_11169">
          <Path
            fill="#fff"
            transform="matrix(-1 0 0 1 24.5 0)"
            d="M0 0H23.9991V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent