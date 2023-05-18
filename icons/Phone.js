import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPhone = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 26 26"
    {...props}>
    <Path
      stroke="#1C1F1E"
      strokeWidth={2}
      d="m12.039 13.887-.013-.013-.014-.013a10.885 10.885 0 0 1-2.453-3.433l1.46-1.754.017-.021.017-.023a1.379 1.379 0 0 0 .017-1.618L8.28 2.875a2.204 2.204 0 0 0-.693-.679l-.525.851.525-.851a2.204 2.204 0 0 0-2.724.326L2.83 4.482a3.275 3.275 0 0 0-.949 3.073v.001a21.336 21.336 0 0 0 5.854 10.627l.006.006.006.006c3 2.867 6.745 4.833 10.81 5.673a3.407 3.407 0 0 0 3.09-.912l1.965-1.94a2.205 2.205 0 0 0 .347-2.786l-.844.536.844-.536a2.204 2.204 0 0 0-.709-.697l-4.192-2.702a1.403 1.403 0 0 0-1.576.012l-.028.02-.027.02-1.814 1.445a11.263 11.263 0 0 1-3.574-2.441Z"
    />
  </Svg>
);
export default SvgPhone;
