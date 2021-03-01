import React from "react";
import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <div className = "row mb-6">
    <div className = "col"> 
   <br />
   <table style={{width: '100%'}}>
    <tbody><tr>
        <th className="changeFont skillText">JavaScript</th>
        <th className="changeFont skillText">MySQL</th>
        <th className="changeFont skillText">Mongoose</th>
      </tr>
      <tr>
        <th className="changeFont skillText">HTML</th>
        <th className="changeFont skillText">CSS</th>
        <th className="changeFont skillText">Databases / API</th>
      </tr>
    </tbody></table>
  </div>
  </div>
  
  
  
  );
}

export default Skills;