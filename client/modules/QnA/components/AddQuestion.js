import React, { useState } from 'react';
import Button from '../../../components/Button';
import PopupForm from './PopupForm/PopupForm';

const AddQuestion = () => {
  const [showForm, setForm] = useState(false);
  const handleOnClick = () => {
    setForm(true);
  };
  return (
    <div className="add-question">
      <Button
        id="add-question"
        name="ADD A QUESTION "
        handleOnClick={handleOnClick}
        secondary
        size={20}
      />
      {showForm ? <PopupForm setForm={setForm} formType="question" /> : null}
    </div>
  );
};

export default AddQuestion;
