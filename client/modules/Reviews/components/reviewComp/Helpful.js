import React, { useState } from 'react';
import axios from 'axios';
import { HelpfulDiv } from './tileStyles.js';

const Helpful = ({ count, review_id }) => {
  // make api call upon clicking yes or report
  // 1. if click yes
  // marked as clicked once and cannot click anymore
  // send put request to api
  // put request responds with 204 No content
  // update the current count
  const [statusCodeUpvote, setStatusUpvote] = useState(null);
  const [statusCodeReport, setStatusReport] = useState(null);

  const upVote = (review_id) => {
    axios.post('/api/reviews/upvote', { review_id })
      .then((result) => setStatusUpvote(result.status))
      .catch((err) => console.log(err));
  };

  const report = (review_id) => {
    axios.post('/api/reviews/report', { review_id })
      .then((result) => setStatusReport(result.status))
      .catch((err) => console.log(err));
  };

  return (
    <HelpfulDiv>
      Was this helpful?
      {' '}
      <span onClick={() => upVote(review_id)}>Yes</span>
      {' '}
      (
      {statusCodeUpvote === 204 ? count + 1 : count}
      )
      {' '}
      {' '}
      |
      {' '}
      {' '}
      {statusCodeReport === 204
        ? <span className='reported'>Reported</span>
        : <span onClick={() => report(review_id)}>Report</span>}
    </HelpfulDiv>
  );
};

export default Helpful;
