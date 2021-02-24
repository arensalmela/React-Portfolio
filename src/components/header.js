import { render } from "@testing-library/react";
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from 'react-bootstrap/Image'
//import bgimage from "public/Assets/jumbotron.png"

export default class Header extends React.Component {
   
  render() {
    
    return (
        
        <Jumbotron fluid>
        
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        
      </Jumbotron>
      
    );
  }
}

// style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}