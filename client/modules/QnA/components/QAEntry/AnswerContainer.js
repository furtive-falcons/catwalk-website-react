import React from 'react';
import {
  arrayOf, string, number, shape,
} from 'prop-types';
import Answer from './Answer';
import AnswerInfo from './AnswerInfo';

const AnswerContainer = ({ display }) => (
  <div className="answers">
    {display.map((an) => (
      <div key={an.answer_id}>
        <Answer
          body={an.body}
          photos={an.photos}
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

AnswerContainer.propTypes = {
  display: arrayOf(shape({
    answer_id: number,
    body: string,
    answerer_name: string,
    helpfulness: number,
  })).isRequired,
};
