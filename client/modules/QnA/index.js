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
    const match = ans.filter((an) => an.body.includes(search));
    if (match) {
      return question;
    }
  };

  const handleSearch = (input) => {
    setSearch(input.toLowerCase());
    if (search.length >= 3) {
      const filterA = questions.filter(filterAnswers);
      const filterQ = questions.filter(filterQuestions);
      const match = new Set([...filterQ, ...filterA]);
      setFilter([...filterQ, ...filterA]);
    } else {
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
