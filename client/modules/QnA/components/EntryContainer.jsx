/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { string, array } from 'prop-types';
import QAEntry from './QAEntry/QAEntry.jsx';

const EntryContainer = ({ questions, searched }) => {
  const [qns, setQuestions] = useState([]);
  const sortQuestions = (data) => {
    const method = 'question_helpfulness';
    data.sort((a, b) => b[method] - a[method]);
  };

  useEffect(() => {
    sortQuestions(questions);
    setQuestions(questions);
  }, [questions]);

  return (
    <div className="entry-container">
      {qns.map((qn) => (
        <QAEntry
          key={qn.question_id}
          question={qn}
          id={qn.question_id}
          searched={searched}
        />
      ))}
    </div>
  );
};

export default EntryContainer;

EntryContainer.propTypes = {
  questions: array,
  searched: string,
};

EntryContainer.defaultProps = {
  questions: [],
  searched: '',
};
