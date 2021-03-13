import React, { useEffect } from 'react';
import { ModalContainer } from './styles';
import Form from './formComp/Form';

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
