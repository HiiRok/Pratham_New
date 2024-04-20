import React, { useState, useEffect } from "react";
import playercss from "./Player.module.css";
import PlayerCourse from "./PlayerCourse";
import LoadingSpinner from "./LoadingSpinner";

const Player = () => {
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
        "duration": 12,
        "videoUrl": "https://example.com/videos/intro-to-react.mp4"
      },
      {
        "id": 2,
        "title": "React Components",
        "duration": 18,
        "videoUrl": "https://example.com/videos/react-components.mp4"
      },
      {
        "id": 3,
        "title": "React State Management",
        "duration": 25,
        "videoUrl": "https://example.com/videos/react-state-management.mp4"
      },
      {
        "id": 4,
        "title": "React Hooks",
        "duration": 30,
        "videoUrl": "https://example.com/videos/react-hooks.mp4"
      },
      {
        "id": 5,
        "title": "React Router",
        "duration": 20,
        "videoUrl": "https://example.com/videos/react-router.mp4"
      },
      {
        "id": 6,
        "title": "React and Redux",
        "duration": 35,
        "videoUrl": "https://example.com/videos/react-redux.mp4"
      },
      {
        "id": 7,
        "title": "React Testing",
        "duration": 25,
        "videoUrl": "https://example.com/videos/react-testing.mp4"
      },
      {
        "id": 8,
        "title": "React Performance",
        "duration": 18,
        "videoUrl": "https://example.com/videos/react-performance.mp4"
      }
    ])
  }, []);

  return (
    <div className={playercss.player}>
      <div>
        <iframe
          src={videos[currentVideoIndex]?.videoUrl || ""}
          width="100%"
          height="380"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </div>
      <div>
        <h2 className={playercss.player_course_heading} style={{ marginBottom: "1rem" }}>
          Course Content
        </h2>
        <div>
          {videos.map((video, index) => (
            <PlayerCourse
              key={index}
              videoTitle={video.title}
              videoDuration={video.duration}
              setVideo={() => {
                setCurrentVideoIndex(index);
                setIsPlaying(true);
              }}
              videoLink={video.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
