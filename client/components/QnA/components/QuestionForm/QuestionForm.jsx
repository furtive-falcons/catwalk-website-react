import React from 'react';
import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import Nickname from '../Nickname.jsx';
import Email from '../Email.jsx';
import InputField from '../InputField.jsx';
import Button from '../../Button/index.js'

const QuestionForm = () => {

  const handleClick = () => {
    console.log('Question form submited')
  }

  return (
    <React.Fragments>
      <Title />
      <Subtitle />
      <Nickname />
      <Email />
      <InputField />
      <Button name={Submit} handleClick={handleClick}/>
    </React.Fragments>
  )
}

export default QuestionForm;