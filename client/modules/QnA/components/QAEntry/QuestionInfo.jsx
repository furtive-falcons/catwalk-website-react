/* eslint-disable import/extensions */
import React from 'react';
import Helpful from '../../../../components/Helpful';
import AddAnswer from './AddAnswer.jsx';
import { StyledSeperator } from './styles.js';

const QuestionInfo = ({ question, handleOnClick }) => (
  <>
    <div className="helpful-1">
      <Helpful
        helpfulness={question.question_helpfulness}
        size={1}
        onClick={() => alert('hello world')}
        // href="#"
      />
    </div>
    <StyledSeperator />
    <AddAnswer />
  </>
);

export default QuestionInfo;
