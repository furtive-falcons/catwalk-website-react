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
  // const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(data.results);

  const filterQuestions = (question) => {
    const qn = question.question_body.toLowerCase();
    return qn.includes(search);
  };

  const handleSearch = (input) => {
    setSearch(input.toLowerCase());
    if (search.length >= 3) {
      const qns = data.results; // change data to questions
      const filtered = qns.filter(filterQuestions);
      setFilter(filtered);
    }
  };

  return (
    <Container>
      <Title fontSize="1.6rem" title="QUESTIONS & ANSWERS" />
      <SearchBar search={handleSearch} />
      <EntryContainer
        questions={filter}
      />
      <MoreQuestion />
      <AddQuestion />
    </Container>
  );
};

export default QnA;
