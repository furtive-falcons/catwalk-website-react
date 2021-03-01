import React from 'react'
import {ButtonsContainer} from './styles.js';

const Buttons = ({expand}) => {
  return (
    <ButtonsContainer id = 'buttons'>
      <button onClick = {expand}>More Reviews</button>
      <button>Add Review</button>
    </ButtonsContainer>
  )
}

export default Buttons ;