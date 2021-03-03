import styled from 'styled-components';
import { colorWhite } from '../../../../ui/ui-colors';
import { fontSizeLarge } from '../../../../ui/ui-fonts';

export const SearchStyles = styled.input`
  background-color: transparent;
  border-bottom: 1.5px solid white;
  border: none;
  caret-color: ${colorWhite};
  color: ${colorWhite};
  outline: none;
`;

export const SearchWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 1.6rem;
`;

export const StyledIcon = styled.i`
  color: ${colorWhite};
  font-size: ${fontSizeLarge}rem;
`;
