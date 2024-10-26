// Import necessary libraries and styles
import React from "react";
import navcss from "./Navbar.module.css"
import navLogo from "../../assets/logo.png";
import navLogo2 from "../../assets/PRASTHAN YATNAM-OK.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className={navcss.navbar}>
      <div className={navcss.navbar_logo}>
 
        <Link to="/">
          <img src={navLogo2} alt="" />
        </Link>
      </div>
      <div className={navcss.navbar_links}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/discourses"}>DISCOURSES</NavLink>
        <NavLink to={"/poems"}>POEMS</NavLink>
        <NavLink to={"/activity"}>ACTIVITY</NavLink>
        <NavLink to={"/testimonials"}>TESTIMONIAL</NavLink>
        <NavLink to={"/donations"}>DONATION</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        
        {isLoggedIn ? (
          <UserMenu/>
        ) : (
          <NavLink to={"/login"}>LOGIN</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

