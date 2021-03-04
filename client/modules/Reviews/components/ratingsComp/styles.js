import styled from 'styled-components'

const ScoreDiv = styled.div`
  width: 85%;
  flex: 1.5;
  border: 1px solid black;
  display: flex;
  align-items: center;

  .innerContainer {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    width: 75%;
  }

  .stars {
    margin-left: 8px;
    border: 1px solid black;
    padding-top: 6px;

  }

  h1 {
    font-size: 35px;
  }
`
const BarDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 10px;
  width: 85%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;

  .dark {
    flex: ${props=>props.rating};
    background-color: black;
  }

  .light {
    flex: ${props=>props.total};
  }
`;

const FilterDiv = styled.div`
  width: 85%;
  flex: 3;
  border: 1px solid black;
`

const BreakdownDiv = styled.div`
  width: 85%;
  flex: 3;
  border: 1px solid black;
`;

const FactorDiv = styled.div`
  margin-top: 5px;

  .bar {
    width: 250px;
    height: 10px;
    border: 1px solid black;
  }

  .mark {
    margin-left: ${props=>props.margin-10}px;
  }

`;


export {FactorDiv, BarDiv, ScoreDiv,FilterDiv, BreakdownDiv};