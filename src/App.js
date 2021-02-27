import React from "react"
import './App.css';
import AboutMe from "./components/AboutMe/AboutMe"
import ProjectCards from "./components/ProjectCards"
import Jumbotron from "./components/Jumbotron/jumbotron"

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      
      <div className = "container">
      <AboutMe/>
      <ProjectCards/>
      </div>
      
      
    </div>
  );
}

export default App;
