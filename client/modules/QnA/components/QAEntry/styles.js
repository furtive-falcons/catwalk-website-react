import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index';

const Entry = styled.div`
    display: grid;
    grid-template-columns: 3rem auto 30rem;
    grid-template-rows: minmax(2rem, 10rem) auto repeat(2 minmax(min-content, 10rem))
    grid-auto-rows: minmax(min-content, 5rem);
    grid-gap: 0.5rem;
    align-items: center;
    color: ${colorGreyLight2};
    border-radius: 0.8rem;
    border: 1px solid #ececec;
    margin-bottom: 1.5rem;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .question p {
    font-weight: 700;
    font-size: 2rem;
  }

  .answers p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .answers {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    max-height: 50vh;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }

  .add-answer {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    cursor: pointer;
    text-decoration: underline;
    width: 9rem;
    height: 2.5rem;
    :hover {
      background-color: #eaeaea;
      border-radius: 1rem;
    }
  }

  .load-more-answer {
    grid-column: 2 / 3;
    grid-row: 4/ 5;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1rem;
    width: max-content;
    :hover {
      opacity: 0.6;
    }
  }

  .q {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: 1.7rem;
  }

  .a {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
    font-size: 1.7rem;
  }

  .question-info {
    display: flex;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    align-items: center;
    justify-content: space-around;
  }

  .answer-info {
    display:flex;
    align-items: center;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .name-date, .helpful-2, .seperator {
    margin-right: 1.5rem;
  }

  .report {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 6rem;
    height: 2.5rem;
    text-decoration: underline;
    :hover {
      background-color: #eaeaea;
      border-radius: 1rem;
    }
  }

  .helpful {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 11rem;
    height: 2.5rem;
    :hover {
      background-color: #eaeaea;
      border-radius: 1rem;
    }
  }

  .answer-info, .question-info, .helpful {
    font-size: 1.2rem;
  }

`;

const StyledSeperator = styled.div`
  width: 1px;
  min-height: 1rem;
  background: ${colorGreyLight2};
`;

export {
  Entry, StyledSeperator,
};
