import React from 'react';
import { ScoreDiv } from './styles.js';
import Stars from '../../../../components/StarRating';

const Score = () => (
  <ScoreDiv id="score">
    <div className='innerContainer'>
      <h1>3.5</h1>
      <div className='stars'>
        <Stars/>
      </div>
    </div>
  </ScoreDiv>
);

export default Score;
