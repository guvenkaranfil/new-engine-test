import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLocation = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      fill="#1C1F1E"
      d="M13 13c.596 0 1.106-.212 1.53-.637.425-.424.637-.934.637-1.53a2.09 2.09 0 0 0-.636-1.53A2.09 2.09 0 0 0 13 8.667c-.596 0-1.106.212-1.53.636a2.087 2.087 0 0 0-.637 1.53c0 .596.213 1.106.637 1.53.424.425.934.637 1.53.637Zm0 7.962c2.203-2.022 3.837-3.859 4.902-5.511 1.065-1.652 1.598-3.119 1.598-4.401 0-1.968-.628-3.58-1.883-4.835C16.363 4.961 14.823 4.333 13 4.333c-1.824 0-3.363.628-4.618 1.882C7.127 7.47 6.5 9.082 6.5 11.05c0 1.282.533 2.749 1.598 4.4 1.065 1.653 2.7 3.49 4.902 5.512Zm0 2.465c-.145 0-.289-.027-.433-.081a1.3 1.3 0 0 1-.38-.217c-2.636-2.329-4.604-4.491-5.904-6.486-1.3-1.995-1.95-3.86-1.95-5.593 0-2.708.872-4.866 2.614-6.473C8.69 2.97 10.707 2.167 13 2.167s4.31.803 6.052 2.41c1.743 1.607 2.615 3.765 2.615 6.473 0 1.733-.65 3.598-1.95 5.593-1.3 1.995-3.268 4.157-5.905 6.486-.108.09-.234.163-.379.217a1.228 1.228 0 0 1-.433.081Z"
    />
  </Svg>
);
export default SvgLocation;