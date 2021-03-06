/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Title from './components/Title.jsx';
import EntryContainer from './components/EntryContainer.jsx';
import MoreQuestion from './components/MoreQuestion.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import { Container } from './styles.js';
import data from './data.js';

const QnA = () => {
  const [questions, setQuestions] = useState(data.results);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [display, setDisplay] = useState([]);

  const filterQuestions = (question) => {
    const questionBody = question.question_body.toLowerCase();
    return questionBody.includes(search);
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

  const removeDuplicate = (questions) => {
    const result = {};
    questions.forEach((question) => {
      const questionId = question.question_id;
      if (!result[questionId]) {
        result[questionId] = question;
      }
    });
    return Object.values(result);
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

  const loadMoreQuestions = (e) => {
    e.preventDefault();
    setDisplay((preDisplay) => questions.slice(0, preDisplay.length + 2));
  };

  const collapseQuestions = (e) => {
    e.preventDefault();
    setDisplay(questions.slice(0, 2));
  };

  useEffect(() => {
    setDisplay(questions.slice(0, 2));
  }, []);

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
