import React from 'react';

const FullStar = ({click, empty=false, size=17, color}) => (
  <svg onClick={click} height={size} viewBox="0 0 24 24" width={size} >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill={empty ? 'white' : color}
      stroke="black"
      strokeWidth="1.5"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

export default FullStar;
