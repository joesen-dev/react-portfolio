import React, { useState } from 'react';
import ReactGA from 'react-ga';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Banner from '../Banner';
import Navigation from '../Nav';
// import Contact from '../Contact';
import Resume from '../../pages/Resume';
import Footer from '../Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    return <Resume />;
  };

  const handlePageChange = page => {
    setCurrentPage(page);
    ReactGA.pageview(`/${page}`);
  };

  return (
    <main className='bg-white px-10  dark:bg-gray-900 md:px-20 lg:px-40'>
      <section className='min-h-screen'>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <Banner />
      </section>
      {renderPage()}
      <Footer></Footer>
    </main>
  );
}
