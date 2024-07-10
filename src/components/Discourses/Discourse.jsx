import React, { useState, useEffect } from 'react';
import styles from './Discourse.module.css';
import DiscoursesCard from './DiscoursesCard';
import isTokenExpired from '../middlewares/isTokenExpired';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Discourse = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const tokenKey = 'prasthan_yatna_jwt';

    if (!isTokenExpired(tokenKey)) {
      const token = localStorage.getItem(tokenKey);

      fetch('https://backend-deploy-0ll5.onrender.com/api/course/courses', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => response.json())
        .then(data => {
          const doubledData = [...data, ...data];
          setCourses(doubledData);
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
          
        });
    } else {
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
      {loading && (
        <div className={styles.loaderContainer}>
          <ClipLoader color="#4fa94d" loading={loading} css={override} size={100} />
        </div>
      )}
      <div className={styles.discourse}>
        {!loading && filteredCourses.map(course => (
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
