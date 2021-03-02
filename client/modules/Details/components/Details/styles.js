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
    grid-template-rows: repeat(9, minmax(min-content, 8vh));
    grid-template-columns:
      [full-start] 1fr [center-start] repeat(
        12,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end] 1fr [full-end];
  }

  .gallery {
    background-color: ${colorPrimary};
    grid-column: center-start / col-end 8;
    grid-row: 1 / 8;
  }
  .info {
    background-color: ${colorSecondary};
    grid-column: col-end 8 / center-end;
    grid-row: 1 / 4;
  }
  .selector {
    background-color: ${colorWhite};
    grid-column: col-end 8 / center-end;
    grid-row: 4 / 6;
  }
  .cart {
    background-color: ${colorGreyLight2};
    color: ${colorWhite};
    grid-column: col-end 8 / center-end;
    grid-row: 6 / 8;
  }
  .footer {
    background-color: ${colorGreyLight1};
    color: ${colorWhite};
    grid-column: center-start / center-end;
    grid-row: 8 / -1;
  }
`;

export default DivStyles;
