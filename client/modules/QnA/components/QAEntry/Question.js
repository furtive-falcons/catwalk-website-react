import React from 'react';
import { string } from 'prop-types';
import Paragraph from '../../../../components/Paragraph';

const Question = ({ body }) => (
  <div className="question">
    <Paragraph>{body}</Paragraph>
  </div>
);

export default Question;

Question.propTypes = {
  body: string,
};

Question.defaultProps = {
  body: '',
};
