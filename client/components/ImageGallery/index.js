import React from 'react';
import DivStyles from './styles'

const imageGallery = () => (
  <DivStyles>
    <div className="expand">
      <i className="fas fa-expand"></i>
    </div>
    <div className="arrow">
      <i class="fas fa-arrow-left"></i>
      <i class="fas fa-arrow-right"></i>
    </div>
  </DivStyles>
);

export default imageGallery;
