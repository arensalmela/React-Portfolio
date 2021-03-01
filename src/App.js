import React from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/AboutMe/AboutMe"
import AboutMeSection from "./components/AboutMe/AboutMeSection"
import ProjectCards from "./components/ProjectCards"
import Jumbotron from "./components/Jumbotron/jumbotron"

function App() {
  return (
    
    <div className="App">
    <body>
      <Jumbotron/>
      <Navbar/>
      <div className = "container">
      <AboutMeSection/>
      <AboutMe/>
      <ProjectCards/>
      </div>
     
      </body>
    </div>
    
  );
}

export default App;
