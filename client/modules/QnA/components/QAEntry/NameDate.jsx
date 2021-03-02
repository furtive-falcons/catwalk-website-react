import React from 'react';

const NameDate = ({ name, date }) => {
  const formatDate = (string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <div className="name-date">
      by
      {' '}
      {name}
      ,
      {' '}
      {formatDate(date)}
    </div>
  );
};

export default NameDate;
