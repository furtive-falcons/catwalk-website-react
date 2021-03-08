/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Button from '../../../components/Button';
import PopupForm from './PopupForm/PopupForm.jsx';

const AddQuestion = () => {
  const [showForm, setForm] = useState(false);
  const handleOnClick = () => {
    setForm(true);
  };
  return (
    <div className="add-question">
      <Button
        name="Add A QUESTION "
        handleOnClick={handleOnClick}
        secondary
        icon="plus"
        size={20}
      />
      {showForm ? <PopupForm setForm={setForm} formType="question" /> : null}
    </div>
  );
};

export default AddQuestion;
