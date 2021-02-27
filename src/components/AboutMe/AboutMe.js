import React from "react";
import Headshot from "../../Assets/Headshot.png"
import "bootstrap/dist/css/bootstrap.min.css";

function AboutMe() {
  return (
    <div className="row">
      <div className="col">
        <img
          src={Headshot}
          className="float-left"
          alt="Aren Salmela Head Shot"
        />
        <p className="changeFont newText">
          Hello! My name is Aren and I am from Beverly, Massachusetts. I
          graduated from the University of New Hampshire in 2017. I currently
          work as an Account Manager for a craft beverage distributer in
          Massachusetts.
        </p>
        <p className="changeFont newText">
          In my spare time, I love playing video games, discovering new craft
          beer, traveling, and binge watching new shows on Netflix. If I am able
          to disappear for a day, I love making my way up to Loon Mountain in
          New Hampshire for some snowboarding. I am incredibly excited to be a
          part of the UNH Coding Boot Camp. I am hoping to learn new technical
          skills that I can build upon for the rest of my life.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
