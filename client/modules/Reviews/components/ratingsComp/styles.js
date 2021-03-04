import styled from 'styled-components'

const ScoreDiv = styled.div`
  width: 85%;
  flex: 1.5;
  // border: 1px solid black;
  display: flex;
  align-items: center;

  .innerContainer {
    // border: 1px solid black;
    display: flex;
    flex-direction: row;
    width: 75%;
    justify-content: center;
  }

  .stars {
    margin-left: 8px;
    // border: 1px solid black;
    padding-top: 6px;

  }

  h1 {
    font-size: 40px;
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
    background-color: grey;
  }

  .light {
    flex: ${props=>props.total};
    background-color: white;
  }
`;

const FilterDiv = styled.div`
  width: 85%;
  flex: 3;
  // border: 1px solid black;

  span:hover {
    cursor: pointer;
  }

  span {
    text-decoration: underline;
    margin-right: 4px;
  }

  .barContainer {
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
  }
`

const BreakdownDiv = styled.div`
  width: 85%;
  flex: 3;
  border: 1px solid black;
`;


export {BarDiv, ScoreDiv,FilterDiv, BreakdownDiv};