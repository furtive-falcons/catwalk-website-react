import styled from 'styled-components';
import {
  colorGreyLight1,
  colorGreyLight2,
  colorPrimary,
  colorSecondary,
  colorWhite,
} from '../../../../ui/ui-colors';

const DivStyles = styled.div`
  .container {
    display: grid;
    grid-template-rows: repeat(10, minmax(min-content, 10vh));
    grid-template-columns:
      [full-start] 1fr [center-start] repeat(
        10,
        [col-start] minmax(min-content, 9rem) [col-end]
      )
      [center-end] 1fr [full-end];
  }

  .gallery {
    background-color: ${colorPrimary};
    grid-column: center-start / col-end 7;
    grid-row: 1 / 8;
  }
  .info {
    background-color: ${colorSecondary};
    grid-column: col-end 7 / center-end;
    grid-row: 1 / 3;
  }
  .selector {
    background-color: ${colorWhite};
    grid-column: col-end 7 / center-end;
    grid-row: 3 / 5;
  }
  .cart {
    background-color: ${colorGreyLight2};
    color: ${colorWhite};
    grid-column: col-end 7 / center-end;
    grid-row: 5 / 7;
  }
  .footer {
    background-color: ${colorGreyLight1};
    color: ${colorWhite};
    grid-column: center-start / center-end;
    grid-row: 7 / -1;
  }
`;

export default DivStyles;