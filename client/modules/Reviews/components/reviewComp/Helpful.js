import React, { useState } from 'react';
import { post } from 'axios';
import { HelpfulDiv } from './tileStyles';

const Helpful = ({ count, review_id }) => {
  const [statusCodeUpvote, setStatusUpvote] = useState(null);
  const [statusCodeReport, setStatusReport] = useState(null);

  const upVote = (review_id) => {
    post('reviews/upvote', { review_id })
      .then((result) => setStatusUpvote(result.status))
      .catch((err) => { throw err; });
  };

  const report = (review_id) => {
    post('reviews/report', { review_id })
      .then((result) => setStatusReport(result.status))
      .catch((err) => { throw err; });
  };

  return (
    <HelpfulDiv id="helpful">
      Was this helpful?
      {' '}
      <span onClick={() => upVote(review_id)}>Yes</span>
      {' '}
      (
      {statusCodeUpvote === 204 ? count + 1 : count}
      )
      {' '}
      <span>No (0)</span>
      {' '}
      |
      {' '}
      {' '}
      {statusCodeReport === 204
        ? <span className="reported">Reported</span>
        : <span onClick={() => report(review_id)}>Report</span>}
    </HelpfulDiv>
  );
};

export default Helpful;
