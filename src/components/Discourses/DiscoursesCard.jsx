import React from 'react';
import './DiscoursesCard.css';
import { useNavigate } from 'react-router-dom';

const DiscoursesCard = ({ courseId, title, imageUrl, body }) => {
  const navigate = useNavigate();

  const handleViewDiscourse = () => {

    console.log("handling view discourse")

    navigate(`/discourse/${courseId}`);
  };

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={`http://localhost:3001/${imageUrl}`} alt="Discourses" />
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
        <button onClick={handleViewDiscourse}>View Discourse</button>
      </div>
    </div>
  );
};

export default DiscoursesCard;
