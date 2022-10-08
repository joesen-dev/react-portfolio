import React from "react";
import headShot from "../../assets/images/portfolio-avatar2.png";

function About() {
  return (
    <section className="container" id="about">
      <div className="row">
        <div className="col-sm-8">
          <h2>About Me</h2>
          <p>Hi, my name's Joseph. I'm a Full Stack Developer.</p>
        </div>
        <div className="headshot-container col-sm-4">
          <img src={headShot} className="headshot" alt="Joseph's head shot" />
        </div>
      </div>
    </section>
  );
}

export default About;
