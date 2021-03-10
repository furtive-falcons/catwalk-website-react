/* eslint-disable import/extensions */
import React from 'react';
import {array} from 'prop-types';
import Answer from './Answer.jsx';
import AnswerInfo from './AnswerInfo.jsx';

const AnswerContainer = ({ display }) => (
  <div className="answers">
    {display.map((an, index) => (
      <div key={index}>
        <Answer
          key={an.answer_id}
          answer={an}
        />
        <AnswerInfo
          key={index}
          answer={an}
        />
        <br />
      </div>
    ))}
  </div>
);
export default AnswerContainer;

AnswerContainer.propTypes = {
  display: array.isRequired,
};
