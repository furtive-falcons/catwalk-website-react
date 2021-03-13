import React, { useState } from 'react';
import { post } from 'axios';
import { FormView } from './styles';
import SelectStars from './SelectStars';
import RadioArray from './RadioArray';
import Input from './Input';
import Button from '../../../../../components/Button';
import labels from '../../../labels';

const notes = [
  'For authentication reasons, you will not be emailed',
  'For privacy reasons, do not use your full name or email address',
];

const Form = ({ closeModal, metaData, refresh }) => {
  // handle all form inputs here
  const [form, setForm] = useState({
    rating: 0,
    size: '',
    width: '',
    length: '',
    comfort: '',
    quality: '',
    recommend: '',
    summary: '',
    body: '',
    name: '',
    email: '',
  });

  const [images, setImage] = useState([]);

  // returns an object containing characteristic Ids and the score for that id
  // from form data
  const transformCharactersitics = (formData, metaData) => {
    // use meta data from get request
    const refData = metaData.characteristics;
    const obj = {};
    // iterate the form data and find all matching keys in both form and meta data
    for (const factor in formData) {
      // if key exists then set the key to be the id and value to be the score from user input
      const metaFactor = factor[0].toUpperCase().concat(factor.slice(1));
      if (refData[metaFactor]) {
        // this line can be optimized
        obj[refData[metaFactor].id] = labels[factor].indexOf(formData[factor]) + 1;
      }
    }
    return obj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // construct the object to submit
    const recommend = form.recommend === 'true';
    const submitObj = {
      // photos: images,
      rating: form.rating,
      recommend,
      summary: form.summary,
      body: form.body,
      name: form.name,
      email: form.email,
      product_id: parseInt(metaData.product_id),
      characteristics: transformCharactersitics(form, metaData),
      photos: ['https://picsum.photos/seed/1/200/300','https://picsum.photos/seed/2/200/300'],
    };
    // submit the content through POST request and close the page upon success post
    post('reviews/post', submitObj)
      .then((result) => {
        refresh();
        closeModal();
      })
      .catch((err) => { throw err; });
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

  // get the rating from stars
  const getRating = (rating) => {
    setForm({
      ...form,
      rating,
    });
  };

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
            <SelectStars getRating={getRating} />
          </div>
          <div className="rec">
            <div className="label">
              Do you recommend this product?
            </div>
            <label className="answer">Yes</label>
            <input name="recommend" onChange={handleChange} value="true" checked={form.recommend === 'true'} type="radio" required />
            <label className="answer">No</label>
            <input name="recommend" onChange={handleChange} value="false" checked={form.recommend === 'false'} type="radio" required />
          </div>
        </div>

        <div className="overall">
          {renderRadio(labels, form)}
        </div>

        <h3>Your Comment</h3>
        <div className="comment">
          <Input placeholder="Best pants ever!" max="60" type="text" label="summary" handleChange={handleChange} />
          <div className="upload">
            <span>Upload Photo</span>
            <input onChange={uploadImg} type="file" accept="image/*" multiple />
            {images
              && <div className="imageRow">{renderImages(images)}</div>}
          </div>
          <Input placeholder="Why did you like this product" max="1000" type="textarea" label="body" handleChange={handleChange} />
        </div>

        <h3>Personal Info</h3>
        <div className="info">
          <Input placeholder="Example: jack123" note={notes[1]} max="60" type="text" label="name" handleChange={handleChange} />
          <Input placeholder="Example: abc@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" note={notes[0]} max="60" type="text" label="email" handleChange={handleChange} />
        </div>
        <div className="buttons">
          <Button className="button" size={15} secondary handleOnClick={closeModal} name="CANCEL" />
          <Button className="button" size={15} secondary name="SUBMIT REVIEW" />
        </div>
      </div>
    </FormView>
  );
};

export default Form;
