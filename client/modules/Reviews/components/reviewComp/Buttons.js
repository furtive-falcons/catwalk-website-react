import React from 'react';
import { ButtonsContainer} from './styles.js';
import Button from '../../../../components/Button';
import MarginsWrapper from '../../../../hoc/with-margins';

const Buttons = ({ openModal, expand, reviewCount, dataIndex }) => (
  <ButtonsContainer id="buttons">
    {
    reviewCount > 2 && dataIndex < reviewCount ? (
      <Button id='add' size = {15} secondary handleOnClick={expand} name="MORE REVIEWS"/>
    )
      : null
    }
    <MarginsWrapper margin={'15px'}>
      <Button icon='plus' handleOnClick={openModal} size = {15} secondary name="ADD REVIEW" />
    </MarginsWrapper>
  </ButtonsContainer>
);

export default Buttons;
