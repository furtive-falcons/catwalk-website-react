import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import {
  shape, func, string, number,
} from 'prop-types';
import Title from '../../../../components/Title';
import InputField from './InputField';
import InputArea from './InputArea';
import Button from '../../../../components/Button';
import {
  ModalForm, ModalWrapper, Form, SuccessModal,
} from './styles';
import Paragraph from '../../../../components/Paragraph';
import ImageThumbnail from '../../../../components/ImagePopUp';
import { ProductContext } from '../..';

const axios = require('axios');

const PopupForm = ({ question, setForm, formType }) => {
  const [photos, setPhotos] = useState([]);
  const [response, setResponse] = useState({});
  const [submited, setSubmited] = useState(false);
  const [success, setSuccess] = useState(false);
  const { productName, productId } = useContext(ProductContext);
  const modalRef = useRef();
  const uploadRef = useRef();

  const getInput = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    setResponse({ ...response, [targetName]: targetValue });
  };

  const content = () => (formType === 'answer' ? ({ ...response, photos }) : { ...response, product_id: productId });

  const validation = () => (response.name && response.email && response.body);

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
    const url = `https://picsum.photos/id/${id}/600/400`;
    setPhotos([...photos, url]);
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
            <Paragraph size={3}>THANK YOU !</Paragraph>
          </SuccessModal>
        ) : (
          <>
            <div className="title">
              <Title size={2}>
                {formType === 'answer' ? 'Submit Your Answer' : 'Ask Your Question'}
              </Title>
            </div>
            <div className="subtitle">
              <Title size={1.5}>
                {`${productName} ${formType === 'answer' ? `: ${question.question_body}` : ''}`}
              </Title>
            </div>
            <Form>
              <div className="nickname">
                <InputField
                  name="name"
                  type="text"
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
                  label="Email"
                  placeholder="Example: patagucci@email.com"
                  getInput={getInput}
                />
                <Paragraph>For authentication reasons, you will not be emailed</Paragraph>
              </div>
              <div className="body">
                <InputArea
                  name="body"
                  label={formType === 'answer' ? 'Your Answer' : 'Your Question'}
                  placeholder="Your answer help others learn about this product"
                  getInput={getInput}
                />
                <br />
                {!submited || validation() ? null : <span>PLEASE FILL UP ALL AREAS</span>}
              </div>
              <div className="thumbnail">
                <ImageThumbnail images={photos} />
              </div>
              {formType === 'answer' && photos.length < 5 ? (
                <div className="upload">
                  <input
                    style={{ display: 'none' }}
                    type="file"
                    onChange={imageUpload}
                    accept="image/*"
                    ref={uploadRef}
                  />
                  <Button
                    name="Upload Images"
                    handleOnClick={(e) => {
                      uploadRef.current.click();
                      e.preventDefault();
                    }}
                    size={15}
                    secondary
                  />
                </div>
              ) : null}
              <div className="submit">
                <Button
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

PopupForm.propTypes = {
  setForm: func.isRequired,
  formType: string.isRequired,
  question: shape({
    question_id: number,
    question_body: string,
  }).isRequired,
};
