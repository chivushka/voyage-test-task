import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import {FC} from "react";

interface IPlus{
    color?:string;
}

const SvgComponent:FC<IPlus> = ({color}) => (
    <Svg
        width={18}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            clipRule="evenodd"
            d="M9.167 15.832v-9.58c0-.575-.296-1.109-.784-1.413L5.05 2.756C3.94 2.062 2.5 2.86 2.5 4.169v9.579c0 .575.296 1.109.783 1.413l3.334 2.083c1.11.694 2.55-.104 2.55-1.412Z"
            stroke={ color || "#fff"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M17.5 9.167h-5M14.167 7.5 12.5 9.167l1.667 1.666M9.167 15.833H12.5c.92 0 1.667-.746 1.667-1.667v-.833M14.167 5v-.833c0-.921-.746-1.667-1.667-1.667H4.167"
            stroke={ color || "#fff"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SvgComponent
