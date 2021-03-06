/* eslint-disable import/extensions */
import React from 'react';
import { StyledImagePopUp } from './styles.js';

const ImagePopUp = ({ image }) => (
  <StyledImagePopUp className="test" >
    <img className="image-pop-up" src={image} />
  </StyledImagePopUp>
);

export default ImagePopUp;
