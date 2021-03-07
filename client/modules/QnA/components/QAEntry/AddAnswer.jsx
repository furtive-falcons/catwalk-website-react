/* eslint-disable import/extensions */
import React, {useState} from 'react';
import LinkTag from '../../../../components/LinkTag';
import AnswerForm from '../AnswerForm/AnswerForm.jsx';

const AddAnswer = () => {
  const [showForm, setForm] = useState(false);
  const handleOnClick = () => {
    setForm(true);
    console.log('Answer form pop up');
  };
  return (
    <div className="add-answer">
      <LinkTag
        children="Add Answer"
        handleOnClick={handleOnClick}
        size={1}
        href={null}
      />
      {showForm ? <AnswerForm /> : null}
    </div>
  );
};

export default AddAnswer;
