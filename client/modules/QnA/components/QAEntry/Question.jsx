import React from 'react';
import Paragraph from '../../../../components/Paragraph';

const Question = ({body}) => (
  <div className="question">
    <Paragraph children={body} />
  </div>
);

export default Question;
