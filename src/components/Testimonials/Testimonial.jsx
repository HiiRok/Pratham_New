// Testimonial.js
import React from 'react';
import testimonialStyles from './Testimonial.module.css';

const Testimonial = ({ testimonial }) => {
  return (
    <div className={testimonialStyles.card}>
      <img src={testimonial.avatar} alt={testimonial.name} className={testimonialStyles.avatar} />
      <h3 className={testimonialStyles.name}>{testimonial.name}</h3>
      <p className={testimonialStyles.message}>{testimonial.message}</p>
    </div>
  );
};

export default Testimonial;
