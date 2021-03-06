import React from 'react';
import Button from '../../../components/Button';

const MoreQuestion = ({ name, handleOnClick }) => (
  <div className="more-questions">
    <Button
      name={name}
      handleOnClick={handleOnClick}
      primary
      size={25}
    />
  </div>
);

export default MoreQuestion;
