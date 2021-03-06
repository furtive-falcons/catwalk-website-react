/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Thumbnail } from './styles.js';
import ImageModal from './components/ImageModal.jsx';

const ImageThumbnail = ({ images }) => {
  const [showModal, setModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const handleOnClick = (e) => {
    setModal(true);
    setCurrent(Number(e.target.getAttribute('data-index')));
  };
  return (
    <div className="image">
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          src={image}
          onClick={handleOnClick}
          data-index={index}
        />
      ))}
      {showModal ? (
        <ImageModal
          images={images}
          showModal={showModal}
          imageIndex={current}
          setModal={setModal}
        />
      ) : null}
    </div>
  );
};

export default ImageThumbnail;