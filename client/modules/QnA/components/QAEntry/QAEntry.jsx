/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import AnswerInfo from './AnswerInfo.jsx';
import Answer from './Answer.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import { Entry } from './styles.js';
import Title from '../Title.jsx';
import QuestionInfo from './QuestionInfo.jsx';

const QAEntry = ({ question }) => {
  const answers = Object.values(question.answers);
  const [ans, setAnswers] = useState(answers);
  const sortAnswers = (data) => {
    const method = 'helpfulness';
    data.sort((a, b) => b[method] - a[method]);
  };

  useEffect(() => {
    // console.log(answers);
    sortAnswers(answers);
    setAnswers(answers);
  }, []);

  return (
    <Entry className="container">
      <div className="q">
        <Title className="q" fontSize="1rem" title="Q:" />
      </div>
      <Question body={question.question_body} />
      <div className="a">
        <Title fontSize="1rem" title="A:" />
      </div>
      {ans.map((an, index) => (
        <Answer
          key={index}
          answer={an}
        />
      ))}
      <QuestionInfo question={question} />
      {/* <AnswerInfo question={question} /> */}
      <LoadMoreAnswers />
    </Entry>
  );
};

export default QAEntry;
