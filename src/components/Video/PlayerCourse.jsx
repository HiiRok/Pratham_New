import styles from "./Player.module.css"
import SharingButton from "./test";

function PlayerCourse({ setVideo, videoLink, videoTitle, videoDuration }) {
  return (
    <div
      className={styles.player_course_content}
      onClick={setVideo}
    >
      <h3>{videoTitle}</h3>
      <p>{videoDuration} mins</p>
      <SharingButton url={videoLink} title={videoTitle} />
    </div>
  );
}

export default PlayerCourse;
 