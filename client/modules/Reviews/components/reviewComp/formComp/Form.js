import React, {useState} from 'react';
import { FormView } from './styles.js';
import SelectStars from './SelectStars.js';
import RadioArray from './RadioArray.js';
import Input from './Input.js';

const labels = {
  size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'],
  width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  quality: ['Poor', 'Below Average', 'What I expected', 'Pretty great', 'Perfect'],
  length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],

};


const Form = () => {

  // handle all form inputs here
const [form, setForm] = useState({
  size: '',
  width: '',
  comfort: '',
  quality: '',
  recommend: '',
  Summary: '',
  Body: '',
  Nickname: '',
  Email: ''

});

const handleChange =(e)=>{
  const name = e.target.name;
  const value = e.target.value;
  console.log(name)
  setForm({
    ...form,
    [name]: value
  });
  console.log(form)
};

  return (
    <FormView>
      <div className='inner'>
        <h2 className='title'>Write Your Review</h2>
        <h3 className='about'>About Your Product</h3>
        <div className='rating'>
          Please Select
          <SelectStars/>
        </div>
        <div className='rec'>
          Do you recommend this product?
          <label>Yes</label>
          <input name='recommend' onChange={handleChange} value='Yes' checked={'Yes'===form.recommend} type='radio'/>
          <label>No</label>
          <input name='recommend' onChange={handleChange} value='No' checked={'No'===form.recommend}type='radio'/>
        </div>

        <div className='overall'>
          <div className='size'>
            Size
            <RadioArray onChange={handleChange} checked={form.size} labelList={labels.size} name={'size'}/>
          </div>
          <div className='width'>
            Width
            <RadioArray onChange={handleChange} checked={form.width} labelList={labels.size} name={'width'}/>
          </div>
          <div className='quality'>
            Quality
            <RadioArray onChange={handleChange} checked={form.quality} labelList={labels.size} name={'quality'}/>
          </div>
          <div>
            Quality
            <RadioArray onChange={handleChange} checked={form.comfort} labelList={labels.size} name={'comfort'}/>
          </div>
          <div className='length'>
            Length
            <RadioArray onChange={handleChange} checked={form.length} labelList={labels.size} name={'length'}/>
          </div>
          <div className='fit'>
            Fit
            <RadioArray onChange={handleChange} checked={form.fit} labelList={labels.size} name={'fit'}/>
          </div>
        </div>

        <div className='comment'>
          <Input type='text' label='Summary' handleChange={handleChange}/>
          <Input type='textarea' label='Body' handleChange={handleChange}/>
        </div>

        <div className='info'>
          <Input type='text' label='Nickname' handleChange={handleChange}/>
          <Input type='text' label='Email' handleChange={handleChange}/>
        </div>
        <input type='submit' name='Submit Review'/>
      </div>
    </FormView>
  )
};

export default Form;
