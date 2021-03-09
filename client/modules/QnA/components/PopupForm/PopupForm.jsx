/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import Title from '../../../../components/Title';
import InputField from '../InputField.jsx';
import InputArea from '../InputArea.jsx';
import Button from '../../../../components/Button';
import { ModalForm, ModalWrapper } from './styles.js';
import Paragraph from '../../../../components/Paragraph';
import { ProductContext } from '../../index.js';
import ImageThumbnail from '../../../../components/ImagePopUp';

const axios = require('axios');

const PopupForm = ({ question, setForm, formType }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [upload, setUpload] = useState(false);
  const productId = Number(useContext(ProductContext));
  const modalRef = useRef();

  const getInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    targetName === 'nickname' ? setNickname(targetValue) : null;
    targetName === 'email' ? setEmail(targetValue) : null;
    targetName === 'body' ? setBody(targetValue) : null;
  };

  const content = () => (formType === 'answer' ? ({
    body,
    name: nickname,
    email,
    photos,
  }) : ({
    body,
    name: nickname,
    email,
    product_id: productId,
  })
  );

  const postRequest = () => {
    let url = 'qa/questions';
    if (formType === 'answer') {
      url += `/${question.question_id}/answers`;
    }
    axios.post(url, content())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const imageUpload = () => {
    console.log('Images uploaded');
  };

  const submit = (e) => {
    e.preventDefault();
    postRequest();
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
            children={formType === 'answer' ? 'Submit Your Answer' : 'Ask Your Question'}
          />
        </div>
        <div className="subtitle">
          <Title
            size={1.5}
            children={`Product name ${formType === 'answer' ? `: ${question.question_body}` : ''}`}
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
            label={formType === 'answer' ? 'Your Answer' : 'Your Question'}
            placeholder="Your answer help others learn about this product"
            getInput={getInput}
          />
        </div>
        {formType === 'answer' ? (
          <>
            <div className="upload">
              <Button
                className="upload"
                name="Upload Images"
                handleOnClick={() => setUpload(true)}
                size={15}
                secondary
              />
            </div>
            <div className="thumbnail">
              <ImageThumbnail images={photos} />
            </div>
          </>
        ) : null}
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

export default PopupForm;
