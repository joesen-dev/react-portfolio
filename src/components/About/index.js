import React from 'react';
import headShot from '../../assets/images/portfolio-avatar2.png';

function About() {
  return (
    <section className='container' id='about'>
      <div className='row'>
        <div className='col-sm-8'>
          <h2>About Me</h2>
          <p>
            Hi, I'm Joseph. I'm a Full Stack Developer interested in software
            development with a certificate in Full Stack Development from the
            University of Carleton. Check out some projects I've worked on in
            the portfolio section during the past six months! Have a peek around
            and feel free to contact me on LinkedIn if you like what you see. My
            resume is also available for download in this portfolio's "resume"
            section. Have fun!
          </p>
        </div>
        <div className='headshot-container col-sm-4'>
          <img src={headShot} className='headshot' alt="Joseph's head shot" />
        </div>
      </div>
    </section>
  );
}

export default About;
