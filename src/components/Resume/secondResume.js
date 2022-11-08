import React from 'react';
import design from '../../assets/design.png';
import code from '../../assets/code.png';
import resume from '../../assets/Resume-Joseph-Senyonga.pdf';

function Resume() {
  return (
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Resume</h3>
      </div>
      <span>
        Download my{' '}
        <span className='text-teal-500'>
          <a href={resume} download>
            resume
          </a>
        </span>
      </span>
      <div className='lg:flex gap-10'>
        {/* FRONT-END */}
        <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
          <img
            src={design}
            width={100}
            height={100}
            style={{
              margin: 'auto',
            }}
            alt=''
          />
          <h3 className='text-lg fonr-medium pt-8 pb-2 text-teal-600'>
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
        <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
          <img
            src={code}
            width={100}
            height={100}
            style={{
              margin: 'auto',
            }}
            alt=''
          />
          <h3 className='text-lg fonr-medium pt-8 pb-2 text-teal-600'>
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
