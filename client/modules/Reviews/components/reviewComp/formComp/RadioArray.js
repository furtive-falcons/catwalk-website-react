import React from 'react';
import { Radio } from './styles.js';

const RadioArray = ({ labelList, checked, onChange,name }) => (
  <Radio>
    {
      labelList
        && labelList.map((label, index) => (
         <div key={index} className='container'>
          <input className='radio' value={label} onChange={onChange} checked={checked === label} type="radio" name={name} />
          <div>{index % 2 === 0 ?label: <br/>}</div>
          </div>
        ))
      }
  </Radio>
);

export default RadioArray;
