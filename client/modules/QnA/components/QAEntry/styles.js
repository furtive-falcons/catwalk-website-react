import styled from 'styled-components';
import Paragraph from '../../../../components/Paragraph/index.js'
import {colorGreyLight2} from '../../../../ui/ui-colors/index.js';

export const Entry = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 8rem 8rem;
    grid-template-rows: repeat(4, minmax(min-content, 3rem));
    grid-auto-rows: minmax(min-content, 3rem);


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
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }

  .name-date {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  .report {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    justify-self: end;
  }

  .load-more-answer {
    grid-column: 2 / 3;
    grid-row: 4/ 5;
  }

  .helpful-2 {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    justify-self: center;
  }
`
