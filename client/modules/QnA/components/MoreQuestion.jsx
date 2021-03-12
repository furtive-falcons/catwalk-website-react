import React from 'react';
import { string, func } from 'prop-types';
import Button from '../../../components/Button';

const MoreQuestion = ({ name, handleOnClick }) => (
  <div className="more-questions">
    <Button
      id="more-question"
      name={name}
      handleOnClick={handleOnClick}
      secondary
      size={25}
    />
  </div>
);

export default MoreQuestion;

MoreQuestion.propTypes = {
  name: string,
  handleOnClick: func,
};

MoreQuestion.defaultProps = {
  name: null,
  handleOnClick: () => {},
};
