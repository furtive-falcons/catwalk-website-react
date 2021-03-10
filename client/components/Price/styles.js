import styled from 'styled-components';
import { fontSizeBase } from '../../ui/ui-fonts';

export const StyledPriceWrapper = styled.span`
    margin-bottom: 1rem;
    font-size: ${fontSizeBase}rem;
    display: block;
`;

export const StyledPrice = styled.span`
    color :  ${(props) => (props.isOnSale ? 'red' : 'inherit')};
    margin-right : 1rem;
`;
