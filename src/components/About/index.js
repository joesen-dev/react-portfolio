import React from 'react';
import design from '../../assets/design.png';
import code from '../../assets/code.png';
import soft from '../../assets/soft.png';

function About() {
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
            <a href='https://www.linkedin.com/in/josephsenyonga38/'>LinkedIn</a>
          </span>
          . My <b>resume</b> is also available for download in this portfolio's
          resume section. Have fun!
        </p>
      </div>
      <div className='lg:flex gap-10'>
        {/* FRONT-END */}
        <div className='text-center shadow-2xl p-10 rounded-xl my-10 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-1'>
          <img
            src={design}
            width={100}
            height={100}
            style={{
              margin: 'auto',
            }}
            alt=''
          />
          <h3 className='text-lg font-medium pt-8 pb-2 text-red-600'>
            Front-end Proficiencies
          </h3>
          <div className='text-gray-800 py-1 dark:text-white'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Responsive Design</p>
            <p>React</p>
            <p>Bootstrap</p>
          </div>
        </div>
        {/* BACK-END */}
        <div className='text-center shadow-2xl p-10 rounded-xl my-10 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-1'>
          <img
            src={code}
            width={100}
            height={100}
            style={{
              margin: 'auto',
            }}
            alt=''
          />
          <h3 className='text-lg font-medium pt-8 pb-2 text-red-600'>
            Back-end Proficiencies
          </h3>
          <div className='text-gray-800 py-1 dark:text-white'>
            <p>REST APIs</p>
            <p>Node</p>
            <p>Express</p>
            <p>MySQL, Sequelize</p>
            <p>MongoDB, Mongoose</p>
            <p>GraphQL</p>
          </div>
        </div>
        {/* Soft Skills */}
        <div className='text-center shadow-2xl p-10 rounded-xl my-10 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex-1'>
          <img
            src={soft}
            width={100}
            height={100}
            style={{
              margin: 'auto',
            }}
            alt=''
          />
          <h3 className='text-lg font-medium pt-8 pb-2 text-red-600'>
            Soft Skills
          </h3>
          <div className='text-gray-800 py-1 dark:text-white'>
            <p>Problem Solving</p>
            <p>Communication</p>
            <p>Collaboration</p>
            <p>Persuasion </p>
            <p>Adaptability</p>
            <p>Time Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
