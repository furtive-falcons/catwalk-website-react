/* eslint-disable import/extensions */
import React from 'react';
import Question from './Question.jsx';
import AnswerInfo from './AnswerInfo.jsx';
import Answer from './Answer.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import { Entry } from './styles.js';
import Title from '../Title.jsx';
import QuestionInfo from './QuestionInfo.jsx';

const QAEntry = ({ question }) => (
  <Entry className="container">
    <div className="q">
      <Title className="q" fontSize="1rem" title="Q:" />
    </div>
    <Question body={question.question_body} />
    <div className="a">
      <Title fontSize="1rem" title="A:" />
    </div>
    <Answer
      answer={question.answers[68]}
    />
    <QuestionInfo question={question} />
    <AnswerInfo question={question} />
    <LoadMoreAnswers />
  </Entry>
);

export default QAEntry;
