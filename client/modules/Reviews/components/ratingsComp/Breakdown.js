import React from 'react';
import { BreakdownDiv } from './styles.js';
import Factor from './Factor.js';

const Breakdown = ({data}) => {
  const renderFactors =(data)=>{
    const rendered = [];
    for (let factor in data) {
      rendered.push(<Factor key={factor} label={factor} rating={data[factor].value}/>);
    }
    return rendered;
  };

  return (
  <BreakdownDiv id="breakdown">
    {renderFactors(data)}
  </BreakdownDiv>
  )
};

export default Breakdown;
