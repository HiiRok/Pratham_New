import React from 'react';
import './DiscoursesCard.css';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config';

const DiscoursesCard = ({ courseId, title, imageUrl, body }) => {
  const navigate = useNavigate();

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  // Truncate body text to fit within the card (approximately 50 words)
  const truncatedBody = truncateText(body, 20);
  const truncatedTitle = truncateText(title, 3);

  const handleViewDiscourse = () => {
    navigate(`/discourses/${courseId}`);
  };

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={`${API_BASE_URL}/${imageUrl}`} alt="Discourses" />
      </div>
      <div className='card-content'>
        <div className='card-title'>
          <h2>{truncatedTitle}</h2>
        </div>
        <div className='card-body'>
          <p>{truncatedBody}</p>
        </div>
      </div>
      <div className='btn-container'>
        <button onClick={handleViewDiscourse}>View Discourse</button>
      </div>
    </div>
  );
};

export default DiscoursesCard;
