/* eslint-disable import/no-cycle */
import React from 'react';
import { StyledTitle } from '../styles.js';

const Title = ({ title }) => (
  <StyledTitle className="title">
    {title}
  </StyledTitle>
);

export default Title;
