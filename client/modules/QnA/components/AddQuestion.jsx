import React from 'react';
import Button from '../../../components/Button';

const AddQuestion = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('Add a question');
  };
  return (
    <div className="add-question">
      <Button
        name="Add A QUESTION "
        handleOnClick={handleOnClick}
        primary
        icon="plus"
        size={20}
      />
    </div>
  );
};

export default AddQuestion;
