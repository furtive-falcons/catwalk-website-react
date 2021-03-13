import styled from 'styled-components';
import { colorGreyLight2, colorPrimary } from '../../ui/ui-colors/index';

export const Container = styled.div`
  font-size: 1rem;
  display: grid;
  margin: 5rem auto;
  grid-template-columns: 2rem repeat(6, 1fr) 2rem;
  grid-template-rows: 1fr 1fr auto 1fr;
  grid-gap: .5rem;
  max-width: 1440px;

  .entry-container {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 9;
    max-height: 100vh;
    overflow: auto;
    padding: 2rem;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  }

  #title {
    grid-column: 2 / 8;
    grid-row: 1 / 2;
    font-size: 2rem;
  }

  #search{
    grid-column: 2 / 8;
    grid-row: 2 / 3;
  }

  .more-questions {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    align-self: center;
  }

  .add-question {
    display: flex;
    grid-column: 3 / 4;
    grid-row: 4 / 5;
    justify-content: center;
    align-self: center;
  }
`;
export const StyledSearch = styled.input`
  border: 1px solid #c4c4c4;
  font-size: 1.2rem;
  padding: 1.4rem 1rem;
  color: ${colorGreyLight2};
  border-radius: 8px;
  :focus {
    outline-color: ${colorPrimary}
  }
`;

export const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize};
  color: ${colorGreyLight2};
  font-weight: 700;
  margin-left: 2rem;
`;
