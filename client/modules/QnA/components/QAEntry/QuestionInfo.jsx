/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Helpful from '../../../../components/Helpful';
import AddAnswer from './AddAnswer.jsx';
import { StyledSeperator } from './styles.js';

const axios = require('axios');

const QuestionInfo = ({ question }) => {
  const count = question.question_helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);

  const putRequest = () => {
    const url = `qa/questions/${question.question_id}/helpful`;
    const data = { question_helpfulness: yesCount };
    axios.put(url, data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    if (!yes) {
      setYesCount((preYesCount) => preYesCount + 1);
      setYes(true);
      putRequest();
    }
  };
  return (
    <>
      <div className="helpful-1">
        <Helpful
          helpfulness={yesCount}
          size={1}
          handleOnClick={handleOnClick}
        />
      </div>
      <StyledSeperator />
      <AddAnswer question={question} />
    </>
  );
};

export default QuestionInfo;
