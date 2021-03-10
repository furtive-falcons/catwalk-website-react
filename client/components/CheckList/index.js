import { arrayOf, exact, string } from 'prop-types';
import React, { Fragment } from 'react';
import StyledList from './styles';

const CheckList = ({ features }) => (
  <StyledList>
    {features && features.map(({ feature, value }) => (
      <Fragment key={feature}>
        <li>
          <i className="fas fa-check" />
          <span>{value}</span>
        </li>
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
