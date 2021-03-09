import React from 'react';
// import PropTypes from 'prop-types';
//delete during clean up if still unused
const Image = ({ card }) => (
  <div>
    <img
      className="default-thumbnail"
      src={card.thumbnail_url}
      alt={card.name}
    />
  </div>
);

// Image.propTypes = {
//   thumbnail_url: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default Image;
