/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import {
  shape, string, number, bool,
} from 'prop-types';
import Question from './Question';
import LoadAndCollapse from './LoadAndCollapse';
import { Entry } from './styles';
import QuestionInfo from './QuestionInfo';
import AnswerContainer from './AnswerContainer';

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
      const match = data.filter((an) => an.body.toLowerCase().includes(searched));
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
      .then((results) => {
        results.forEach((result) => {
          setAnswers((prev) => [...prev, ...result.data.results]);
        });
        return results;
      })
      .then((results) => {
        const firstPage = results[0].data.results;
        setDisplay(firstPage.slice(0, 2));
      });
  };

  useEffect(() => {
    if (!success) {
      getAllAnswers();
      setSuccess(true);
    } else {
      setFilter([]);
      sortAnswers(removeDuplicate(ans));
      setDisplay(ans.slice(0, 2));
    }
  }, [ans, searched]);

  const loadAnswers = () => {
    setDisplay((preDisplay) => ans.slice(0, preDisplay.length + 2));
  };

  const collapseAnswers = () => {
    setDisplay((preDisplay) => preDisplay.slice(0, 2));
  };

  return (
    <Entry className="container">
      <h2 className="q">Q:</h2>
      <Question id="question" body={question.question_body} />
      <h2 className="a">A:</h2>
      <AnswerContainer
        id="answer-container"
        display={filter.length > 0 ? filter : display}
      />
      <QuestionInfo id="question-info" question={question} />
      {ans.length < 3 || filter.length > 0 ? null
        : ans.length === display.length ? (
          <LoadAndCollapse
            handleOnClick={collapseAnswers}
            size={1.5}
            href={null}
          >
            Collapse Answers
          </LoadAndCollapse>
        ) : (
          <LoadAndCollapse
            handleOnClick={loadAnswers}
            size={1.5}
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
