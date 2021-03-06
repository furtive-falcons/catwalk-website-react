import styled from 'styled-components';

const FormView = styled.form`
  width: 700px;
  border: 1px solid black;
  display: grid;

  .inner {
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 2rem;
  }

  .about {

  }
`;

const InputDiv = styled.div`
  font-size: 1.5rem;
`;


const Radio = styled.div`
  display: flex;
  flex-direciton: row;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export {InputDiv, FormView, Radio};