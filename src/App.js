import React from "react"
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from "./components/AboutMe"
function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
