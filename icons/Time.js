import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgTime = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M13 3.25c-5.383 0-9.75 4.367-9.75 9.75s4.367 9.75 9.75 9.75 9.75-4.367 9.75-9.75S18.383 3.25 13 3.25Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 8.938v4.874h4.063"
    />
  </Svg>
);
export default SvgTime;
