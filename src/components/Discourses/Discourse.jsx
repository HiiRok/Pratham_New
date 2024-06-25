import React, { useState, useEffect } from 'react';
// import "./Discourse.css";
// import DiscoursesCard from "./DiscourseCard";

const Discourse = () => {
  const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch('http:/localhost/api/course/course_cat') 
  //     .then(response => response.json())
  //     .then(data => setCourses(data))
  //     .catch(error => console.error('Error fetching courses:', error));
  // }, []);

  return (
    <>
      {/* <div className="title"><h1>Discourses</h1></div>
      <div className="discourse">
        {courses.map(course => (
          <DiscoursesCard 
            key={course.id} 
            title={course.title}
            imageUrl={course.imageUrl}
            body={course.body}
          />
        ))}
      </div> */}
    </>
  );
};

export default Discourse;
