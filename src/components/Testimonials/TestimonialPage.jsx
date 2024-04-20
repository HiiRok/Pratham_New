// TestimonialPage.js
import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import testimonialPageStyles from './TestimonialPage.module.css';

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  const dummyTestimonials = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/150',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://via.placeholder.com/150',
      message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/150',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/150',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/150',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/150',
        message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      
    // Add more dummy testimonials as needed
  ];

  useEffect(() => {
    // Fetch testimonials data from an API or define it locally
    // Example:
    // const fetchTestimonials = async () => {
    //   try {
    //     const response = await fetch('https://api.example.com/testimonials');
    //     const data = await response.json();
    //     setTestimonials(data);
    //   } catch (error) {
    //     console.error('Error fetching testimonials:', error);
    //   }
    // };

    // fetchTestimonials();
    setTestimonials(dummyTestimonials)
  }, []);

  return (
    <div className={testimonialPageStyles.container}>
      <h2 className={testimonialPageStyles.heading}>Testimonials</h2>
      <div className={testimonialPageStyles.testimonials}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
