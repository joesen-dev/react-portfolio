import React from 'react';

import { creatNewProject } from '../utils/helpers';
import ProjectItem from '../components/ProjectItem';

import Capstone from '../assets/images/project-images/Capstone.png';
import Git_Social from '../assets/images/project-images/Git_Social.png';
import Team_Builder from '../assets/images/project-images/Team_Builder.png';
import README_Pro from '../assets/images/project-images/README_Pro.png';
import Staff_Tracker from '../assets/images/project-images/Staff_Tracker.png';
import Note_Taker from '../assets/images/project-images/Notes-page.png';

const projectsData = require('../db/projects.json');

function Projects() {
  const projects = [];
  // console.log('ProjectData: ', projectsData);

  const [capstone, gitSocial, teamBuilder, readmePro, staffTracker, noteTaker] =
    projectsData;

  /**
   * @Description create projects
   * Make sure to add the projects array at the end of the arguments
   */
  const createProjects = () => {
    // Create Capstone project
    creatNewProject(
      capstone.id,
      Capstone,
      capstone.name,
      capstone.description,
      capstone.technologies,
      capstone.liveLink,
      capstone.gitHub,
      projects
    );

    // Create Git Social project
    creatNewProject(
      gitSocial.id,
      Git_Social,
      gitSocial.name,
      gitSocial.description,
      gitSocial.technologies,
      'https://github.com/leunggerry/git-social',
      gitSocial.gitHub,
      projects
    );

    // Create Team Builder project
    creatNewProject(
      teamBuilder.id,
      Team_Builder,
      teamBuilder.name,
      teamBuilder.description,
      teamBuilder.technologies,
      teamBuilder.liveLink,
      teamBuilder.gitHub,
      projects
    );

    // Create README Pro project
    creatNewProject(
      readmePro.id,
      README_Pro,
      readmePro.name,
      readmePro.description,
      readmePro.technologies,
      readmePro.liveLink,
      readmePro.gitHub,
      projects
    );

    // Create Staff Tracker project
    creatNewProject(
      staffTracker.id,
      Staff_Tracker,
      staffTracker.name,
      staffTracker.description,
      staffTracker.technologies,
      staffTracker.liveLink,
      staffTracker.gitHub,
      projects
    );

    // Create Note Taker project
    creatNewProject(
      noteTaker.id,
      Note_Taker,
      noteTaker.name,
      noteTaker.description,
      noteTaker.technologies,
      noteTaker.liveLink,
      noteTaker.gitHub,
      projects
    );
  };
  createProjects();

  return (
    <section id='projects' className='mt-6 border-t border-slate-200'>
      <div className='pt-4'>
        <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Check out some projects I've worked on!
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        {projects.map(project => (
          <ProjectItem
            key={project.id}
            _id={project._id}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            gitHub={project.gitHub}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
