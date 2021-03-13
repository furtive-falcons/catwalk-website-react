import styled from 'styled-components';
import { colorGreyLight2, colorWhite } from '../../ui/ui-colors';

const Thumbnail = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const ModalBackground = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slide {
    opacity: 0;
    transition-duration: 1s;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s linear;
    transform: scale(1.05);
  }

  .right-arrow, .left-arrow {
    position: absolute;
    display:flex;
    top: 45%;
    font-size: 5rem;
    color: #fff;
    z-index: 3;
    cursor: pointer;
    width: 10rem;
    height: 10rem;
    justify-content: center;
    align-items: center;
    :hover {
      transform: scale(1.3);
    }
  }

  .left-arrow {
    left: 15%;
  }

  .right-arrow {
    right: 15%
  }

  .close {
    position: absolute;
    top: 10%;
    right: 10%;
    color: ${colorWhite};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    :hover {
      background-color: #fff;
      color: ${colorGreyLight2};
      border-radius: 50%;
    }
  }
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

const ModalImage = styled.img`
  max-width: 800px;
  max-height: 500px;
  object-fit: fit;
`;

export {
  Thumbnail, ModalBackground, ModalWrapper, ModalImage,
};
