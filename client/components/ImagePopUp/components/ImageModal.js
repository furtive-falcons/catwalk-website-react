/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import { ModalBackground, ModalWrapper, ModalImage } from '../styles';

const ImageModal = ({
  images, setModal, imageIndex, showModal,
}) => {
  const [current, setCurrent] = useState();
  const length = images.length - 1;
  const modalRef = useRef();

  const nextSlide = () => {
    setCurrent((prev) => (prev === length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length : prev - 1));
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target || modalRef.current.children[0] === e.target.parentNode) {
      setModal(false);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    setCurrent(imageIndex);
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [imageIndex]);

  return (
    <>
      <ModalBackground onClick={closeModal} ref={modalRef}>
          <i className="fas fa-times close" onClick={closeModal} />
        <div className="right-arrow" onClick={nextSlide}>
          <i className="fas fa-chevron-right" />
        </div>
        <div className="left-arrow" onClick={prevSlide}>
          <i className="fas fa-chevron-left" />
        </div>
        {images.map((image, index) => (
          <ModalWrapper key={index} className={current === index ? 'slide active' : 'slide'}>
            <ModalImage key={index} src={image} />
          </ModalWrapper>
        ))}
      </ModalBackground>
    </>
  );
};

export default ImageModal;
