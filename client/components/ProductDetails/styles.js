import styled from 'styled-components';
import { colorWhite } from '../../ui/ui-colors';

const padding = '2rem';

const DivStyles = styled.div`
  .container {
    display: grid;
    grid-template-rows: repeat(10, min-content);

    grid-template-columns:
      [full-start] 1fr [left-end center-start] repeat(
        10,
        [col-start] minmax(min-content, 14rem) [col-end]
      )
      [center-end right-start]
      1fr [center-end];
  }
  .header {
    grid-column: full-start / full-end;
    grid-row: 1 / 2;
  }
  .banner {
    overflow: hidden;
    background-color: black;
    color: ${colorWhite};
    grid-column: full-start / full-end;
    grid-row: 2 / 3;
  }
  .gallery {
    grid-column: center-start /
      ${(props) => (props.toggle ? 'center-end' : 'col-end 7')};
    grid-row: 3 / ${(props) => (props.toggle ? -1 : 9)};
  }
  .info {
    grid-column: col-end 7 / center-end;
    grid-row: 3 / 5;
    padding: ${padding};
  }
  .selector {
    grid-column: col-end 7 / center-end;
    grid-row: 5 / 7;
    padding: ${padding};
  }
  .cart {
    grid-column: col-end 7 / center-end;
    grid-row: 7 / 9;
    padding: ${padding};
  }
  .slogan {
    grid-column: center-start / col-end 7;
    grid-row: 9 / -1;
    padding: ${padding};
  }
  .checkList {
    grid-column: col-end 7 / center-end;
    grid-row: 9 / -1;
    padding: ${padding};
  }
`;

export default DivStyles;
