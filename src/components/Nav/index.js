import React, { useEffect, useContext, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { DarkModeContext } from '../../utils/DarkModeContext';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Dark mode toggle
  const handleClick = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  return (
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons dark:text-white'>
        <a href='/react-portfolio'>Portfolio</a>
      </h1>

      {/* Mobile Nav Menu */}
      <section className='MOBILE-MENU flex lg:hidden'>
        <div
          className='HAMBURGER-ICON space-y-2'
          // toggle isNavOpen state on click
          onClick={() => setIsNavOpen(prev => !prev)}>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
        </div>

        <div
          // toggle class based on isNavOpen state
          className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
            // change isNavOpen state to false to close the menu
            onClick={() => setIsNavOpen(false)}>
            <svg
              className='h-8 w-8 text-gray-600'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
            <li className='my-8'>
              <BsFillMoonStarsFill
                onClick={handleClick}
                className='cursor-pointer text-2xl max-w-lg mx-auto dark:text-white'
              />
            </li>
            <li className='my-8'>
              <a
                className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md'
                href='#about'
                onClick={() => handlePageChange('About')}>
                About
              </a>
            </li>
            <li className='my-8'>
              <a
                className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md'
                href='#projects'
                onClick={() => handlePageChange('Projects')}>
                Projects
              </a>
            </li>
            <li className='my-8'>
              <a
                className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md'
                href='#resume'
                onClick={() => handlePageChange('Resume')}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </section>

      <ul className='DESKTOP-MENU hidden space-x-8 lg:flex items-center'>
        <li>
          <BsFillMoonStarsFill
            onClick={handleClick}
            className='cursor-pointer text-2xl max-w-lg mx-auto dark:text-white'
          />
        </li>
        <li>
          <a
            className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md ml-8'
            href='#about'
            onClick={() => handlePageChange('About')}>
            About
          </a>
        </li>
        <li>
          <a
            className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md ml-8'
            href='#projects'
            onClick={() => handlePageChange('Projects')}>
            Projects
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
            className='bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-md ml-8'
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
