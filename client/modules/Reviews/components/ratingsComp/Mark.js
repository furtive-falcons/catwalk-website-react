import React from 'react';

const Mark = ({ color }) => (
  <svg id ='mark' width="18" height="18" viewBox="0 0 60 60"  xmlns="http://www.w3.org/2000/svg">
    <path d="M30 60L60 0H0L30 60Z" fill={color} />
  </svg>
);

export default Mark;
