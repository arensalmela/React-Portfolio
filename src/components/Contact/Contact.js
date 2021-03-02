import React from "react";
import "../../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    
    <section>
  <div className="row justify-content-center pt-5 pb-5">
    <div className="col">
      <a target="_blank" href="https://www.linkedin.com/in/arensalmela/">
        <button type="button" className="btn mt-auto" alt="GitHub icon not found">
          <i className="newText fab fa-3x fa-linkedin-in" />
        </button>
      </a>
    </div>
    <div className="col">
      <a target="_blank" href="https://github.com/arensalmela">
        <button type="button" className="btn mt-auto" alt="GitHub icon not found">
          <i className="newText fab fa-3x fa-github" />
        </button>
      </a>
    </div>
  </div>
  <div className = "row">
      <div className = "col">
      <h4 class="newText d-flex justify-content-around">
      Please feel free to reach out. I look forward to hearing from you.
    </h4>

    <div class="d-flex justify-content-center">
      <p>
        Banner Image:
        <a href="https://pngtree.com/free-backgrounds"
          >free background photos from pngtree.com</a
        >
      </p>
    </div>
      </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
</section>


  
  
  );
}

export default Contact;