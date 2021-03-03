import React from 'react';
import { ButtonsContainer} from './styles.js';
import Button from '../../../../components/Button';
import MarginsWrapper from '../../../../hoc/with-margins';


const Buttons = ({ expand, reviewCount, dataIndex }) => (
  <ButtonsContainer id="buttons">
    {
    reviewCount > 2 && dataIndex < reviewCount ? (
      <Button size = {15} primary = {true} handleOnClick={expand} name="MORE REVIEWS"/>
    )
      : null
    }
    <MarginsWrapper margin={'15px'}>
      <Button size = {15} primary = {true} name="ADD REVIEW"/>
    </MarginsWrapper>
  </ButtonsContainer>
);

export default Buttons;
