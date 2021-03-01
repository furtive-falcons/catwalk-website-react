/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Title from '../Title.jsx';
import Subtitle from '../Subtitle.jsx';
import Nickname from '../Nicknanme.jsx';
import Email from '../Email.jsx';
import InputField from './InputField';
import Button from '../../Button/index.js';

const AnswerForm = () => {
  const imageUpload = () => {
    console.log('Images uploaded');
  };

  const submit = () => {
    console.log('Answer submit');
  };

  return (
    <React.Fragments>
      <Title />
      <Subtitle />
      <Nickname />
      <Email />
      <InputField />
      <Button name="Image Upload" handleClick={imageUpload} />
      <Button name="Submit" handleClick={submit} />
    </React.Fragments>

  );
};

export default AnswerForm;
