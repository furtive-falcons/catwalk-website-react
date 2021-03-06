/* eslint-disable import/extensions */
import React, { useState } from 'react';
import NameDate from '../../../../components/NameDate';
import Helpful from '../../../../components/Helpful';
import Report from './Report.jsx';
import { StyledSeperator } from './styles.js';

const AnswerInfo = ({ answer }) => {
  const count = answer.helpfulness;
  const [yesCount, setYesCount] = useState(count);
  const [yes, setYes] = useState(false);
  const handleOnClick = (e) => {
    e.preventDefault();
    if (!yes) {
      setYesCount((preYesCount) => preYesCount + 1);
      setYes(true);
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
      children="Report"
      size={1.1}
      />
    </div>
  );
};

export default AnswerInfo;
