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
      if (!result.questionId) {
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

  return (
    <Container>
      <Title fontSize="1.6rem" title="QUESTIONS & ANSWERS" />
      <SearchBar search={handleSearch} />
      <EntryContainer
        questions={filter.length > 0 ? filter : questions}
      />
      <MoreQuestion />
      <AddQuestion />
    </Container>
  );
};

export default QnA;
