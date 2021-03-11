import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from './styles.js';
import ImageModal from './components/ImageModal.jsx';

const ImageThumbnail = ({ images, productName }) => {
  const [showModal, setModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const handleOnClick = (e) => {
    setModal(true);
    setCurrent(Number(e.target.getAttribute('data-index')));
  };
  return (
    <>
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          src={image}
          onClick={handleOnClick}
          data-index={index}
          loading="lazy"
          alt={productName}
          data-test="component-thumbnail"
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
    </>
  );
};

export default ImageThumbnail;

ImageThumbnail.propTypes = {
  images: PropTypes.oneOf([]),
  productName: PropTypes.string,
};

ImageThumbnail.defaultProps = {
  images: [],
  productName: 'patagucci',
};
