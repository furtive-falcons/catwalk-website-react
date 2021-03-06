/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import QAEntry from './QAEntry/QAEntry.jsx';

const EntryContainer = ({ questions, searched }) => {
  const [qns, setQuestions] = useState([]);
  const sortQuestions = (data) => {
    const method = 'question_helpfulness';
    data.sort((a, b) => b[method] - a[method]);
  };

  const removeQuestionWihoutAnswer = (questions) => {
    const validResult = questions.filter((question) => {
      const keys = Object.keys(question.answers);
      return keys.length > 0;
    });
    setQuestions(validResult);
  };

  useEffect(() => {
    sortQuestions(questions);
    removeQuestionWihoutAnswer(questions);
    // setQuestions(questions);
  }, [questions]);

  return (
    <div className="entry-container">
      {qns.map((qn) => <QAEntry key={qn.question_id} question={qn} searched={searched} />)}
    </div>
  );
};

export default EntryContainer;
