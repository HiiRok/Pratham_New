import React, { useState, useEffect } from "react";
import playercss from "./Player.module.css";
import PlayerCourse from "./PlayerCourse";
import VideoPlayer from "./VideoPlayer";
import axios from 'axios'; // Assuming you're using axios for API calls
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import { useNavigate, useParams } from "react-router-dom";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Player = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourseVideos = async () => {
      try {
      //   const response = await axios.get(`https://backend-deploy-0ll5.onrender.com/api/courses/${id}`, {
      //     headers: {
      //       'Authorization': `Bearer ${localStorage.getItem('prasthan_yatna_jwt')}`
      //     }
      //   });
        //setVideos(response.data.Content);
        setVideos([
          {
            id: "12",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            duration: "12"
          }
        ]);

        setCurrentVideoIndex(0);
      } catch (error) {
        console.error("Error fetching course videos:", error);
      }
    };

    fetchCourseVideos();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentVideoIndex]);

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handleVideoClick = (index) => {
    if (index < videos.length) {
      setCurrentVideoIndex(index);
    }
  };


  return (
    <div className={playercss.player}>
      {videos.length > 0 ? (
        <>
          <VideoPlayer 
            key={videos[currentVideoIndex]?.id} 
            durVal={videos[currentVideoIndex]?.duration} 
            videoUrl={videos[currentVideoIndex]?.videoUrl} 
            onNextVid={handleNextVideo} 
          />
          <div>
            <h2 className={playercss.player_course_heading} style={{ marginBottom: "1rem" }}>
              {courseName}
            </h2>
            <div>
              {videos.map((video, index) => (
                <PlayerCourse
                  key={video.id}
                  videoTitle={video.title}
                  videoDuration={video.duration}
                  setVideo={() => handleVideoClick(index)}
                  videoLink={video.videoUrl}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={playercss.loader}>
          <ClipLoader color="#4fa94d" loading={videos.length<=0} css={override} size={100} />
        </div>
      )}
    </div>
  );
};

export default Player;
