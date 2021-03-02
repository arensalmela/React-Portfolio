import React from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
//import "./components/Navbar/index"
import AboutMe from "./components/AboutMe/AboutMe"
import AboutMeSection from "./components/AboutMe/AboutMeSection"
import ProjectCards from "./components/ProjectCards/ProjectCards"
import Jumbotron from "./components/Jumbotron/jumbotron"
import SkillsSection from "./components/Skills/SkillsSection"
import Skills from "./components/Skills/Skills"
import ContactSection from "./components/Contact/ContactSection"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

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
      <SkillsSection/>
      <Skills/>
      <ContactSection/>
      <Contact/>
      <Footer/>
      </div>
     
      </body>
    </div>
    
  );
}

export default App;
