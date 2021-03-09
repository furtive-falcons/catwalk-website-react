import React from 'react';
import { ScoreDiv } from './styles.js';
import StarRating from '../../../../components/StarRating';
import {colorPrimary} from '../../../../ui/ui-colors';

const Score = ({ score, total}) => (
  <ScoreDiv id="score">
    <div className="innerContainer">
      <h1>{score}</h1>
      <div className="stars">
        <StarRating background={colorPrimary} rating={score}/>
        <div className='total'><span>{total}</span> reviews</div>
      </div>
    </div>
  </ScoreDiv>
);

export default Score;
