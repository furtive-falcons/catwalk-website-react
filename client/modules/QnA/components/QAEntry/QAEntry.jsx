/* eslint-disable import/extensions */
import React from 'react';
import Question from './Question.jsx';
import NameDate from '../../../../components/NameDate';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';
import Answer from './Answer.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import AddAnswer from './AddAnswer.jsx';
import Entry from './styles.js';
import Title from '../Title.jsx';

const QAEntry = ({question}) => (
  <Entry className="container">
    <div className="q">
      <Title className="q" fontSize="1rem" title="Q:" />
    </div>
    <Question body={question.question_body} />
    <div className="a">
      <Title fontSize="1rem" title="A:" />
    </div>
    <Answer answer={question.answers[68]} />
    <div className="helpful-1">
      <Helpful helpfulness={question.question_helpfulness} />
    </div>
    <AddAnswer />
    <div className="info">
      <NameDate
      name={question.answers[68].answerer_name}
      date={question.answers[68].date}
      string='By' />
      <div className="helpful-2">
        <Helpful helpfulness={question.answers[68].helpfulness} />
      </div>
      <Report />
    </div>
    <LoadMoreAnswers />
  </Entry>
);

export default QAEntry;
