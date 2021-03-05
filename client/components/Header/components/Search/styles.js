import styled from 'styled-components';
import { colorGreyLight1 } from '../../../../ui/ui-colors';
import { fontSizeLarge } from '../../../../ui/ui-fonts';

export const SearchStyles = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid ${colorGreyLight1};
  caret-color: ${colorGreyLight1};
  color: ${colorGreyLight1};
  outline: none;
`;

export const SearchWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 1.6rem;
`;

export const StyledIcon = styled.i`
  color: ${colorGreyLight1};
  font-size: ${fontSizeLarge}rem;
`;
