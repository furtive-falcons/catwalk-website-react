import React from 'react';
import { ButtonsContainer} from './styles.js';
import Button from '../../../../components/Button';

const Buttons = ({ expand, reviewCount, dataIndex }) => (
  <ButtonsContainer id="buttons">
    {
    reviewCount > 2 && dataIndex < reviewCount ? (
      <Button handleOnClick={expand} name="More Reviews"/>
    )
      : null
    }
    <Button name="Add Review"/>
  </ButtonsContainer>
);

export default Buttons;
