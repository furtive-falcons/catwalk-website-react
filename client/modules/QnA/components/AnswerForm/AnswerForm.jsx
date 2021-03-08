/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import Title from '../../../../components/Title';
import InputField from '../InputField.jsx';
import InputArea from '../InputArea.jsx';
import Button from '../../../../components/Button';
import { ModalForm, ModalWrapper } from './styles.js';
import Paragraph from '../../../../components/Paragraph';

const axios = require('axios');

const AnswerForm = ({ question, setForm }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const modalRef = useRef();

  const getInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    targetName === "nickname" ? setNickname(targetValue) : null;
    targetName === "email" ? setEmail(targetValue) : null;
    targetName === "body" ? setBody(targetValue) : null;
  };

  const postRequest = () => {
    axios.post();
  };

  const imageUpload = () => {
    console.log('Images uploaded');
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const closeModal = (e) => {
    const { current } = modalRef;
    const closeSvg = current.children[0].children[0];
    if (current === e.target || closeSvg === e.target.parentNode) {
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
            name="nickname"
            type="text"
            width={30}
            height={4}
            label="Nickname"
            placeholder="Example: patagucci"
            getInput={getInput}
          />
          <Paragraph children="For privacy reasons, do not use your full name or email address" />
        </div>
        <div className="email">
          <InputField
            name="email"
            type="email"
            width={30}
            height={4}
            label="Email"
            placeholder="Example: patagucci@email.com"
            getInput={getInput}
          />
          <Paragraph children="For authentication reasons, you will not be emailed" />
        </div>
        <div className="body">
          <InputArea
            name="body"
            width={50}
            height={10}
            label="Your Answer"
            placeholder="Your answer help others learn about this product"
            getInput={getInput}
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
