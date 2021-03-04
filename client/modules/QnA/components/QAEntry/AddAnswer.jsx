/* eslint-disable import/extensions */
import React from 'react';
import LinkTag from '../../../../components/LinkTag';

const AddAnswer = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('Answer form pop up');
  };
  return (
    <div className="add-answer">
      <LinkTag
        children="Add Answer"
        handleOnClick={handleOnClick}
        size={1}
      />
    </div>
  );
};

export default AddAnswer;
