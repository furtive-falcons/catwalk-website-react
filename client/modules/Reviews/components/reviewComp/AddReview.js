import React, { useState, useEffect } from 'react';
import { ModalContainer } from './styles.js';
import Form from './formComp/Form.js';

const AddReview = ({ showModal, closeModal, metaData={metaData} }) => {
  useEffect(()=>{
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showModal]);

  return (showModal ? (
  <ModalContainer onClick={close}>
    <div onClick={(e) => e.stopPropagation()} className="formDiv">
      <Form metaData={metaData} closeModal={closeModal}/>
    </div>
  </ModalContainer>
) : null)
  };

export default AddReview;
