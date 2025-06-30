import * as React from "react"
import Svg, { SvgProps, Path, Circle } from "react-native-svg"

const ResourseOnlyIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			clipRule="evenodd"
			d="M11.92 6.313a3.971 3.971 0 0 1 1.778 1.782 4.162 4.162 0 0 1-6.983 4.468 4.21 4.21 0 0 1-.41-4.468 3.972 3.972 0 0 1 1.782-1.782.417.417 0 0 1 .6.379V10h2.636V6.692a.417.417 0 0 1 .597-.379Z"
			stroke="#0B907B"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Circle
			cx={10}
			cy={10}
			r={7.5}
			stroke="#0B907B"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M7.918 13.604v3.602M12.085 13.605v3.6"
			stroke="#0B907B"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
)

export default ResourseOnlyIcon
