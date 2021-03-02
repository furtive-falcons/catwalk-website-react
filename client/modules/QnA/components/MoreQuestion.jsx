import React from 'react';
import Button from '../../../components/Button';

const MoreQuestion = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('load more questions');
  };
  return (
    <div className="more-questions">
      <Button
        name="MORE ANSWERED QUESTIONS"
        handleOnClick={handleOnClick}
        primary
        size={25}
      />
    </div>
  );
};

export default MoreQuestion;
