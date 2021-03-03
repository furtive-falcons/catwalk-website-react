/* eslint-disable import/extensions */
import React from 'react';
import Helpful from './Helpful.jsx';
import AddAnswer from './AddAnswer.jsx';
import { StyledSeperator } from './styles.js';

const QuestionInfo = ({ question }) => (
  <>
    <div className="helpful-1">
      <Helpful
        helpfulness={question.question_helpfulness}
      />
    </div>
    <StyledSeperator />
    <AddAnswer />
  </>
);

export default QuestionInfo;
