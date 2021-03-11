/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import SearchBar from './components/SearchBar.jsx';
import EntryContainer from './components/EntryContainer.jsx';
import MoreQuestion from './components/MoreQuestion.jsx';
import AddQuestion from './components/AddQuestion.jsx';
import { Container } from './styles.js';
import Title from '../../components/Title';

const axios = require('axios');

const ProductContext = React.createContext();

const QnA = ({ productId }) => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);
  const [display, setDisplay] = useState([]);
  const [productName, setProductName] = useState('');

  const getProductName = () => {
    axios.get(`/api/products/${productId}`)
      .then((result) => setProductName(result.data.data.productInformation.name));
  };

  const getQA = (page) => {
    const data = new Promise((resolve, reject) => {
      axios.get('/qa/questions', {
        params: {
          product_id: productId,
          page,
        },
      })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
    return data;
  };

  const getAllQA = () => {
    const data = [];
    let page = 1;
    while (page < 3) {
      const promise = getQA(page);
      data.push(promise);
      page += 1;
    }
    Promise.all(data)
      .then((results) => results.forEach((result) => {
        setQuestions((prev) => [...prev, ...result.data.results]);
      }));
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
    setFilter([]);
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
      getAllQA();
      getProductName();
    } else {
      setDisplay(questions.slice(0, 2));
    }
  }, [questions]);

  return (
    <ProductContext.Provider value={{ productId, productName }}>
      <Container>
        <Title size={1.7} data-test="component-title">QUESTIONS & ANSWERS</Title>
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
          ) : questions.length === 2 ? null : (
            <MoreQuestion
              name="COLLAPSE QUESTIONS"
              handleOnClick={collapseQuestions}
            />
          )}
        <AddQuestion />
      </Container>
    </ProductContext.Provider>
  );
};

export { QnA, ProductContext };

QnA.propTypes = {
  productId: string,
};

QnA.defaultProps = {
  productId: '14036',
};
