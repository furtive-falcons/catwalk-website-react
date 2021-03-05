import styled from 'styled-components';

import { colorGreyLight1 } from '../../ui/ui-colors';

const HeaderWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colorGreyLight1};
  color: ${colorGreyLight1};
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

export default HeaderWrapper;
