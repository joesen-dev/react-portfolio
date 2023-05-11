import React from 'react';
import ReactGA from 'react-ga';
import resume from '../assets/Joseph_Senyonga_Full-Stack_Developer_Resume.pdf';
import CodeCard from '../components/ProficienciesCards/codeCard';
import DesignCard from '../components/ProficienciesCards/designCard';
import SoftSkillsCard from '../components/ProficienciesCards/softSkillsCard';

function Resume() {
  const handleDownload = () => {
    ReactGA.event({
      category: 'Download',
      action: 'Resume',
      label: 'Resume Download',
    });
  };

  return (
    <section id='resume' className='mt-6 border-t border-slate-200'>
      <div className='pt-4'>
        <h3 className='text-3xl py-1 dark:text-white'>Resume</h3>
      </div>
      <span>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Download my{' '}
          <span className='text-red-500'>
            <a href={resume} onClick={handleDownload} download>
              resume
            </a>
          </span>
        </p>
      </span>
      <div className='lg:flex gap-10'>
        {/* FRONT-END */}
        <DesignCard />
        {/* BACK-END */}
        <CodeCard />
        {/* Soft Skills */}
        <SoftSkillsCard />
      </div>
    </section>
  );
}

export default Resume;
