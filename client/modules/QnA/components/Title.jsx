/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React from 'react';
import { StyledTitle } from '../styles.js';

const Title = ({ fontSize, title }) => (
  <StyledTitle fontSize={fontSize} className="title">
    {title}
  </StyledTitle>
);

export default Title;
