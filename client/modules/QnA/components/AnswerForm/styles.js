import styled from 'styled-components';
import { colorWhite, colorGreyLight2, colorGreyLight1 } from '../../../../ui/ui-colors';

const ModalForm = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  z-infex: 1;
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
  height: 600px;
  border-radius: 1rem;
  display: grid;
  position: fixed;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem auto repeat(2, 10rem) 3fr 1fr;
  grid-gap: 0.5rem;
  z-index: 2;
  background-color: ${colorWhite};
  color: ${colorGreyLight2};
  align-items: center;
  padding: 5rem;

  .title {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    font-weight: 900;
  }

  .subtitle {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }

  .nickname {
    grid-column: 1 / 4;
    grid-row: 3 / 4;
  }

  .email {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }

  .body {
    grid-column: 1 / 4;
    grid-row: 5 / 6;
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
    grid-row: 6 / 7;
  }

  .submit {
    grid-column: 3 / 4;
    grid-row: 6 / 7;
    display:flex;
    justify-content: flex-end;
  }

  .close {
    position: absolute;
    top: 5%;
    right: 5%;
    color: ${colorGreyLight2};
    cursor: pointer;
    font-size: 2rem;
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
  border-radius: 5px;
  padding: 1rem;
  border: none;
  ::placeholder{
    font-size: 1.2rem;
    color: #c9;
  }
`;

const FormTextArea = styled.textarea`
width: ${(props) => props.width}rem;
height: ${(props) => props.height}rem;
font-size: 1.5rem;
border-radius: 5px;
padding: 1rem;
border: none;
::placeholder{
  font-size: 1.2rem;
  color: #c9;
}
`;

export {
  ModalForm, ModalWrapper, FormInputField, FormTextArea,
};
