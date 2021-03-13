import React from 'react';

const PartialStar = ({
  percentage, size, color, background,
}) => (
  <svg height={size} viewBox="0 0 24 24" width={size} id="partialstar">
    <defs>
      <linearGradient id="grad2">
        <stop offset="0%" stopColor={color} />
        <stop offset={percentage !== 'N%' ? percentage : '0%'} stopColor={color} />
        <stop offset={percentage !== 'N%' ? percentage : '0%'} stopColor={background} />
        <stop offset="100%" stopColor={background} />
      </linearGradient>
    </defs>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="url(#grad2)"
      stroke="black"
      strokeWidth="1.5"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
);

export default PartialStar;
