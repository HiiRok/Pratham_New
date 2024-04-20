import { useParams } from "react-router-dom";
import data from "../../../public/data.json";
import { useEffect } from "react";
import { useState } from "react";
import singleCourseCSS from "./SingleDiscourse.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SingleDiscourse = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    //finding the specific course detail of id given in params
    const detail = data.find((el) => el.id == id);
    setCourseDetails(detail);
  }, [courseDetails, id]);

// Dummy data for videos
const dummyVideos = [
  {
    id: 1,
    title: "Introduction to React",
    duration: "12:34",
    description: "Learn the basics of React and its core concepts.",
    instructor: "John Doe",
    thumbnailUrl: "http://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Components and JSX",
    duration: "18:27",
    description: "Dive into React components and JSX syntax.",
    instructor: "Jane Smith",
    thumbnailUrl: "http://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "State Management",
    duration: "25:41",
    description: "Understand how to manage state in React applications.",
    instructor: "Bob Johnson",
    thumbnailUrl: "http://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "State Management",
    duration: "25:41",
    description: "Understand how to manage state in React applications.",
    instructor: "Bob Johnson",
    thumbnailUrl: "http://via.placeholder.com/150",
  },
];
  
  return (
    <div className={singleCourseCSS.singleDiscourse}>
      <div className={singleCourseCSS.header}>
        <img src={courseDetails.image} alt="" />
        <div className={singleCourseCSS.headerContent}>
          <h1> hi this is the first</h1>
          <div className={singleCourseCSS.details}>
            <p>
              <span className={singleCourseCSS.label}>Lectures:</span> 23
            </p>
            <p>
              <span className={singleCourseCSS.label}>Duration:</span> 20 hours
            </p>
  
          </div>
          <Button 
        variant="contained" 
        sx={{ 
          width: "13rem", 
          height: "3rem", 
          transition: "0.3s", 
          backgroundColor: "orange",
          fontWeight:"bolder",
          fontSize: "1.1rem",
          marginTop:"20px",
          marginLeft:"130px",
          '&:hover': {
            backgroundColor: "darkorange" // Change background color on hover
          }
        }} 
        className="home_button" 
        onClick={() => { navigate("/discourses/video") }}
      >
        Start Discourse
      </Button>
        </div>
      </div>
      <div className={singleCourseCSS.content}>
      <h3>Description :</h3>
        <div className={singleCourseCSS.description}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt est
            tempore delectus illum modi exercitationem? Nesciunt vel rem voluptatum
            earum laborum, minima dolorum cumque! Enim officia necessitatibus sit
            ex hic nisi, illo deleniti ratione facere, eveniet ducimus, magni
            di
          </p>
        </div>
        <div className={singleCourseCSS.videoList}>
      <h3>Course Videos</h3>
      <div className={singleCourseCSS.videoCards}>
        {dummyVideos.map((video) => (
          <div key={video.id} className={singleCourseCSS.videoCard}>
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className={singleCourseCSS.videoThumbnail}
            />
            <div className={singleCourseCSS.videoDetails}>
              <h4 className={singleCourseCSS.videoTitle}>{video.title}</h4>
              <p className={singleCourseCSS.videoDescription}>
                {video.description}
              </p>
              <div className={singleCourseCSS.videoMeta}>
                <span className={singleCourseCSS.videoDuration}>
                  {video.duration}
                </span>
                <span className={singleCourseCSS.videoInstructor}>
                  {video.instructor}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className={singleCourseCSS.buttonContainer}>
          <Button variant="contained" color="primary" onClick={() => { navigate("/discourses/video"); }}>
            Start Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleDiscourse;
