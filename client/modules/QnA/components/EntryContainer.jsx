/* eslint-disable import/extensions */
import React from 'react';
import QAEntry from './QAEntry/QAEntry.jsx';

const EntryContainer = ({questions}) => (
  <div className="entry-container">
    <QAEntry question={questions[0]} />
  </div>
);

export default EntryContainer;
