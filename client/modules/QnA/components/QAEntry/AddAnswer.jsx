/* eslint-disable import/extensions */
import React, { useState } from 'react';
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
          children="Add Answer"
          handleOnClick={handleOnClick}
          size={1}
          href={null}
        />
        {showForm ? <PopupForm question={question} setForm={setForm} formType="answer" /> : null}
      </div>
  );
};

export default AddAnswer;
