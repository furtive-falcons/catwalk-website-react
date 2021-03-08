/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';
import LoadAndCollapse from './LoadAndCollapse.jsx';
import { Entry } from './styles.js';
import QuestionInfo from './QuestionInfo.jsx';
import AnswerContainer from './AnswerContainer.jsx';
import Title from '../../../../components/Title';

const QAEntry = ({ question, searched }) => {
  const answers = Object.values(question.answers);
  const [ans, setAnswers] = useState([]);
  const [display, setDisplay] = useState([]);
  const sortAnswers = (data) => {
    const method = 'helpfulness';
    data.sort((a, b) => b[method] - a[method]);
    setDisplay(data.slice(0, 2));
    if (searched) {
      const match = data.filter((an) => an.body.includes(searched));
      if (match.length > 0) {
        setDisplay(match);
      } else {
        setDisplay(ans.slice(0, 2));
      }
    }
  };

  useEffect(() => {
    sortAnswers(answers);
    setAnswers(answers);
  }, [searched]);

  const loadAnswers = () => {
    setDisplay((preDisplay) => ans.slice(0, preDisplay.length + 2));
  };

  const collapseAnswers = () => {
    setDisplay((preDisplay) => preDisplay.slice(0, 2));
  };

  return (
    <Entry className="container">
      <div className="q">
        <Title size={1.7} children="Q:" />
      </div>
      <Question body={question.question_body} />
      <div className="a">
        <Title size={1.7} children="A:" />
      </div>
      <AnswerContainer
        display={display}
        answers={ans}
        searched={searched}
      />
      <QuestionInfo question={question} />
      { ans.length < 3 ? null
        : ans.length === display.length ? (
          <LoadAndCollapse
            handleOnClick={collapseAnswers}
            children="Collapse Answers"
            size={1.3}
            href={null}
          />
        ) : (
          <LoadAndCollapse
            handleOnClick={loadAnswers}
            children="See More Answers"
            size={1.3}
            href={null}
          />
        )}
    </Entry>
  );
};

export default QAEntry;
