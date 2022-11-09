import React, { useEffect, useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { DarkModeContext } from '../../utils/DarkModeContext';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons dark:text-white'>
        <a href='/'>Portfolio</a>
      </h1>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill
            onClick={handleClick}
            className='cursor-pointer text-2xl max-w-lg mx-auto dark:text-white'
          />
        </li>
        <li>
          <a
            // className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
            className='bg-gradient-to-r from-red-200 to-red-400 text-white px-4 py-2 rounded-md ml-8'
            href='#about'
            onClick={() => handlePageChange('About')}>
            About
          </a>
        </li>
        <li>
          <a
            // className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
            className='bg-gradient-to-r from-red-200 to-red-400 text-white px-4 py-2 rounded-md ml-8'
            href='#portfolio'
            onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </a>
        </li>
        {/* <li>
          <a
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
            href='#contact'
            onClick={() => handlePageChange('Contact')}>
            Contact
          </a>
        </li> */}
        <li>
          <a
            // className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
            className='bg-gradient-to-r from-red-200 to-red-400 text-white px-4 py-2 rounded-md ml-8'
            href='#resume'
            onClick={() => handlePageChange('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
