import React, { useState } from 'react';
import { number, string, shape } from 'prop-types';
import NameDate from '../../../../components/NameDate';
import Helpful from '../../../../components/Helpful';
import Report from './Report';
import { StyledSeperator } from './styles';

const axios = require('axios');

const AnswerInfo = ({ answer }) => {
  const count = answer.helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);
  const [report, setReport] = useState(false);

  const putRequest = () => {
    const url = `qa/answers/${answer.answer_id}/helpful`;
    const data = { answer_helpfulness: yesCount };
    axios.put(url, data)
      .catch((err) => { throw err; });
  };

  const reported = () => {
    setReport(true);
    const url = `qa/answers/${answer.answer_id}/report`;
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
    <div className="answer-info">
      <NameDate
        name={answer.answerer_name}
        date={answer.date}
        string="By"
      />
      <StyledSeperator className="seperator" />
      <div className="helpful-2">
        <Helpful
          size={1.2}
          helpfulness={yesCount}
          handleOnClick={handleOnClick}
        />
      </div>
      <StyledSeperator className="seperator" />
      <Report
        className="report"
        handleOnClick={reported}
      >
        {report ? 'Reported' : 'Report'}
      </Report>
    </div>
  );
};

export default AnswerInfo;

AnswerInfo.propTypes = {
  answer: shape({
    answer_id: number,
    body: string,
    date: string,
    answerer_name: string,
    helpfulness: number,
  }).isRequired,
};
