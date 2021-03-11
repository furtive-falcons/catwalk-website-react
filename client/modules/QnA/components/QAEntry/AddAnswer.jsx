/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { shape, number } from 'prop-types';
import LinkTag from '../../../../components/LinkTag';
import PopupForm from '../PopupForm/PopupForm.jsx';

const AddAnswer = ({ question }) => {
  const [showForm, setForm] = useState(false);
  const handleOnClick = () => {
    setForm(true);
  };
  return (
    <div className="add-answer">
      <LinkTag
        handleOnClick={handleOnClick}
        href={null}
      >
        Add Answer
      </LinkTag>
      {showForm ? <PopupForm question={question} setForm={setForm} formType="answer" /> : null}
    </div>
  );
};

export default AddAnswer;

AddAnswer.propTypes = {
  question: shape({
    question_id: number,
  }).isRequired,
};
