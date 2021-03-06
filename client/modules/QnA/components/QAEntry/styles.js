/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index.js';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 8rem 1rem 8rem;
    grid-template-rows: minmax(min-content, 10rem) auto repeat(2 minmax(min-content, 10rem))
    grid-auto-rows: minmax(min-content, 5rem);
    align-items: center;

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .question p {
    font-weight: 700;
    font-size: 1.7rem;
    color: ${colorGreyLight2};
  }

  .answers p {
    font-size: 1.3rem;
  }

  .answers {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    max-height: 50vh;
    overflow: scroll;
  }

  .helpful-1 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .add-answer {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
  }

  .load-more-answer {
    grid-column: 2 / 3;
    grid-row: 4/ 5;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .q {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .a {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
  }

  .info {
    display:flex;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .name-date, .report, .helpful-2 {
    margin-right: 1.1rem;
  }

  .info .report {
    cursor: pointer;
  }
`;

const StyledSeperator = styled.div`
  width: 1px;
  min-height: 1rem;
  background: ${colorGreyLight2};
  margin-right: 1rem;
`;

// const Thumbnail = styled.img`
//   width: 10rem;
//   height: 10rem;
//   object-fit: cover;
//   margin-right: 1rem;
//   margin-top: 1rem;
//   :hover {
//     opacity: 0.6;
//   }
// `;

// const ModalBackground = styled.div`
//   display: flex;
//   background-color: rgba(0, 0, 0, 0.9);
//   z-index: 10;
//   position: fixed;
//   height: 100%;
//   width: 100%;
//   left: 0;
//   right: 0;
//   top: 0;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .slide {
//     opacity: 0;
//     transition-duration: 1s;
//   }

//   .slide.active {
//     opacity: 1;
//     transition-duration: 1s linear;
//     transform: scale(1.05);
//   }

//   .right-arrow, .left-arrow {
//     position: absolute;
//     top: 50%;
//     font-size: 3rem;
//     color: #fff;
//     z-index: 10;
//     cursor: pointer;
//     :hover {
//       transform: scale(1.3);
//     }
//   }

//   .left-arrow {
//     left: 15%;
//   }

//   .right-arrow {
//     right: 15%
//   }

//   .close {
//     position: absolute;
//     top: 10%;
//     right: 10%;
//     color: #fff;
//     cursor: pointer;
//     width: 3rem;
//     height: 3rem;
//     :hover {
//       background-color: #fff;
//       color: ${colorGreyLight2};
//       border-radius: 50%;
//       transform: scale(1.05);
//     }
//   }
// `;

// const ModalWrapper = styled.div`
//   width: 800px;
//   height: 500px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
// `;

// const ModalImage = styled.img`
//   max-width: 800px;
//   max-height: 500px;
//   object-fit: fit;
// `;

export {
  Entry, StyledSeperator,
};
