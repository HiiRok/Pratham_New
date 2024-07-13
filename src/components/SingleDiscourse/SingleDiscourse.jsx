import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import singleCourseCSS from "./SingleDiscourse.module.css";
import { API_BASE_URL } from "../../config";

import SharingButton from "../Video/Sharing";

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SingleDiscourse = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [hasBoughtCourse, setHasBoughtCourse] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const tokenKey = 'prasthan_yatna_jwt';
    const token = localStorage.getItem(tokenKey);


    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/course/${id}`,{
          headers: {
            'Authorization': 'Bearer ' + token
          }
      });
        setCourseDetails(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching course details:", error);
        setLoading(false); 
      }
    };

    fetchCourseDetails();
  }, [id]);

  useEffect(() => {
    const checkCoursePurchase = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/checkCoursePurchase/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "prasthan_yatna_jwt"
              )}`,
            },
          }
        );
        setHasBoughtCourse(!response.data.hasBought);
        
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
    courseDetails ? (
      <div className={singleCourseCSS.singleDiscourse}>
        <div className={singleCourseCSS.header}>
          <img
            src={`${API_BASE_URL}/${courseDetails.ImgPath}`}
            alt={courseDetails.Name}
            className={singleCourseCSS.headerImage}
          />
          <div className={singleCourseCSS.headerContent}>
            <h1>{courseDetails.Name}</h1>
            <div className={singleCourseCSS.details}>
              <p>
                <span className={singleCourseCSS.label}>Author:</span>{" "}
                {courseDetails.Author}
              </p>
              <p>
                <span className={singleCourseCSS.label}>Duration:</span>{" "}
                {courseDetails.duration}
              </p>
              {!hasBoughtCourse && (              <p>
                <span className={singleCourseCSS.label}>Price:</span>{" "}
                {courseDetails.Price} rupees only/-
              </p>)}
            </div>
            <Button
              variant="contained"
              sx={{
                width: "7rem",
                height: "2rem",
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
              {hasBoughtCourse ? "Start" : "Buy"}
            </Button>
          </div>
        </div>
        <div className={singleCourseCSS.content}>
          <h3>Description:</h3>
          <div className={singleCourseCSS.description}>
            <p>{courseDetails.Brief_Desc}</p>
          </div>
          <div className={singleCourseCSS.videoList}>
            <h3>Discourse Video List:</h3>
            <div className={singleCourseCSS.videoCards}>
              {courseDetails.Content.map((video) => (
                <div key={video.id} className={singleCourseCSS.videoCard}>
                  <img
                    src={`${API_BASE_URL}/${courseDetails.ImgPath}`}
                    alt={video.title}
                    className={singleCourseCSS.videoThumbnail}
                  />
                  <div className={singleCourseCSS.videoDetails}>
                    <h4 className={singleCourseCSS.videoTitle}>{video.title}</h4>
                    <div className={singleCourseCSS.videoMeta}>
                      <span className={singleCourseCSS.videoDuration}>
                        {video.duration}
                      </span>
                      <span className={singleCourseCSS.videoInstructor}>
                        {courseDetails.Author}
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
        <div className={singleCourseCSS.sharingButtonsContainer}>
          <SharingButton url={window.location.href} title={courseDetails.Name} />
        </div>
      </div>
    ):(<h3 className={singleCourseCSS.loaderContainer}>Something went wrong...</h3>)

  );
};

export default SingleDiscourse;
