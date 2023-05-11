import React from 'react';
import ReactGA from 'react-ga';
import CodeCard from '../components/ProficienciesCards/codeCard';
import DesignCard from '../components/ProficienciesCards/designCard';
import SoftSkillsCard from '../components/ProficienciesCards/softSkillsCard';

function About() {
  const handleLinkedInClick = () => {
    ReactGA.event({
      category: 'External Link',
      action: 'LinkedIn Click',
      label: 'LinkedIn Profile',
    });
  };

  return (
    <section id='about' className='mt-6 border-t border-slate-200'>
      <div className='pt-4'>
        <h3 className='text-3xl py-1 dark:text-white'>About Me</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Hi, I'm Joseph. I am a web developer with experience in the medical
          field dedicated to creating better user experiences. I recently
          graduated from Carleton University with a certificate in full stack
          web development. I build apps with a mobile-first mindset. I am
          excited to leverage my background and use my newly acquired skills as
          part of a team committed to delivering high-quality products and
          better web experiences. Have a peek around and make sure to take a
          look at my <b>projects</b> page with examples of my work. You can
          reach me on{' '}
          <span className='text-red-500'>
            <a
              href='https://www.linkedin.com/in/josephsenyonga38/'
              onClick={handleLinkedInClick}>
              LinkedIn
            </a>
          </span>
          . My <b>resume</b> is also available for download in this portfolio's
          resume section. Have fun!
        </p>
      </div>
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

export default About;
