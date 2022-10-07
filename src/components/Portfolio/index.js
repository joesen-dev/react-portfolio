import React from "react";
import gitSocial from "../../assets/images/project-images/git-social.png";
import foodr from "../../assets/images/project-images/FOODr.png";
import readMePro from "../../assets/images/project-images/readme-pro.png";
import teamBuider from "../../assets/images/project-images/team-builder.png";
import staffTracker from "../../assets/images/project-images/staff-tracker-screenshot.png";
import noteTaker from "../../assets/images/project-images/note-taker.png";

function Portfolio() {
  return (
    <section className="sub-section-projects" id="portfolio">
      <h2>Projects</h2>
      <div className="project-container">
        {/* Git Social */}
        <div className="project-card">
          <img className="project-image" src={gitSocial} alt="Git Social" />
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
              href="https://github.com/leunggerry/git-social">
              View here
            </a>
          </p>
        </div>
        {/*  FOODr  */}
        <div className="project-card">
          <img className="project-image" src={foodr} alt="Foodr" />
          <h3>FOODr</h3>
          <p className="subtext">
            FOODr is a recommendation app that suggests local restaurants near
            the user.
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/projectAwesome">
              View here
            </a>
          </p>
        </div>
        {/* Readme Pro  */}
        <div className="project-card">
          <img className="project-image" src={readMePro} alt="README pro" />
          <h3>Readme Pro</h3>
          <p className="subtext">
            The README generator is designed to streamline creating Professional
            README files for developers
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/readme-pro">
              View here
            </a>
          </p>
        </div>
        {/* Team Builder  */}
        <div className="project-card">
          <img className="project-image" src={teamBuider} alt="Team builder" />
          <h3>Team Builder</h3>
          <p className="subtext">
            A command line application that takes user input and builds a
            webpage with the team's basic information.
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/team-builder">
              View here
            </a>
          </p>
        </div>
        {/* Staff Tracker  */}
        <div className="project-card">
          <img
            className="project-image"
            src={staffTracker}
            alt="Staff tracker"
          />
          <h3>Staff Tracker</h3>
          <p className="subtext">
            View and manage the the departments, roles, and employees in your
            company in the command line with Staff Tracker.
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/staff-tracker">
              View here
            </a>
          </p>
        </div>
        {/* Note Taker  */}
        <div className="project-card">
          <img className="project-image" src={noteTaker} alt="Note Taker" />
          <h3>Note Taker</h3>
          <p className="subtext">
            Use Note Taker to write and save notes so that you can organize my
            thoughts and keep track of tasks you need to complete
          </p>
          <hr />
          <p className="subtext">
            <a
              className="project-link"
              href="https://github.com/joesen-dev/note-taker">
              View here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
