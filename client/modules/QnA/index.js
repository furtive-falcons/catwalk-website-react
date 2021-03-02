/* eslint-disable import/extensions */
import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import Title from './components/Title.jsx';
import EntryContainer from './components/EntryContainer.jsx';
import MoreQuestion from './components/MoreQuestion.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import { Container } from './styles.js';
import data from './data.js';

const QnA = () => (
  <Container>
    <Title fontSize="1.6rem" title="QUESTIONS & ANSWERS" />
    <SearchBar />
    <EntryContainer questions={data.results} />
    <MoreQuestion />
    <AddQuestion />
  </Container>
);

export default QnA;
