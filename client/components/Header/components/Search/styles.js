import styled from 'styled-components';
import { colorWhite } from '../../../../ui/ui-colors';
import { fontSizeLarge } from '../../../../ui/ui-fonts';

export const SearchStyles = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid white;
  outline: none;
  color: ${colorWhite};
  caret-color: ${colorWhite};
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-end;
`;

export const StyledIcon = styled.i`
  font-size: ${fontSizeLarge}rem;
  color: ${colorWhite};
`;
