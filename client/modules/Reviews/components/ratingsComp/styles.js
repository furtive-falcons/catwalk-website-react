import styled from 'styled-components';
import { colorPrimary, colorSecondary } from '../../../../ui/ui-colors';
import {fadeIn} from '../animationStyles.js'

const RecDiv = styled.div`
font-size: 1.5rem;
span {
  font-size: 4rem;
  font-weight: 800;
}
`;

const ScoreDiv = styled.div`
  width: 77%;
  flex: 1.5;
  display: flex;
  margin-bottom: 2%;
  margin-top: 2%;

  span {
    font-weight: bold;
  }

  .innerContainer {
    width: 100%;
    padding: 3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colorPrimary}
  }

  .stars {
    margin-left: 8px;
    padding-top: 6px;

  }

  h1 {
    font-size: 4rem;

  }

  .total {
    margin-top: 5px;
    font-size: 1.5rem;
  }


`;
const BarDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 10px;
  width: 70%;
  display: flex;
  flex-direction: row;

  .dark {
    flex: ${(props) => props.rating};
    background-color: ${colorPrimary};
  }

  .light {
    flex: ${(props) => props.total};
    background-color: ${colorSecondary};
  }
`;

const FilterDiv = styled.div`
  width: 85%;
  flex: 3;

  .clickable {
    text-decoration: underline;
    margin-right: 4px;
    font-size: 15px;
  }

  .clickable: hover {
    background-color: black;
    color: white;
    cursor: pointer;
    animation: ${fadeIn} 0.5s;
  }

  .notClickable {
    margin-right: 4px;
    font-size: 15px;

  }

  .count {
    margin-left: 4px;
  }

  .barContainer {
    display: flex;
    flex-direction: row;
    align-items:center;
  }
`;

const BreakdownDiv = styled.div`
  width: 90%;
  flex: 3;
  margin-top: 10px;

  .factors {
    width: 80%;
  }
`;

const FactorDiv = styled.div`
  margin-top: 10px;

  .bar {
    width: ${(props) => props.width};
    height: 10px;
    background-color: #cbd6cc;
  }

  .labels {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-Top: 10px;
  }

  .label {
    flex: 1;
  }

  .labelTop {
    font-size: 1.5rem;
    font-weight: 700;
  }


  .mark {
    margin-left: ${(props) => props.margin - 10}px;
  }

`;

export {
  RecDiv, FactorDiv, BarDiv, ScoreDiv, FilterDiv, BreakdownDiv,
};
