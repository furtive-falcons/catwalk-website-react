import React, { useState, useEffect } from 'react';
import { ModalContainer } from './styles.js';

const AddReview = ({ showModal, close }) => (showModal ? (
  <ModalContainer onClick={close}>
    <div onClick={(e) => e.stopPropagation()} className="formDiv">
      form goes here
    </div>
  </ModalContainer>
) : null);

export default AddReview;
