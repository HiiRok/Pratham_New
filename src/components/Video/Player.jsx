import React, { useState, useEffect } from "react";
import playercss from "./Player.module.css";
import PlayerCourse from "./PlayerCourse";
import LoadingSpinner from "./LoadingSpinner";
import VideoPlayer from "./VideoPlayer";

const Player = ( {courseName}) => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // fetch("https://api/course/courseOne", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: "93792374974",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setVideos(data);
    //     setCurrentVideoIndex(0);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    setVideos([
      {
        "id": 1,
        "title": "Introduction to React",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 2,
        "title": "React Components",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      },
      {
        "id": 3,
        "title": "React State Management",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 4,
        "title": "React Hooks",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 5,
        "title": "React Router",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 6,
        "title": "React and Redux",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 7,
        "title": "React Testing",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        "id": 8,
        "title": "React Performance",
        "duration": 744,
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      }
    ])
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentVideoIndex,setCurrentVideoIndex]);

  function handleNextVideo(){
    if(currentVideoIndex < videos.length - 1){
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  }

  function handleVideoClick(index){
    if(index < videos.length){
      setCurrentVideoIndex(index);
    }
  }

  return (
    <div className={playercss.player}>
      <VideoPlayer key={videos[currentVideoIndex]?.id} durVal={videos[currentVideoIndex]?.duration} videoUrl={videos[currentVideoIndex]?.videoUrl} onNextVid={handleNextVideo} />
      <div>
        <h2 className={playercss.player_course_heading} style={{ marginBottom: "1rem" }}>
          {courseName}
        </h2>
        <div>
          {videos.map((video, index) => (
            <PlayerCourse
              key={index}
              videoTitle={video.title}
              videoDuration={video.duration}
              setVideo={() => handleVideoClick(index)}
              videoLink={video.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
