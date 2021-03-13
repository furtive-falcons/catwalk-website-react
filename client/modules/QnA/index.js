/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { number } from 'prop-types';
import SearchBar from './components/SearchBar';
import EntryContainer from './components/EntryContainer';
import MoreQuestion from './components/MoreQuestion';
import AddQuestion from './components/AddQuestion';
import { Container } from './styles';
import { Provider } from './components/QuestionContext';

const axios = require('axios');

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
      .then((results) => {
        results.forEach((result) => {
          setQuestions((prev) => [...prev, ...result.data.results]);
        });
        return results;
      })
      .then((results) => {
        const firstPage = results[0].data.results;
        setDisplay(firstPage.slice(0, 2));
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
    return null;
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
    setQuestions([]);
    getAllQA();
    getProductName();
  }, [productId]);

  return (
    <Provider value={{ productId, productName, getAllQA, setQuestions }}>
      <Container>
        <h1 id="title">QUESTIONS & ANSWERS</h1>
        <SearchBar search={handleSearch} id="search-bar" />
        <EntryContainer
          id="entry-container"
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
        <AddQuestion id="add-question" />
      </Container>
    </Provider>
  );
};

export default QnA;

QnA.propTypes = {
  productId: number,
};

QnA.defaultProps = {
  productId: 14036,
};
