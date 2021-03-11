/* eslint-disable no-nested-ternary */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import {
  shape, string, number, bool,
} from 'prop-types';
import Question from './Question.jsx';
import LoadAndCollapse from './LoadAndCollapse.jsx';
import { Entry } from './styles.js';
import QuestionInfo from './QuestionInfo.jsx';
import AnswerContainer from './AnswerContainer.jsx';
import Title from '../../../../components/Title';

const axios = require('axios');

const QAEntry = ({ question, id, searched }) => {
  const [ans, setAnswers] = useState([]);
  const [display, setDisplay] = useState([]);
  const [filter, setFilter] = useState([]);
  const [success, setSuccess] = useState(false);

  const sortAnswers = (data) => {
    const method = 'helpfulness';
    data.sort((a, b) => b[method] - a[method]);
    setDisplay(data.slice(0, 2));
    if (searched) {
      const match = data.filter((an) => an.body.includes(searched));
      if (match.length > 0) {
        setFilter(match);
      } else {
        setDisplay(ans.slice(0, 2));
      }
    }
  };

  const removeDuplicate = (answers) => {
    const result = {};
    answers.forEach((answer) => {
      const answerId = answer.answer_id;
      if (!result[answerId]) {
        result[answerId] = answer;
      }
    });
    return Object.values(result);
  };
  const getAnswers = (page) => {
    const data = new Promise((resolve, reject) => {
      axios.get(`qa/questions/${id}/answers`, {
        params: {
          question_id: id,
          page,
        },
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
    return data;
  };

  const getAllAnswers = () => {
    const data = [];
    let page = 1;
    while (page < 3) {
      const promise = getAnswers(page);
      data.push(promise);
      page += 1;
    }
    Promise.all(data)
      .then((results) => results.forEach((result) => {
        setAnswers((prev) => [...prev, ...result.data.results]);
      }));
  };

  useEffect(() => {
    if (!success) {
      getAllAnswers();
      setSuccess(true);
    } else {
      sortAnswers(removeDuplicate(ans));
      setDisplay(ans.slice(0, 2));
    }
  }, [ans]);

  const loadAnswers = () => {
    setDisplay((preDisplay) => ans.slice(0, preDisplay.length + 2));
  };

  const collapseAnswers = () => {
    setDisplay((preDisplay) => preDisplay.slice(0, 2));
  };

  return (
    <Entry className="container">
      <div className="q">
        <Title size={1.7}>Q:</Title>
      </div>
      <Question body={question.question_body} />
      <div className="a">
        <Title size={1.7}>A:</Title>
      </div>
      <AnswerContainer
        display={filter.length > 0 ? filter : display}
      />
      <QuestionInfo question={question} />
      { ans.length < 3 || filter.length > 0 ? null
        : ans.length === display.length ? (
          <LoadAndCollapse
            handleOnClick={collapseAnswers}
            size={1.3}
            href={null}
          >
            Collapse Answers
          </LoadAndCollapse>
        ) : (
          <LoadAndCollapse
            handleOnClick={loadAnswers}
            size={1.3}
            href={null}
          >
            See More Answers
          </LoadAndCollapse>
        )}
    </Entry>
  );
};

export default QAEntry;

QAEntry.propTypes = {
  question: shape({
    question_id: number,
    question_body: string,
    asker_name: string,
    question_helpfulness: number,
    reported: bool,
  }).isRequired,
  searched: string,
  id: number.isRequired,
};

QAEntry.defaultProps = {
  searched: '',
};
