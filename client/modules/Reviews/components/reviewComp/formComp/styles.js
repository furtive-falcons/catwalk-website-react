import styled from 'styled-components';

const FormView = styled.form`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  min-width: 750px;

  .rec {
    label {
      font-size: 1.3rem;
    }

    input {
      margin-left: 5px;
      margin-right: 5px;
    }

  }

  .input {
    width: 95%;
    height: 35px;
    font-size: 1.3rem;
    padding: 2%;

  }

  // .input: invalid {
  //   border: 2px solid red;
  // }

  textarea {
    width: 100%;
    height: 150px;
    padding: 2%;
  }

  .ratingAndRec {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 20px;
    margin-bottom: 20px;

  }

  .overall {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;


    span {
      font-size: 1.5rem;
      font-weight: 500;
    }

    .selected {
      font-weight: 500;
      font-size: 1.3rem;
    }

    .message {
      color: red;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  .inner {
    // border: 1px solid black;
    width: 95%;
    padding-bottom: 50px;
    padding-top: 50px;
  }

  .comment {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    .imageRow {
      display: flex;
      flex-direction: row;
    }


  .upload {
    display: flex;
    flex-direction: column;

    .img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      margin: 5px;
      border: 3px solid green;
    }
  }
  }

  .info {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;


  }

  .buttons {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 20px;

    .button {
      height: 30px;
      width: 30%;
      font-size: 1.5rem;
    }
  }

`;

const InputDiv = styled.div`
  font-size: 1.5rem;

  .note {
    font-size: 1rem;
  }
`;


const Radio = styled.div`
  display: flex;
  flex-direciton: row;
  font-size: 1.3rem;

  .radio {
    width: 40px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

`;

const StarDiv = styled.div`
  display: flex;
  flex-direction: column;
  .group {
    display: flex;
    flex-direction: row;
    margin-left: 4px;

    svg {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
  .message {
    color: red;
    margin-left: 4px;
  }
`;

export {StarDiv, InputDiv, FormView, Radio};