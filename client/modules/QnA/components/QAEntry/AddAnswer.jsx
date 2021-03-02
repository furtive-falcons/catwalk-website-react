/* eslint-disable import/extensions */
import React from 'react';
import AddButton from './buttonStyle.js';

const AddAnswer = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('Answer form pop up');
  };
  return (
    <AddButton className="add-answer" name="Add Answer" handleOnClick={handleOnClick} />
  );
};
// const AddAnswer = () => (
//   <div className="add-answer">
//     Add Answer Button
//   </div>
// );

export default AddAnswer;
