/* eslint-disable import/extensions */
import React from 'react';
import NameDate from '../../../../components/NameDate';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import { StyledSeperator } from './styles.js';

const AnswerInfo = ({ question }) => (
  <div className="info">
    <NameDate
      name={question.answers[68].answerer_name}
      date={question.answers[68].date}
      string="By"
    />
    <StyledSeperator />
    <div className="helpful-2">
      <Helpful helpfulness={question.answers[68].helpfulness} />
    </div>
    <StyledSeperator />
    <Report />
  </div>
);

export default AnswerInfo;
