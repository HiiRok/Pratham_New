import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Discourse from "./components/Discourses/Discourse";
import Player from "./components/Video/Player";
import SingleDiscourse from "./components/SingleDiscourse/SingleDiscourse";
import Login from "./components/LoginReigister/Login";
import Register from "./components/LoginReigister/Register";
import { MyCourses } from "./components/MyCourses/MyCourses";
import UserProfile from "./components/UserProfile/UserProfile";
import about from "./components/About/about";
import Poem from "./components/Poems/Poem";
import Gallery from "./components/Activity/Gallery";
import TestimonialPage from "./components/Testimonials/TestimonialPage";



function App() {
  return (
    <>
      <Router>
        <Navbar isLoggedIn={false}/>
        <Routes>
          <Route isLoggedIn={false} path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/discourses" Component={Discourse} />
          <Route path="/poems" Component={Poem} />
          <Route path="/activity" Component={Gallery} />
          <Route path="/testimonials" Component={TestimonialPage} />
          <Route path="/discourses/video" Component={Player} />
          <Route path="/discourses/:id" element={<SingleDiscourse />} />
          <Route path="/mycourses" Component={MyCourses} />
          <Route path="/userProfile" Component={UserProfile} />
          <Route path="/about" Component={about} />
          <Route path="*" Component={Home} status={404} />
          
        </Routes>
        <footer className={styles.footer}>
      
          <p>Copyright &copy; 2024 PrasthanYatnam.org. All rights reserved.</p>

        </footer>
      </Router>
    </>
  );
}

export default App;
