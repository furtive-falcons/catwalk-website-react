/* eslint-disable import/extensions */
import React from 'react';
// import Button from '../../../../components/Button';
import LinkTag from '../../../../components/LinkTag';

const AddAnswer = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('Answer form pop up');
  };
  return (
    <LinkTag
      className="add-answer"
      children="Add Answer"
      handleOnClick={handleOnClick}
      size={1}
    />
  );
};
// const AddAnswer = () => {
//   const handleOnClick = (e) => {
//     e.preventDefault();
//     console.log('Answer form pop up');
//   };
//   return (
//     <Button
//       className="add-answer"
//       name="Add Answer"
//       handleOnClick={handleOnClick}
//       primary
//       size={10}
//     />
//   );
// };

export default AddAnswer;
