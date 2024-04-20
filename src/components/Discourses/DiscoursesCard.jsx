import React from 'react';
import './DiscoursesCard.css';

export const DiscoursesCard = ({title,imageUrl,body}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
          <img src={imageUrl} alt="Discourses"/>
        </div>
        <div className='card-content'>
            <div className='card-title'>
              <h1>{title}</h1>
            </div>
            <div className='card-body'>
              <p>{body}</p>
            </div>
        </div>
        <div className='btn'>
            <button>Buy Discourse</button>
        </div>
       
    </div>
  )
}
