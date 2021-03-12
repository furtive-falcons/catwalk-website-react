import styled from 'styled-components';
import { colorGreyLight2, colorPrimary } from '../../../../ui/ui-colors';

const ModalForm = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  height: 100%
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  color: ${colorGreyLight2};
`;

const ModalWrapper = styled.div`
  width: 600px;
  min-height: 600px;
  border-radius: 1rem;
  display: grid;
  position: fixed;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem auto auto;
  grid-gap: 0.5rem;
  background-color: #f5f5f5;
  color: ${colorGreyLight2};
  align-items: center;
  padding: 5rem;
  cursor: auto;
  animation: slideUp .6s ease-in;
  box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.5),
              -8px -8px 25px rgba(0, 0, 0, 0.5);

  @keyframes slideUp {
    0% {
      transform: translateY(100%)
    }
    100% {
      transform: tanslateY(-100%)
    }
  }

  .title {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    font-weight: 900;
  }

  .subtitle {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  form {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }

  .close {
    position: absolute;
    top: 5%;
    right: 5%;
    color: ${colorGreyLight2};
    cursor: pointer;
    font-size: 2.5rem;
    :hover {
      animation:spin 0.5s linear 1;
    }
  }
  @keyframes spin { 100% { -webkit-transform: rotate(90deg); transform:rotate(90deg); } }
`;

const FormInputField = styled.input`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  padding: 1rem;
  border: none;

  ::placeholder{
    font-size: 1.2rem;
    padding-left: 1rem;
    color: #c9;
  }
`;

const FormTextArea = styled.textarea`
width: ${(props) => props.width}rem;
height: ${(props) => props.height}rem;
font-size: 1.5rem;
border-radius: 2rem;
padding: 1rem;
border: none;
resize: none;
::placeholder{
  font-size: 1.2rem;
  padding-left: 1rem;
  color: #c9;
}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 10rem) 3fr auto 1fr;
  grid-gap: 0.5rem;
  width: 100%;
  height: 100%;

  .nickname {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      width: min-content;
    }

  .email {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    width: min-content;
  }

  .body {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }

  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colorGreyLight2};
    margin-bottom: 0.5rem;
  }

  span, p {
    color: #f00;
  }

  .upload {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }

  .submit {
    grid-column: 3 / 4;
    grid-row: 5 / 6;
    display:flex;
    justify-content: flex-end;
  }

  .thumbnail {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }
`;

const SuccessModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #f5f5f5;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  animation: success .8s ease-in;
  @keyframes success {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .success {
    font-size: 20rem;
    color: ${colorPrimary};
    margin-bottom: 2rem;
  }

  p {
    color: ${colorGreyLight2};
    font-weight: 500;
  }
`;

export {
  ModalForm, ModalWrapper, FormInputField, FormTextArea, Form, SuccessModal,
};
