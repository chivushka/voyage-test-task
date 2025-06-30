import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ReccuringIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.833 15.833h-2.5a4.167 4.167 0 0 1-4.166-4.167v-7.5M9.167 4.167h2.5c2.3 0 4.166 1.865 4.166 4.166v7.5"
      stroke="#0B907B"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.25 6.25 4.167 4.167 2.083 6.25M13.333 13.334l2.5 2.5 2.5-2.5"
      stroke="#0B907B"
      strokeWidth={0.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.79 11.677a.44.44 0 1 1-.62.622.44.44 0 0 1 .62-.622M8.738 11.677a.44.44 0 1 1-.621.622.44.44 0 0 1 .62-.622M9.375 7.71h1.11c.153 0 .277.124.277.277v2.775H7.155"
      stroke="#0B907B"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.987 11.988h-.554a.278.278 0 0 1-.278-.277v-1.504M10.762 8.542h1.2c.114 0 .216.07.258.175l.445 1.114c.026.065.04.135.04.206v1.65a.278.278 0 0 1-.277.278h-.509M11.04 11.99H8.867"
      stroke="#0B907B"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.705 10.485h-1.11v-1.11h.888M7.155 7.71h1.388M7.155 8.543h.832M7.433 9.375h-.278"
      stroke="#0B907B"
      strokeWidth={0.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default ReccuringIcon
