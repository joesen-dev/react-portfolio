import React from 'react';
import design from '../../assets/design.png';
import code from '../../assets/code.png';
import soft from '../../assets/soft.png';
import resume from '../../assets/Joseph_Senyonga_Full-Stack_Developer_Resume.pdf';

function Resume() {
  return (
    <section section id='resume' className='mt-6 border-t border-slate-200'>
      <div className='pt-4'>
        <h3 className='text-3xl py-1 dark:text-white'>Resume</h3>
      </div>
      <span>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Download my{' '}
          <span className='text-red-500'>
            <a href={resume} download>
              resume
            </a>
          </span>
        </p>
      </span>
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

export default Resume;
