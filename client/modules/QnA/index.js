/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
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
  const [page, setPage] = useState(1);

  // const removeQuestionWihoutAnswer = (data) => {
  //   const validResult = data.filter((question) => {
  //     const keys = Object.keys(question.answers);
  //     return keys.length > 0;
  //   });
  //   setQuestions(validResult);
  // };

  const getQA = () => {
    axios.get('/qa/questions', {
      params: {
        product_id: productId,
        page,
      },
    })
      .then((res) => {
        // removeQuestionWihoutAnswer(res.data.results);
        setQuestions(res.data.results);
        // if (page === 1) {
        //   setDisplay(res.data.results.slice(0, 2));
        // }
      })
      .catch((err) => {
        throw err;
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
    // setPage((prev) => prev + 1);
    // getQA();
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
    <ProductContext.Provider value={productId}>
      <Container>
        <Title size={1.7} children="QUESTIONS & ANSWERS" />
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
    </ProductContext.Provider>
  );
};

export { QnA, ProductContext };
