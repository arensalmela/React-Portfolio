import React from "react";
import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  return (
    <nav className="changeFont" id="navbar">
        <a href="#aboutMe">About Me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Info</a>
      </nav>
  );
}

export default Navbar;