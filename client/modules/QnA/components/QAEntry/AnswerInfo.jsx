/* eslint-disable import/extensions */
import React, { useState } from 'react';
import NameDate from '../../../../components/NameDate';
import Helpful from '../../../../components/Helpful';
import Report from './Report.jsx';
import { StyledSeperator } from './styles.js';

const axios = require('axios');

const AnswerInfo = ({ answer }) => {
  const count = answer.helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);
  const [report, setReport] = useState(false);

  const putRequest = () => {
    const url = `qa/answers/${answer.id}/helpful`;
    const data = { answer_helpfulness: yesCount };
    axios.put(url, data)
      .catch((err) => console.log(err));
  };

  const reported = () => {
    setReport(true);
    const url = `qa/answers/${answer.id}/report`;
    const data = { reported: true };
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
    <div className="info">
      <NameDate
        name={answer.answerer_name}
        date={answer.date}
        string="By"
      />
      <StyledSeperator />
      <div className="helpful-2">
        <Helpful
          helpfulness={yesCount}
          size={1.1}
          handleOnClick={handleOnClick}
        />
      </div>
      <StyledSeperator />
      <Report
        children={report ? 'Reported' : 'Report'}
        handleOnClick={reported}
        size={1.1}
      />
    </div>
  );
};

export default AnswerInfo;
