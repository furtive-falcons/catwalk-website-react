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
const FilterDiv = styled.div`
  width: 85%;
  flex: 3;
  border: 1px solid black;
`

const BreakdownDiv = styled.div`
  width: 85%;
  flex: 3;
  border: 1px solid black;
`

export {ScoreDiv,FilterDiv, BreakdownDiv};