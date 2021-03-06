/* eslint-disable import/extensions */
import React from 'react';
import Answer from './Answer.jsx';
import AnswerInfo from './AnswerInfo.jsx';

const AnswerContainer = ({ display }) => (
  <div className="answers">
    {display.map((an, index) => (
      <div key={an.id}>
        <Answer
          key={index}
          answer={an}
        />
        <AnswerInfo
          answer={an}
        />
        <br />
      </div>
    ))}
  </div>
);
export default AnswerContainer;
