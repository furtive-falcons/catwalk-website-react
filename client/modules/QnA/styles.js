/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import styled from 'styled-components';
import { colorGreyLight2 } from '../../ui/ui-colors/index.js';

export const Container = styled.div`
  font-size: 1rem;
  display: grid;
  margin: 5rem auto;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr auto 1fr;
  grid-gap: .5rem;
  max-width: 1400px;

  .entry-container {
    display: flex;
    flex-direction: column;
    grid-column: span 6;
    max-height: 100vh;
    overflow: auto;
    margin-top: 2rem;
  }

  .title {
    grid-column: span 6;
    grid-row: 1 / 2;
  }

  .search{
    grid-column: span 6;
    grid-row: 2 / 3;
  }

  .more-questions {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    align-self: center;
  }

  .add-question {
    display: flex;
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    justify-content: center;
    align-self: center;
  }
`;
export const StyledSearch = styled.input`
  border: 1px solid ${colorGreyLight2};
  font-size: 1.2rem;
  padding: 1.4rem 1rem;
  color: ${colorGreyLight2};
`;

export const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize};
  color: ${colorGreyLight2};
  font-weight: 700;
`;
