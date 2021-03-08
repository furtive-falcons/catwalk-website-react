/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index.js';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 3rem auto 8rem 1rem 8rem;
    grid-template-rows: minmax(1.5rem, 10rem) auto repeat(2 minmax(min-content, 10rem))
    grid-auto-rows: minmax(min-content, 5rem);
    grid-gap: 0.5rem;
    align-items: center;

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .question p {
    font-weight: 700;
    font-size: 1.7rem;
    color: ${colorGreyLight2};
  }

  .answers p {
    font-size: 1.3rem;
  }

  .answers {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    max-height: 50vh;
    overflow: scroll;
  }

  .helpful-1 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .add-answer {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    cursor: pointer;
    text-decoration: underline
    width: 5rem;
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
  }

  .a {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
  }

  .info {
    display:flex;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .name-date, .report, .helpful-2 {
    margin-right: 1.1rem;
  }

  .info .report {
    cursor: pointer;
  }
`;

const StyledSeperator = styled.div`
  width: 1px;
  min-height: 1rem;
  background: ${colorGreyLight2};
  margin-right: 1rem;
`;

export {
  Entry, StyledSeperator,
};
