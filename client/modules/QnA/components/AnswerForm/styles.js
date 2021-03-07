import styled from 'styled-components';

const ModalForm = styled.div`
  postition: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  z-infex: 1;
  height: 100%
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  display: grid;
  z-index: 2;
`;

export { ModalForm, ModalWrapper };
