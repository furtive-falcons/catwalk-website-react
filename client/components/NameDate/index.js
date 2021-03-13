import React from 'react';

const NameDate = ({
  string, name, date, icon = false,
}) => {
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <div className="name-date">
      {icon
      && <i className="fas fa-check-circle" />}
      {string}
      {' '}
      {name}
      ,
      {' '}
      {formatDate(date)}
    </div>
  );
};

export default NameDate;
