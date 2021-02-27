import React from "react"
import './App.css';
import AboutMe from "./components/AboutMe/AboutMe"
import ProjectCards from "./components/ProjectCards"
import Jumbotron from "./components/Jumbotron/jumbotron"

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      
      
      <AboutMe/>
      <ProjectCards/>
      
      
      
    </div>
  );
}

export default App;
