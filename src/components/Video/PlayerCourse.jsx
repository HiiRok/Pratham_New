import styles from "./Player.module.css"
function PlayerCourse({ setVideo, videoLink, videoTitle, videoDuration }) {
  return (
    <div
      className={styles.player_course_content}
      onClick={() => {
        setVideo(videoLink);
      }}
    >
      <h3>{videoTitle}</h3>
      <p>{videoDuration} mins</p>
    </div>
  );
}

export default PlayerCourse;
