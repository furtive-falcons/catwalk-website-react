/* eslint-disable import/extensions */
import React from 'react';
import {
  arrayOf, string, number, shape,
} from 'prop-types';
import Answer from './Answer.jsx';
import AnswerInfo from './AnswerInfo.jsx';

const AnswerContainer = ({ display }) => (
  <div className="answers">
    {display.map((an, index) => (
      <div key={index}>
        <Answer
          key={an.answer_id}
          body={an.body}
          photos={an.photos}
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
  display: arrayOf(shape({
    answer_id: number,
    body: string,
    answerer_name: string,
    helpfulness: number,
  })).isRequired,
};
