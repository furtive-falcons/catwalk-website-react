import { createGlobalStyle } from 'styled-components';
import { fontPrimary, fontSizeBase } from './ui/ui-fonts';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        font-size: ${fontSizeBase}rem;
        font-family: ${fontPrimary};
        font-weight: 300;
        line-height: 1.6;
    }
`;

export default GlobalStyles;
