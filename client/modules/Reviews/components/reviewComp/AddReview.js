import React, { useEffect } from 'react';
import { ModalContainer } from './styles.js';
import Form from './formComp/Form.js';

const AddReview = ({
  showModal, closeModal, metaData, refresh,
}) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [showModal]);

  return (showModal ? (
    <ModalContainer>
      <div className="formDiv">
        <Form refresh={refresh} metaData={metaData} closeModal={closeModal} />
      </div>
    </ModalContainer>
  ) : null);
};

export default AddReview;
