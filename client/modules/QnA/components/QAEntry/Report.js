import React from 'react';
import { string, func } from 'prop-types';
import LinkTag from '../../../../components/LinkTag';

const Report = ({ children, handleOnClick }) => (
  <div className="report">
    <LinkTag
      handleOnClick={handleOnClick}
      href={null}
    >
      {children}
    </LinkTag>
  </div>
);

export default Report;

Report.propTypes = {
  children: string,
  handleOnClick: func,
};

Report.defaultProps = {
  children: '',
  handleOnClick: () => {},
};
