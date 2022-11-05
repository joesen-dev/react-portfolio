import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import avatar from '../../assets/images/portfolio-avatar2.png';

function Navigation(props) {
  const { currentPage, handlePageChange } = props;
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  return (
    <section className='hero'>
      <header className='App-header'>
        {/* REACT NAVBAR */}
        <Navbar expand='lg'>
          <Container>
            <Navbar.Brand href='#about'>
              <img
                src={avatar}
                className='avatar'
                alt="Joseph's portfolio avatar"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='justify-content-end nav-pills'>
              <Nav>
                <Nav.Link
                  href='#about'
                  onClick={() => handlePageChange('About')}
                  // (ternary) operator that checks to see if the current page is "About"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  // className={
                  //   currentPage === "About" ? "nav-link active" : "nav-link"
                  // }
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href='#portfolio'
                  onClick={() => handlePageChange('Portfolio')}>
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  href='#contact'
                  onClick={() => handlePageChange('Contact')}>
                  Contact
                </Nav.Link>
                <Nav.Link
                  href='#resume'
                  onClick={() => handlePageChange('Resume')}>
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>
            <a href='#about' onClick={() => handlePageChange('About')}>
              Joseph Senyonga
            </a>
          </h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
