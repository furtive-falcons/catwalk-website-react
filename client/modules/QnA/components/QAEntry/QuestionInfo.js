import React, { useState } from 'react';
import { shape, bool, number } from 'prop-types';
import Helpful from '../../../../components/Helpful';
import Report from './Report';
import AddAnswer from './AddAnswer';
import { StyledSeperator } from './styles';

const axios = require('axios');

const QuestionInfo = ({ question }) => {
  const count = question.question_helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);
  const [report, setReport] = useState(false);

  const putRequest = () => {
    const url = `/qa/questions/${question.question_id}/helpful`;
    const data = { question_helpfulness: yesCount + 1 };
    axios.put(url, data)
      .catch((err) => { throw err; });
  };

  const reported = () => {
    setReport(true);
    const url = `qa/questions/${question.question_id}/report`;
    const data = { reported: true };
    axios.put(url, data)
      .catch((err) => { throw err; });
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
    <div className="question-info">
      <Helpful
        helpfulness={yesCount}
        size={1.2}
        handleOnClick={handleOnClick}
      />
      <StyledSeperator />
      <Report
        className="report"
        handleOnClick={reported}
      >
        {report ? 'Reported' : 'Report'}
      </Report>
      <StyledSeperator />
      <AddAnswer question={question} />
    </div>
  );
};

export default QuestionInfo;

QuestionInfo.propTypes = {
  question: shape({
    question_id: number,
    question_helpfulness: number,
    reported: bool,
  }).isRequired,
};
