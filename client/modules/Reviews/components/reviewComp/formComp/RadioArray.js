import React from 'react';
import { Radio } from './styles';

const RadioArray = ({
  labelList, checked, onChange, name,
}) => (
  <Radio>
    {
      labelList
        && labelList.map((label, index) => (
          <div key={label} className="container">
            <input className="radio" value={label} onChange={onChange} checked={checked === label} type="radio" name={name} required />
            <div>{index % 2 === 0 ? label : <br />}</div>
          </div>
        ))
      }
  </Radio>
);

export default RadioArray;
