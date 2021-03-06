/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Title from './components/Title.jsx';
import EntryContainer from './components/EntryContainer.jsx';
import MoreQuestion from './components/MoreQuestion.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import { Container } from './styles.js';

const axios = require('axios');

const QnA = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [display, setDisplay] = useState([]);

  const removeQuestionWihoutAnswer = (data) => {
    const validResult = data.filter((question) => {
      const keys = Object.keys(question.answers);
      return keys.length > 0;
    });
    setQuestions(validResult);
  };

  const getQA = () => {
    axios.get('/qa/questions', {
      params: {
        product_id: productId,
      },
    })
      .then((res) => {
        removeQuestionWihoutAnswer(res.data.results);
      })
      .catch((res) => {
        res.sendStatus(404);
      });
  };

  const removeDuplicate = (data) => {
    const result = {};
    data.forEach((question) => {
      const questionId = question.question_id;
      if (!result[questionId]) {
        result[questionId] = question;
      }
    });
    return Object.values(result);
  };

  const loadMoreQuestions = () => {
    setDisplay((preDisplay) => questions.slice(0, preDisplay.length + 2));
  };

  const collapseQuestions = () => {
    setDisplay(questions.slice(0, 2));
  };

  const filterAnswers = (question) => {
    const ans = Object.values(question.answers);
    const match = ans.filter((an) => {
      const answerBody = an.body.toLowerCase();
      return answerBody.includes(search);
    });
    if (match.length > 0) {
      return question;
    }
  };

  const filterQuestions = (question) => {
    const questionBody = question.question_body.toLowerCase();
    return questionBody.includes(search);
  };

  const handleSearch = (input) => {
    if (input.length > 2) {
      setSearch(input.toLowerCase());
      const filterA = questions.filter(filterAnswers);
      const filterQ = questions.filter(filterQuestions);
      const allMatch = [...filterQ, ...filterA];
      setFilter(removeDuplicate(allMatch));
    } else {
      setSearch('');
      setFilter([]);
    }
  };
  useEffect(() => {
    if (questions.length === 0) {
      getQA();
    } else {
      setDisplay(questions.slice(0, 2));
    }
  }, [questions, search]);

  return (
    <Container>
      <Title fontSize="1.6rem" title="QUESTIONS & ANSWERS" />
      <SearchBar search={handleSearch} />
      <EntryContainer
        questions={filter.length > 0 ? filter : display}
        searched={search}
      />
      {questions.length !== display.length
        ? (
          <MoreQuestion
            name="MORE ANSWERED QUESTIONS"
            handleOnClick={loadMoreQuestions}
          />
        ) : (
          <MoreQuestion
            name="COLLAPSE QUESTIONS"
            handleOnClick={collapseQuestions}
          />
        )}
      <AddQuestion />
    </Container>
  );
};

export default QnA;
