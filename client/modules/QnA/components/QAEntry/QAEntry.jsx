/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import AnswerInfo from './AnswerInfo.jsx';
import Answer from './Answer.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import { Entry } from './styles.js';
import Title from '../Title.jsx';
import QuestionInfo from './QuestionInfo.jsx';

const QAEntry = ({ question, searched }) => {
  const answers = Object.values(question.answers);
  const [ans, setAnswers] = useState([]);
  const [display, setDisplay] = useState([]);
  const sortAnswers = (data) => {
    const method = 'helpfulness';
    data.sort((a, b) => b[method] - a[method]);
  };
  const showSearched = (answers) => {
    const match = answers.filter((an) => an.body.includes(searched));
    return match;
  };

  useEffect(() => {
    sortAnswers(answers);
    setAnswers(answers);
    setDisplay(answers.slice(0, 6));
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    setDisplay((preDisplay) => ans.slice(0, preDisplay.length + 2));
  };

  return (
    <Entry className="container">
      <div className="q">
        <Title className="q" fontSize="1rem" title="Q:" />
      </div>
      <Question body={question.question_body} />
      <div className="a">
        <Title fontSize="1rem" title="A:" />
      </div>
      <div className="answers">
        {display.map((an, index) => (
          <div key={an.id}>
            <Answer
              key={index}
              answer={an}
            />
            <AnswerInfo
              answer={an}
            />
            <br />
          </div>
        ))}
      </div>
      <QuestionInfo question={question} />
      {ans.length !== display.length ? <LoadMoreAnswers handleOnClick={handleOnClick} children="Load More Answers" size={1.2} /> : null}

    </Entry>
  );
};

export default QAEntry;
