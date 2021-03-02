import styled from 'styled-components';

const Entry = styled.div`

    display: grid;
    grid-template-columns: 2rem auto 10rem 10rem;
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
    grid-column: 4 / 5;
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
    margin-top: .6rem;
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

export default Entry;

// .name-date {
//   grid-column: 2 / 3;
//   grid-row: 3 / 4;
// }

// .report {
//   grid-column: 2 / 3;
//   grid-row: 3 / 4;
// }

// .helpful-2 {
//   grid-column: 2 / 3;
//   grid-row: 3 / 4;
// }
