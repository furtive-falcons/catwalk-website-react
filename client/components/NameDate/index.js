import React from 'react';

const NameDate = ({ string, name, date }) => {
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <div className="name-date">
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
