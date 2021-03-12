/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import Title from '../../../../components/Title';
import InputField from './InputField.jsx';
import InputArea from './InputArea.jsx';
import Button from '../../../../components/Button';
import {
  ModalForm, ModalWrapper, Form, SuccessModal,
} from './styles.js';
import Paragraph from '../../../../components/Paragraph';
import { ProductContext } from '../../index.js';
import ImageThumbnail from '../../../../components/ImagePopUp';

const axios = require('axios');

const PopupForm = ({ question, setForm, formType }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [submited, setSubmited] = useState(false);
  const [success, setSuccess] = useState(false);
  const productId = Number(useContext(ProductContext).productId);
  const { productName } = useContext(ProductContext);
  const modalRef = useRef();
  const uploadRef = useRef();

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

  const validation = () => (nickname && email && body);

  const postRequest = () => {
    let url = 'qa/questions';
    if (formType === 'answer') {
      url += `/${question.question_id}/answers`;
    }
    axios.post(url, content())
      .then(() => setSuccess(true))
      .catch((err) => { throw err; });
  };

  const imageUpload = (e) => {
    const seperator = e.target.value.indexOf('-');
    const id = e.target.value.slice(12, seperator);
    setPhotos([...photos, `https://picsum.photos/id/${id}/600/400`]);
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmited(true);
    if (validation()) {
      postRequest();
    }
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
    <ModalForm ref={modalRef} onClick={closeModal} className="modal-active">
      <ModalWrapper>
        <i className="fas fa-times close" onClick={closeModal} />
        {success ? (
          <SuccessModal>
            <i className="fas fa-check-circle success" />
            <Paragraph
              size={3}
            >
              THANK YOU !
            </Paragraph>
          </SuccessModal>
        ) : (
          <>
            <div className="title">
              <Title
                size={2}
              >
                {formType === 'answer' ? 'Submit Your Answer' : 'Ask Your Question'}
              </Title>
            </div>
            <div className="subtitle">
              <Title
                size={1.5}
              >
                {`${productName} ${formType === 'answer' ? `: ${question.question_body}` : ''}`}
              </Title>
            </div>
            <Form>
              <div className="nickname">
                <InputField
                  className="nickname"
                  name="nickname"
                  type="text"
                  width={30}
                  height={4}
                  label="Nickname"
                  placeholder="Example: patagucci"
                  getInput={getInput}
                />
                <Paragraph>For privacy reasons, do not use your full name or email</Paragraph>
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
                <Paragraph>For authentication reasons, you will not be emailed</Paragraph>
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
                <br />
              </div>
              {!submited || validation() ? null : <span>PLEASE FILL UP ALL AREAS</span>}
              <div className="thumbnail">
                <ImageThumbnail images={photos} />
              </div>
              {formType === 'answer' && photos.length < 5 ? (
                <>
                  <div className="upload">
                    <input
                      style={{ display: 'none' }}
                      type="file"
                      onChange={imageUpload}
                      accept="image/*"
                      ref={uploadRef}
                    />
                    <Button
                      className="upload"
                      name="Upload Images"
                      handleOnClick={(e) => { uploadRef.current.click(); e.preventDefault(); }}
                      size={15}
                      secondary
                    />
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
            </Form>
          </>
        )}

      </ModalWrapper>
    </ModalForm>

  );
};

export default PopupForm;
