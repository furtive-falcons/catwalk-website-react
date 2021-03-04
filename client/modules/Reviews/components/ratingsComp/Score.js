import React from 'react';
import { ScoreDiv } from './styles.js';
import StarRating from '../../../../components/StarRating';

const Score = ({ score}) => (
  <ScoreDiv id="score">
    <div className="innerContainer">
      <h1>{score}</h1>
      <div className="stars">
        <StarRating rating={score}/>
      </div>
    </div>
  </ScoreDiv>
);

export default Score;
