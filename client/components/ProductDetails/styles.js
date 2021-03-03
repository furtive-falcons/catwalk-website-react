import styled from 'styled-components';
import {
  colorGreyLight1,
  colorGreyLight2,
  colorPrimary,
  colorSecondary,
  colorWhite,
} from '../../ui/ui-colors';

const DivStyles = styled.div`
  .container {
    display: grid;
    grid-template-rows: repeat(10, min-content);

    grid-template-columns:
      [full-start] 1fr [center-start] repeat(
        10,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end] 1fr [full-end];
  }
  .header {
    grid-column: center-start / center-end;
    grid-row: 1 / 2;
  }
  .banner {
    grid-column: center-start / center-end;
    grid-row: 2 / 3;
  }
  .gallery {
    background-color: ${colorPrimary};
    grid-column: center-start / col-end 7;
    grid-row: 3 / 9;
  }
  .info {
    background-color: ${colorSecondary};
    grid-column: col-end 7 / center-end;
    grid-row: 3 / 5;
  }
  .selector {
    background-color: ${colorWhite};
    grid-column: col-end 7 / center-end;
    grid-row: 5 / 7;
  }
  .cart {
    background-color: ${colorGreyLight2};
    color: ${colorWhite};
    grid-column: col-end 7 / center-end;
    grid-row: 7 / 9;
  }
  .slogan {
    background-color: ${colorGreyLight1};
    color: ${colorWhite};
    grid-column: center-start / col-end 7;
    grid-row: 9 / -1;
  }
  .checkList {
    background-color: ${colorGreyLight1};
    color: ${colorWhite};
    grid-column: col-end 7 / center-end;
    grid-row: 9 / -1;
  }
`;

export default DivStyles;
