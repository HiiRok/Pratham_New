import "./Discourse.css";
import DiscourseCard from "../MyCourses/DiscourseCard";
import img1 from "../../assets/chandiPaath.jpg";
import img2 from "../../assets/Divine-mother-22.08.2023-OK.jpg";
import img3 from "../../assets/BHAJAGOVINDAM-OK.png";
import { DiscoursesCard } from "./DiscoursesCard";

const Discourse = () => {
  return (
    <>
    <div className="title"><h1>Discourses</h1></div>
      
      <div  className="discourse">
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
        <DiscoursesCard 
        title='First Course'
        imageUrl={img3}
        body='Lorem ipsum dolor sit amet, consetur adipiscing elit.'
         />
      </div>
    </>
  );
};

export default Discourse;
