import React from "react";

export default class AboutMe extends React.Component {
   
    render() {
      
      return (
          
        
        <div class="row">
          <div class="col">
            <img
              src="Assets/Images/Head Shot.jpg"
              class="roundCorners float-left pb-3 mr-3"
              alt="Aren Salmela Head Shot"
            />
            <p class="changeFont newText">
              Hello! My name is Aren and I am from Beverly, Massachusetts. I
              graduated from the University of New Hampshire in 2017. I
              currently work as an Account Manager for a craft beverage
              distributer in Massachusetts.
            </p>

            <p class="changeFont newText">
              In my spare time, I love playing video games, discovering new
              craft beer, traveling, and binge watching new shows on Netflix. If
              I am able to disappear for a day, I love making my way up to Loon
              Mountain in New Hampshire for some snowboarding. I am incredibly
              excited to be a part of the UNH Coding Boot Camp. I am hoping to
              learn new technical skills that I can build upon for the rest of
              my life.
            </p>
          </div>
        </div>
      
        
      );
    }
  }