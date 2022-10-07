import React, { useEffect } from "react";
import avatar from "../../assets/images/portfolio-avatar2.png";

function Nav(props) {
  const { currentPage, handlePageChange } = props;
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  return (
    <section className="hero">
      <header className="App-header">
        <nav className="navbar text-white">
          <div className="container-fluid col-sm-6 justify-content-start">
            <img
              src={avatar}
              className="avatar"
              alt="Joseph's portfolio avatar"
            />
          </div>
          <ul id="nav-list" className="nav nav-pills justify-content-end">
            {/* <li><a href="#about">About me</a></li> */}
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                // (ternary) operator that checks to see if the current page is "About"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                // className={currentPage === "About" ? "navActive" : "nav-link"}>
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }>
                Resume
              </a>
            </li>
          </ul>
          <button className="hamburger" id="hamburger">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
        <div className="hero-container">
          <div className="hero-text">
            <h1>Joseph</h1>
            <p>Full Stack Developer</p>
            <div className="button">
              <a href="#about" onClick={() => handlePageChange("About")}>
                About me
              </a>
            </div>
          </div>
          <div className="socials"></div>
        </div>
      </header>
    </section>
  );
}

export default Nav;
