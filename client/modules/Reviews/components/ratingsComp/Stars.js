import React from 'react';
import styled from 'styled-components';

const rateMax = 5;

const StyledSvg = styled.svg(({ height }) => ({
  height: height || null,
}));

const Div = styled.div({
  alignItems: 'center',
  display: 'inline-flex',
});
const RectMask = styled.rect(({ rate }) => ({
  height: '100%',
  width: `${parseInt((rate / rateMax) * 100, 10)}​​​​​​​%`,
}));
// const RatingStars = props => {
//     const clipId = 'rating-stars-clip-';
//     const maskId = 'rating-stars-mask-';
//     const {​​​​​​​ emptyStarColor, fullStarColor, height, rate }​​​​​​​ = props;
// const RatingStars = props => {
//   const clipId = 'rating-stars-clip-';
//   const maskId = 'rating-stars-mask-';
//   const {​​​​​​​ emptyStarColor, fullStarColor, height, rate }​​​​​​​ = props;
const RatingStars = ({
  emptyStarColor, fullStarColor, height, rate,
}) => {
  const clipId = 'rating-stars-clip-';
  const maskId = 'rating-stars-mask-';

  if (rate === null) return null;

  return (
    <Div>

      <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="1" fill ="white" />
        <linearGradient>
            <stop offset='50%' stopColor='red'/>
            <stop offset='100%' stopColor='transpare'/>
        </linearGradient>
</svg>
      {/* <svg  fill={emptyStarColor} height={height} viewBox="0 0 220 35">
        <defs> */}

          {/* <RectMask rate={rate} id={maskId} fill="none" />
          <clipPath id={clipId}>
            <use xlinkHref={`#${maskId}`} />
          </clipPath> */}
          {/* <linearGradient>
            <stop offset='0%' stopColor='red'/>
            <stop offset='50%' stopColor='red'/>
            <stop offset='50%' stopColor='white'/>
            <stop offset='100%' stopColor='white'/>
          </linearGradient>
        </defs> */}
        {/* <g>
          <path d="M29.29 34.44L18.1 28.56 6.91 34.44 9.05 22 0 13.16l12.51-1.82L18.1 0l5.6 11.34 12.5 1.82L27.15 22zM5.47 14.93l6.32 6.16-1.49 8.69 7.81-4.1 7.81 4.1-1.49-8.69 6.32-6.16L22 13.67l-3.9-7.91-3.9 7.91zM73 34.44l-11.15-5.88-11.19 5.88L52.8 22l-9.05-8.82 12.51-1.82L61.85 0l5.59 11.33L80 13.16 70.9 22zM49.22 14.93l6.32 6.16L54 29.78l7.81-4.1 7.81 4.1-1.49-8.69 6.32-6.16-8.73-1.27-3.9-7.91-3.9 7.91zM116.66 34.44l-11.19-5.88-11.18 5.88L96.43 22l-9.05-8.82 12.51-1.82L105.48 0l5.59 11.33 12.51 1.82-9.05 8.85zM92.85 14.93l6.32 6.16-1.49 8.69 7.81-4.1 7.81 4.1-1.49-8.69 6.32-6.16-8.73-1.27-3.9-7.91-3.9 7.91zM160.54 34.44l-11.19-5.88-11.19 5.88L140.3 22l-9.05-8.82 12.51-1.82L149.35 0l5.59 11.33 12.51 1.82L158.4 22zm-23.82-19.5l6.28 6.15-1.49 8.69 7.81-4.1 7.81 4.1-1.49-8.69 6.36-6.16-8.73-1.27-3.9-7.91-3.9 7.91zM204.16 34.44L193 28.56l-11.19 5.88L183.93 22l-9.05-8.82 12.51-1.82L193 0l5.59 11.33 12.51 1.82L202 22zm-23.82-19.5l6.32 6.16-1.49 8.69 7.81-4.1 7.81 4.1-1.49-8.69 6.32-6.16-8.73-1.27L193 5.76l-3.9 7.91z" />
        </g> */}
        {/* <use xlinkHref={`#${maskId}`} />
        <g clipPath={`url(#${clipId})`} fill={fullStarColor}>
          <path d="M18.15 0l5.59 11.34 12.51 1.82-9.05 8.82 2.14 12.46-11.19-5.88-11.19 5.88 2.13-12.46-9.05-8.82 12.51-1.82L18.15 0zM61.84 0l5.6 11.34 12.51 1.82-9.05 8.82 2.13 12.46-11.19-5.88-11.19 5.88 2.14-12.46-9.05-8.82 12.51-1.82L61.84 0zM105.54 0l5.6 11.34 12.51 1.82-9.06 8.82 2.14 12.46-11.19-5.88-11.19 5.88 2.14-12.46-9.06-8.82 12.51-1.82L105.54 0zM149.24 0l5.59 11.34 12.51 1.82-9.05 8.82 2.14 12.46-11.19-5.88-11.2 5.88 2.14-12.46-9.05-8.82 12.51-1.82L149.24 0zM192.93 0l5.6 11.34 12.51 1.82-9.05 8.82 2.13 12.46-11.19-5.88-11.19 5.88 2.14-12.46-9.06-8.82 12.52-1.82L192.93 0z" />
        </g> */}
      {/* </svg> */}
    </Div>
  );
};

export default RatingStars;