/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index.js';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 8rem 1rem 8rem;
    grid-template-rows: minmax(min-content, 10rem) auto repeat(2 minmax(min-content, 10rem))
    grid-auto-rows: minmax(min-content, 5rem);
    align-items: center;

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .answers {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    flex-direction: column;
  }

  .helpful-1 {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .add-answer {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
  }

  .load-more-answer {
    grid-column: 2 / 3;
    grid-row: 4/ 5;
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
    margin-right: 1rem;
  }
`;

const StyledSeperator = styled.div`
  width: 1px;
  min-height: 1rem;
  background: ${colorGreyLight2};
  margin-right: 1rem;
`;

export { Entry, StyledSeperator };
