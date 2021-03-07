import React, { useState } from 'react';
import { FormView } from './styles.js';
import SelectStars from './SelectStars.js';
import RadioArray from './RadioArray.js';
import Input from './Input.js';

const notes = [
  'For authentication reasons, you will not be emailed',
  'For privacy reasons, do not use your full name or email address'
]

const labels = {
  size: ['Too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'Too big'],
  width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  quality: ['Poor', 'Below Average', 'Expected', 'Pretty great', 'Perfect'],
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
    Email: '',
  });

  const [images, setImage] = useState([]);
  const [checked, setChecked] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  // submit the content through POST request
  // close the page
  };

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const uploadImg = (e) => {
    if (images.length < 5) {
      const array = [...images];
      array.push(URL.createObjectURL(e.target.files[0]));
      setImage(array);
      console.log(array);
    }
  };

  const renderImages = (data) => data.map((img, index) => <img key={index} alt="uploaded pic" className="img" src={img} />);

  // map out all radio components
  const renderRadio = (data, form) => Object.keys(data).map((label, index) => (
    <div key={index} className={label}>
      <span>{label[0].toUpperCase().concat(label.slice(1))}</span>
      <div>{form[label] ? <span className="selected">{form[label]}</span> : <span className="message">Please select</span>}</div>
      <RadioArray
        onChange={handleChange}
        checked={form[label]}
        labelList={data[label]}
        name={label}
      />
    </div>
  ));

  return (
    <FormView onSubmit={handleSubmit}>
      <div className="inner">
        <div className="top">
          <h2 className="title">Write Your Review</h2>
          <h3 className="about">About Your Product</h3>
        </div>

        <div className="ratingAndRec">
          <div className="rating">
            <span>Your Overall Rating</span>
            <SelectStars />
          </div>
          <div className="rec">
            <div className="label">
              Do you recommend this product?
            </div>
            <label className='answer'>Yes</label>
            <input name="recommend" onChange={handleChange} value="Yes" checked={form.recommend === 'Yes'} type="radio" />
            <label className='answer'>No</label>
            <input name="recommend" onChange={handleChange} value="No" checked={form.recommend === 'No'} type="radio" />
          </div>
        </div>

        <div className="overall">
          {renderRadio(labels, form)}
        </div>

        <h3>Your Comment</h3>
        <div className="comment">
          <Input max="60" type="text" label="Summary" handleChange={handleChange} />
          <div className="upload">
            <span>Upload Photo</span>
            <input onChange={uploadImg} type="file" accept="image/*" multiple />
            {images
              && renderImages(images)}
          </div>
          <Input max="1000" type="textarea" label="Body" handleChange={handleChange} />
        </div>

        <h3>Personal Info</h3>
        <div className="info">
          <Input note={notes[1]} max="60" type="text" label="Nickname" handleChange={handleChange} />
          <Input note={notes[0]} max="60" type="text" label="Email" handleChange={handleChange} />
        </div>
        <input className="submit" type="submit" name="Submit Review" />
      </div>
    </FormView>
  );
};

export default Form;
