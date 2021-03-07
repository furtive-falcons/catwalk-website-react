import { arrayOf, exact, string } from 'prop-types';
import React, { Fragment } from 'react';
import StyledList from './styles';

const CheckList = ({ features }) => (
  <StyledList>
    {features && features.map(({ feature, value }) => (
      <Fragment key={feature}>
        <i className="fas fa-check" />
        <li>{value}</li>
        <br />
      </Fragment>
    ))}
  </StyledList>
);

CheckList.propTypes = {
  features: arrayOf(exact({
    feature: string,
    value: string,
  })),
};

CheckList.defaultProps = {
  features: null,
};

export default CheckList;
