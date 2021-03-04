import React from 'react';

const ImageThumbnail = ({ images }) => (
  <div className="image">
    {images.map((image, index) => <img key={index} src={image} width="75" height="75" />)}
  </div>
);

export default ImageThumbnail;
