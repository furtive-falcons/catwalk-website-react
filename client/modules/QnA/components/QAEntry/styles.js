/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index.js';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 3rem auto 25rem;
    grid-template-rows: minmax(2rem, 10rem) auto repeat(2 minmax(min-content, 10rem))
    grid-auto-rows: minmax(min-content, 5rem);
    grid-gap: 0.5rem;
    align-items: center;

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .question p {
    font-weight: 700;
    font-size: 2rem;
    color: ${colorGreyLight2};
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
  }


  .add-answer {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    cursor: pointer;
    text-decoration: underline;
  }

  .load-more-answer {
    grid-column: 2 / 3;
    grid-row: 4/ 5;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 12rem;
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
    justify-content: space-between;
  }

  .answer-info {
    display:flex;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .name-date, .helpful-2, .seperator {
    margin-right: 1.5rem;
  }

  .report {
    cursor: pointer;
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
