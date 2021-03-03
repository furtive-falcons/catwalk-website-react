/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../../../ui/ui-colors/index.js';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 8rem 1rem 8rem;
    grid-template-rows: repeat(4, minmax(min-content, 3rem));
    grid-auto-rows: minmax(min-content, 3rem);
    align-items: center;

  .question {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .answer {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
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
