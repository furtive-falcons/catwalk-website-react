/* eslint-disable import/extensions */
import React, { useState } from 'react';
import LinkTag from '../../../../components/LinkTag';
import AnswerForm from '../AnswerForm/AnswerForm.jsx';

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
        {showForm ? <AnswerForm question={question} setForm={setForm} /> : null}
      </div>
  );
};

export default AddAnswer;
