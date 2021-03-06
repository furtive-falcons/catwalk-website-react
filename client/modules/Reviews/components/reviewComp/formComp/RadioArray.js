import React from 'react';
import { Radio } from './styles.js';

const RadioArray = ({ labelList, checked, onChange,name }) => (
  <Radio>
    {
      labelList
        && labelList.map((label, index) => (
         <div key={index} className='container'>
           <div>{index % 2 === 0 ? label: <br/>}</div>
          <input value={label} onChange={onChange} checked={checked === label} type="radio" name={name} />
          </div>
        ))
      }
  </Radio>
);

export default RadioArray;
