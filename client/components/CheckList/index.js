import React, { Fragment } from 'react';
import StyledList from './styles';

const list = [
  { id: 1, check: 'GMO and Pesticide-free' },
  { id: 2, check: 'Made with 100% Genetic Modification' },
  { id: 3, check: 'This is made up' },
  { id: 4, check: "It doesn't matter" },
];

const CheckList = () => (
  <StyledList>
    {list.map(({ id, check }) => (
      <Fragment key={id}>
        <i className="fas fa-check" />
        <li>{check}</li>
        <br />
      </Fragment>
    ))}
  </StyledList>
);

export default CheckList;
