import React, { useState, useEffect } from 'react';
import "./Discourse.css";
import DiscoursesCard from "./DiscoursesCard";

const Discourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/course/courses',{
			method: 'GET',
			headers:  {
				Accept:`application/json`,
				Authorization:`Bearer ` + `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjdjNWZmYmU3YjlkMDY3N2JiZTNiZjAiLCJlbWFpbCI6ImpqQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiSkoiLCJpYXQiOjE3MTk0MjcwNjcsImV4cCI6MTczNDk3OTA2N30.S3-aXIKbq3rZRGeERn34I9BASOqsh9ZJavH9zyCdIoE`,
			}, 
    }) 
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <>
       <div className="title"><h1>Discourses</h1></div>
      <div className="discourse">
        {courses.map(course => (
          <DiscoursesCard 
            key={course._id} 
            title={course.Name}
            imageUrl={course.ImgPath}
            body={course.Brief_Desc}
          />
        ))}
      </div> 
    </>
  );
};

export default Discourse;
