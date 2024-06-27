import React, { useState, useEffect } from "react";
import playercss from "./Player.module.css";
import PlayerCourse from "./PlayerCourse";
import VideoPlayer from "./VideoPlayer";
import axios from 'axios'; // Assuming you're using axios for API calls

const Player = ({ courseName }) => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const fetchCourseVideos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/courses/${courseName}/videos`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('prasthan_yatna_jwt')}`
          }
        });
        setVideos(response.data);
        setCurrentVideoIndex(0);
      } catch (error) {
        console.error("Error fetching course videos:", error);
      }
    };

    fetchCourseVideos();
  }, [courseName]);

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
        <div className={playercss.loading}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Player;
