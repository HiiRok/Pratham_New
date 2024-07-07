import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import singleCourseCSS from "./SingleDiscourse.module.css";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SingleDiscourse = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [hasBoughtCourse, setHasBoughtCourse] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://backend-deploy-0ll5.onrender.com/api/courses/${id}`
        );
        setCourseDetails(response.data);
        setLoading(false); // Set loading to false after data fetch
      } catch (error) {
        console.error("Error fetching course details:", error);
        setLoading(false); // Ensure loading is set to false on error
      }
    };

    fetchCourseDetails();
  }, [id]);

  useEffect(() => {
    const checkCoursePurchase = async () => {
      try {
        const response = await axios.get(
          `https://backend-deploy-0ll5.onrender.com/api/checkCoursePurchase/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "prasthan_yatna_jwt"
              )}`,
            },
          }
        );
        setHasBoughtCourse(response.data.hasBought);
      } catch (error) {
        console.error("Error checking course purchase:", error);
      }
    };

    checkCoursePurchase();
  }, [id]);

  if (loading) {
    return (
      <div className={singleCourseCSS.loaderContainer}>
        <ClipLoader color="#4fa94d" loading={loading} css={override} size={100} />
      </div>
    );
  }

  return (
    <div className={singleCourseCSS.singleDiscourse}>
      <div className={singleCourseCSS.header}>
        <img
          src={courseDetails.image}
          alt={courseDetails.title}
          className={singleCourseCSS.headerImage}
        />
        <div className={singleCourseCSS.headerContent}>
          <h1>{courseDetails.title}</h1>
          <div className={singleCourseCSS.details}>
            <p>
              <span className={singleCourseCSS.label}>Lectures:</span>{" "}
              {courseDetails.lectures}
            </p>
            <p>
              <span className={singleCourseCSS.label}>Duration:</span>{" "}
              {courseDetails.duration}
            </p>
          </div>
          <Button
            variant="contained"
            sx={{
              width: "13rem",
              height: "3rem",
              transition: "0.3s",
              backgroundColor: "orange",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "darkorange",
              },
            }}
            onClick={() => {
              if (hasBoughtCourse) {
                navigate(`/discourses/${id}/videos`);
              } else {
                navigate(`/buy-course/${id}`);
              }
            }}
          >
            {hasBoughtCourse ? "Start Discourse" : "Buy Course"}
          </Button>
        </div>
      </div>
      <div className={singleCourseCSS.content}>
        <h3>Description:</h3>
        <div className={singleCourseCSS.description}>
          <p>{courseDetails.description}</p>
        </div>
        <div className={singleCourseCSS.videoList}>
          <h3>Course Videos</h3>
          <div className={singleCourseCSS.videoCards}>
            {courseDetails.videos.map((video) => (
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
        {!hasBoughtCourse && (
          <div className={singleCourseCSS.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                navigate(`/buy-course/${id}`);
              }}
            >
              Buy Course
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleDiscourse;
