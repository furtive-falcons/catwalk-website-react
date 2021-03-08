/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import Title from '../../../../components/Title';
import InputField from '../InputField.jsx';
import InputArea from '../InputArea.jsx';
import Button from '../../../../components/Button';
import { ModalForm, ModalWrapper } from './styles.js';
import Paragraph from '../../../../components/Paragraph';

const AnswerForm = ({ question, setForm }) => {
  const modalRef = useRef();
  const imageUpload = () => {
    console.log('Images uploaded');
  };

  const submit = () => {
    console.log('Answer submit');
  };

  const closeModal = (e) => {
    const current = modalRef.current;
    if (current === e.target || current.children[0] === e.target.parentNode.parentNode) {
      setForm(false);
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  return (
    <ModalForm ref={modalRef} onClick={closeModal}>
      <ModalWrapper>
        <i className="fas fa-times close" onClick={closeModal} />
        <div className="title">
          <Title
            size={2}
            children="Submit Your Answer"
          />
        </div>
        <div className="subtitle">
          <Title
            size={1.5}
            children={`Product name: ${question.question_body}`}
          />
        </div>
        <div className="nickname">
          <InputField
            type="text"
            width={30}
            height={4}
            label="Nickname"
            placeholder="Example: patagucci"
          />
          <Paragraph children="For privacy reasons, do not use your full name or email address" />
        </div>
        <div className="email">
          <InputField
            type="email"
            width={30}
            height={4}
            label="Email"
            placeholder="Example: patagucci@email.com"
          />
          <Paragraph children="For authentication reasons, you will not be emailed" />
        </div>
        <div className="body">
          <InputArea
            width={50}
            height={10}
            label="Your Answer"
            placeholder="Your answer help others learn about this product"
          />
        </div>
        <div className="upload">
          <Button
            className="upload"
            name="Image Upload"
            handleOnClick={imageUpload}
            size={15}
            secondary
          />
        </div>
        <div className="submit">
          <Button
            className="submit"
            name="Submit"
            handleOnClick={submit}
            size={10}
            secondary
          />
        </div>
      </ModalWrapper>
    </ModalForm>

  );
};

export default AnswerForm;
