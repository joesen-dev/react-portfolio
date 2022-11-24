import React from 'react';
import design from '../../assets/design.png';
import code from '../../assets/code.png';

function About() {
  return (
    <section id='about'>
      <div>
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
          . My <span className='text-red-500'>resume</span> is also available
          for download in this portfolio's <b>resume</b> section. Have fun!
        </p>
      </div>
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

export default About;
