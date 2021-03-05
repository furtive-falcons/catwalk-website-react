import styled from 'styled-components';

const DivStyles = styled.div`
  .container {
    display: grid;
    grid-template-rows: repeat(10, min-content);

    grid-template-columns:
      [left-start] 1fr [left-end center-start] repeat(
        10,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end right-start]
      1fr [right-end];
  }
  .header {
    grid-column: left-start/ right-end;
    grid-row: 1 / 2;
  }
  .banner {
    grid-column: center-start / center-end;
    grid-row: 2 / 3;
  }
  .gallery {
    grid-column: center-start / col-end 7;
    grid-row: 3 / 9;
  }
  .info {
    grid-column: col-end 7 / center-end;
    grid-row: 3 / 5;
  }
  .selector {
    grid-column: col-end 7 / center-end;
    grid-row: 5 / 7;
  }
  .cart {
    grid-column: col-end 7 / center-end;
    grid-row: 7 / 9;
  }
  .slogan {
    grid-column: center-start / col-end 7;
    grid-row: 9 / -1;
  }
  .checkList {
    grid-column: col-end 7 / center-end;
    grid-row: 9 / -1;
  }
`;

export default DivStyles;
