import React from 'react';
import DiscourseCard from './DiscourseCard';
import img1 from "../../assets/chandiPaath.jpg";
import img2 from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import img3 from "../../assets/BHAJAGOVINDAM-OK.png";
import styles from "./MyCourses.module.css"

const MyCourses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>MY DISCOURSES</h1>
      </div>
      <div className={styles.discourse}>
        <DiscourseCard img={img1} id={1} />
        <DiscourseCard img={img2} id={2} />
        <DiscourseCard img={img3} id={3} />
      </div>
    </div>
  );
};

export default MyCourses;
