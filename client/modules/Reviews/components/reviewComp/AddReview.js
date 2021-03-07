import React, { useState, useEffect } from 'react';
import { ModalContainer } from './styles.js';
import Form from './formComp/Form.js';

const AddReview = ({ showModal, closeModal }) => (showModal ? (
  <ModalContainer onClick={close}>
    <div onClick={(e) => e.stopPropagation()} className="formDiv">
      <Form closeModal={closeModal}/>
    </div>
  </ModalContainer>
) : null);

export default AddReview;
