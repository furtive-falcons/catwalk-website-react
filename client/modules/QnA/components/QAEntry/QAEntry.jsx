/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import LoadMoreAnswers from './LoadMoreAnswers.jsx';
import { Entry } from './styles.js';
import Title from '../Title.jsx';
import QuestionInfo from './QuestionInfo.jsx';
import AnswerContainer from './AnswerContainer.jsx';

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
    setDisplay(answers.slice(0, 2));
  }, []);

  const loadAnswers = (e) => {
    e.preventDefault();
    setDisplay((preDisplay) => ans.slice(0, preDisplay.length + 2));
  };

  const collapseAnswers = (e) => {
    e.preventDefault();
    setDisplay(answers.slice(0, 2));
  };

  return (
    <Entry className="container">
      <div className="q">
        <Title className="q" fontSize="1.7rem" title="Q:" />
      </div>
      <Question body={question.question_body} />
      <div className="a">
        <Title fontSize="1.7rem" title="A:" />
      </div>
      <AnswerContainer
        answers={searched ? display : display}
      />
      <QuestionInfo question={question} />
      {ans.length !== display.length ? (
        <LoadMoreAnswers
          handleOnClick={loadAnswers}
          children="Load More Answers"
          size={1.3}
          href={null}
        />
      ) : (
        <LoadMoreAnswers
          handleOnClick={collapseAnswers}
          children="Collapse Answers"
          size={1.3}
          href={null}
        />
      )}

    </Entry>
  );
};

export default QAEntry;
