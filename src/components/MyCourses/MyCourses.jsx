import React from 'react'
import DiscourseCard from './DiscourseCard'
import img1 from "../../assets/chandiPaath.jpg";
import img2 from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import img3 from "../../assets/BHAJAGOVINDAM-OK.png";



export const MyCourses = () => {
  return (
    <>
    <div className='title'>
    <h1>My Discourses</h1>
    </div>
    <div className="discourse">
      <div>
        <DiscourseCard img={img1} id={1} />
        <DiscourseCard img={img2} id={2} />
        <DiscourseCard img={img3} id={3} />
      </div>
    </div></>
  )
}
