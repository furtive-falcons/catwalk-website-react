import React from 'react';
import { ButtonsContainer } from './styles.js';

const Buttons = ({ expand, reviewCount, dataIndex }) => (
  <ButtonsContainer id="buttons">
    {
    reviewCount > 2 && dataIndex < reviewCount ? (
      <button id="moreReviews" type="button" onClick={expand}>
        More Reviews
      </button>
    )
      : null
    }
    <button type="button">Add Review</button>
  </ButtonsContainer>
);

export default Buttons;
