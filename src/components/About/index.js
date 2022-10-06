import React from "react";
import headShot from "../../assets/images/portfolio-avatar2.png";

function About() {
  return (
    <section>
      <div>
        <h2>About Me</h2>
        <p>Hi, my name's Joseph. I'm a Full Stack Developer.</p>
      </div>
      <div className="headshot-container">
        <img src={headShot} className="headshot" alt="Joseph's head shot" />
      </div>
    </section>
  );
}

export default About;
