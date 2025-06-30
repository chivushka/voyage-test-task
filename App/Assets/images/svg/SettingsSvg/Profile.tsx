import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Profile = (props: SvgProps) => (
  <Svg
    width={20}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.5a2.917 2.917 0 1 0 0 5.834 2.917 2.917 0 0 0 0-5.833ZM5.417 5.418a4.583 4.583 0 1 1 9.166 0 4.583 4.583 0 0 1-9.166 0ZM10 13.751c-2.127 0-4.148.82-5.41 1.473-.559.29-.937.88-1.022 1.6l-.13 1.093h13.124l-.13-1.093c-.085-.72-.463-1.31-1.023-1.6-1.261-.652-3.282-1.473-5.409-1.473Zm-6.175-.007c1.36-.703 3.66-1.66 6.175-1.66 2.515 0 4.816.957 6.175 1.66 1.132.586 1.773 1.712 1.912 2.884l.24 2.024a.833.833 0 0 1-.827.932h-15a.833.833 0 0 1-.827-.931l.24-2.025c.139-1.172.78-2.298 1.912-2.884Z"
      fill="#0B907B"
    />
  </Svg>
)

export default Profile
