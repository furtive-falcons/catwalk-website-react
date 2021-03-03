import { createGlobalStyle } from 'styled-components';
import { colorGreyLight2 } from './ui/ui-colors';
import { fontPrimary } from './ui/ui-fonts';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    body {
        font-family: ${fontPrimary};
        color: ${colorGreyLight2};
        font-weight: 400;
        line-height: 1.6;
    }
`;

export default GlobalStyles;
