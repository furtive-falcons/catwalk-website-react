/* eslint-disable import/extensions */
import React from 'react';
import { StyledImage, StyledImagePopUp } from './styles.js';
import ImagePopUp from './ImagePopUp.jsx';

const ImageThumbnail = ({ images }) => {
  const handleOnClick = () => {
    console.log(StyledImagePopUp.componentStyle.rules);
  };
  return (
    <div className="image">
      {images.map((image, index) => (
        <StyledImage
          key={index}
          src={image}
          onClick={handleOnClick}
        />
      ))}
      <ImagePopUp />
    </div>
  );
};

export default ImageThumbnail;
