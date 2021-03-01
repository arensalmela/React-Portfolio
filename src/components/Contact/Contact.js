import React from "react";
import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <section className="container d-flex justify-content-center">
  <div className="row">
    <div className="col">
      <a target="_blank" href="https://www.linkedin.com/in/arensalmela/">
        <button type="button" className="btn container mt-auto" alt="GitHub icon not found">
          <i className="newText fab fa-3x fa-linkedin-in" />
        </button>
      </a>
    </div>
    <div className="col">
      <a target="_blank" href="https://github.com/arensalmela">
        <button type="button" className="btn container mt-auto" alt="GitHub icon not found">
          <i className="newText fab fa-3x fa-github" />
        </button>
      </a>
    </div>
  </div>
</section>
  
  
  );
}

export default Contact;