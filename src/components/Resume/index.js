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
          <button type="button" className="btn btn-success">
            resume
          </button>
        </a>
      </span>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">responsive design</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Bootstrap</li>
        </ul>
      </div>
      <div>
        <h3>Back-end Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item">APIs</li>
          <li className="list-group-item">Node</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">MySQL, Sequelize</li>
          <li className="list-group-item">MongoDB, Mongoose</li>
          <li className="list-group-item">REST</li>
          <li className="list-group-item">GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
