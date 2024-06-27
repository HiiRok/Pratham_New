import React, { useState, useEffect } from 'react';
import "./Discourse.css";
import DiscoursesCard from "./DiscoursesCard";
import isTokenExpired from "../middlewares/isTokenExpired";


const Discourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {

    const tokenKey ="prasthan_yatna_jwt"

    if(!isTokenExpired(tokenKey)){
  
    const token = localStorage.getItem(tokenKey)
  
    fetch('http://localhost:3001/api/course/courses',{
			method: 'GET',
			headers:  {
				Accept:`application/json`,
				Authorization:`Bearer ` + token,
			}, 
    }) 
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    }else {
    alert("Please Login or Register")
    navigate('/login');
    }


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
