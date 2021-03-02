import React from 'react';
import DivStyles from './styles';

const imageGallery = () => (
  <DivStyles>
    <div className="expand">
      <i className="fas fa-expand" />
    </div>
    <div className="arrow">
      <i className="fas fa-arrow-left" />
      <i className="fas fa-arrow-right" />
    </div>
  </DivStyles>
);

export default imageGallery;
