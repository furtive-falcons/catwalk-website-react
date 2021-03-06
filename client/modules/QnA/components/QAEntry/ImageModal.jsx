// /* eslint-disable import/extensions */
// import React, { useState, useEffect } from 'react';
// import { ModalBackground, ModalWrapper, ModalImage } from './styles.js';

// const ImageModal = ({
//   images, setModal, imageIndex, showModal
// }) => {
//   const [current, setCurrent] = useState(0);
//   const length = images.length - 1;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === length ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? length : prev - 1));
//   };

//   const closeModal = () => {
//     setModal((prev) => !prev);
//     document.body.style.overflow = 'scroll';
//   };

//   useEffect(() => {
//     setCurrent(imageIndex);
//     if (showModal) {
//       document.body.style.overflow = 'hidden';
//     }
//   }, [imageIndex]);

//   return (
//     <>
//       <ModalBackground>
//         <div onClick={closeModal}><i className="fas fa-times close" /></div>
//         <div className="right-arrow" onClick={nextSlide}>
//           <i className="fas fa-chevron-right" />
//         </div>
//         <div className="left-arrow" onClick={prevSlide}>
//           <i className="fas fa-chevron-left" />
//         </div>
//         {images.map((image, index) => (
//           <ModalWrapper key={index} className={current === index ? 'slide active' : 'slide'}>
//             <ModalImage key={index} src={image} />
//           </ModalWrapper>
//         ))}
//       </ModalBackground>
//     </>
//   );
// };

// export default ImageModal;
