import React from 'react';
import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import Nickname from '../Nickname.jsx';
import Email from '../Email.jsx';

const QuestionForm = () => {
  return (
    <React.Fragments>
      <Title />
      <Subtitle />
      <Nickname />
      <Email />
    </React.Fragments>
  )
}

export default QuestionForm;