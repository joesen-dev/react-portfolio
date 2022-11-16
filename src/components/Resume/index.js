import React from 'react';
import design from '../../assets/design.png';
import code from '../../assets/code.png';
import resume from '../../assets/Joseph_Senyonga_Full-Stack_Developer_Resume.pdf';

function Resume() {
  return (
    <section section id='resume'>
      <div>
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
        <div className='text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1'>
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
          <p className='text-gray-800 py-1'>HTML</p>
          <p className='text-gray-800 py-1'>CSS</p>
          <p className='text-gray-800 py-1'>JavaScript</p>
          <p className='text-gray-800 py-1'>Responsive Design</p>
          <p className='text-gray-800 py-1'>React</p>
          <p className='text-gray-800 py-1'>Bootstrap</p>
        </div>

        {/* BACK-END */}
        <div className='text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1'>
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
          <p className='text-gray-800 py-1'>REST APIs</p>
          <p className='text-gray-800 py-1'>Node</p>
          <p className='text-gray-800 py-1'>Express</p>
          <p className='text-gray-800 py-1'>MySQL, Sequelize</p>
          <p className='text-gray-800 py-1'>MongoDB, Mongoose</p>
          <p className='text-gray-800 py-1'>GraphQL</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
