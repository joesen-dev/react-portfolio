import React from "react";

function Portfolio() {
  return (
    <section className="sub-section-projects" id="portfolio">
      <h2>Projects</h2>
      <div className="project-container">
        {/* Git Social */}
        <div className="project-card">
          <img
            className="project-image"
            src="./assets/images/project-images/git-social.png"
            alt="Git Social landing page"
          />
          <h3>Git Social</h3>
          <p className="subtext">
            Git Social is a social app for new developers to post about their
            projects and solicit help from other developers looking to build
            their portfolios.
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/leunggerry/git-social"
            >
              View here
            </a>
          </p>
        </div>
        {/*  FOODr  */}
        <div className="project-card">
          <img
            className="project-image"
            src="./assets/images/project-images/FOODr.png"
            alt="Foodr landing page"
          />
          <h3>FOODr</h3>
          <p className="subtext">
            FOODr is a recommendation app that suggests local restaurants near
            the user.
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/projectAwesome"
            >
              View here
            </a>
          </p>
        </div>
        {/* Note Taker  */}
        <div className="project-card">
          <img
            className="project-image"
            src="./assets/images/project-images/note-taker.png"
            alt="Note Taker landing page"
          />
          <h3>Note Taker</h3>
          <p className="subtext">
            Use Note Taker to write and save notes so that you can organize my
            thoughts and keep track of tasks you need to complete
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/note-taker"
            >
              View here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
