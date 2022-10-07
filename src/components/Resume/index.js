import React from "react";
import resume from "../../assets/images/project-images/resume-template.pdf";

function Resume() {
  return (
    <section>
      <div>
        <h2>Resume</h2>
      </div>
      <span>
        Download my{" "}
        <a href={resume} download>
          <button>resume</button>
        </a>
      </span>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
