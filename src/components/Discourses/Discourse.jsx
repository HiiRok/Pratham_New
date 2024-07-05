import React, { useState, useEffect } from 'react';
import styles from './Discourse.module.css'; // Import CSS module
import DiscoursesCard from './DiscoursesCard';
import isTokenExpired from '../middlewares/isTokenExpired';
import { useNavigate } from 'react-router-dom';

const Discourse = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const tokenKey = 'prasthan_yatna_jwt';

    if (!isTokenExpired(tokenKey)) {
      const token = localStorage.getItem(tokenKey);

      fetch('http://localhost:3001/api/course/courses', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    } else {
      alert('Please Login or Register');
      navigate('/login');
    }
  }, [navigate]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.discourse}>
        {filteredCourses.map(course => (
          <DiscoursesCard
            key={course._id}
            courseId={course._id}
            title={course.Name}
            imageUrl={course.ImgPath}
            body={course.Brief_Desc}
            className={styles.discourseCard}
          />
        ))}
      </div>
    </>
  );
};

export default Discourse;
