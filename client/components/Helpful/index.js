import React from 'react';
import { string, number, func } from 'prop-types';
import LinkTag from '../LinkTag';

const Helpful = ({
  string, helpfulness, size, handleOnClick,
}) => (
  <div className="helpful">
    {string}
    Helpful?
    {' '}
    <LinkTag
      size={size}
      handleOnClick={handleOnClick}
      data-test="component-helpful"
    >
      Yes
    </LinkTag>
    {' '}
    (
    {helpfulness}
    )
  </div>
);
export default Helpful;

Helpful.propTypes = {
  string: string,
  helpfulness: number,
  size: number,
};

Helpful.defaultProps = {
  string: '',
  size: 1,
  helpfulness: 0,
};
