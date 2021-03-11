import styled from 'styled-components';
import { colorWhite, colorBlack } from '../../ui/ui-colors';

export const AddToBagWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export const HeartStyles = styled.div`
  button {
    background-color: ${colorWhite};
    color: ${colorBlack};
    border: 1px solid ${colorBlack};
    outline: none;
  }
`;
