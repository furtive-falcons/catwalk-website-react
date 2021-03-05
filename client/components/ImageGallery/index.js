import { arrayOf, shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import DivStyles from './styles';

const list = [
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello1',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello2',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello3',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello4',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello5',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello6',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello7',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello8',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello9',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello10',
  },
  {
    id: Math.random(),
    src:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    alt: 'Hello11',
  },
];

const imageGallery = ({ photos }) => (
  /* Maybe make it a section */
  <DivStyles className="gallery-carousel">
    {/* Button left */}
    <div className="gallery-carousel__btn gallery-carousel__btn--left">
      <Button icon="arrow-left" />
    </div>
    {/* Image Container */}
    <div className="gallery-carousel__img-container">
      <ul className="gallery-carousel__img-container--list">
        {photos
          && photos.map(({ url} ,index) => (
            <li
              key={index}
              className="gallery-carousel__img-container--list__item"
            >
              <img src={url}  />
            </li>
          ))}
      </ul>
    </div>
    {/* Button Right */}
    <div className="gallery-carousel__btn gallery-carousel__btn--right">
      <Button icon="arrow-right" />
    </div>
    {/* Carousel Nav */}
    <div className="gallery-carousel__nav">
      {photos
        && photos.map(({ thumbnail_url } , index) => (
          <Button className="gallery-carousel__nav--btn" key={index} />
        ))}
    </div>
    <div className="gallery-carousel__expand">
      <Button icon="expand" />
    </div>
  </DivStyles>
);

imageGallery.propTypes = {
  photos: arrayOf(shape({ url: string, thumbnail_url: string })),
};

imageGallery.defaultProps = {
  photos: null,
};

export default imageGallery;
