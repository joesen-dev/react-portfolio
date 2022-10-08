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
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#about">
              <img
                src={avatar}
                className="avatar"
                alt="Joseph's portfolio avatar"
              />
            </a>
            <button
              className="navbar-toggler navbar-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav">
              <ul className="navbar-nav nav-pills justify-content-end">
                <li className="nav-item">
                  <a
                    href="#about"
                    onClick={() => handlePageChange("About")}
                    // (ternary) operator that checks to see if the current page is "About"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    // className={currentPage === "About" ? "navActive" : "nav-link"}>
                    className={
                      currentPage === "About" ? "nav-link active" : "nav-link"
                    }
                    aria-current={currentPage === "About" ? "page" : ""}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    className={
                      currentPage === "Portfolio"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    aria-current={currentPage === "Portfolio" ? "page" : ""}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                    aria-current={currentPage === "Contact" ? "page" : ""}>
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#resume"
                    onClick={() => handlePageChange("Resume")}
                    className={
                      currentPage === "Resume" ? "nav-link active" : "nav-link"
                    }
                    aria-current={currentPage === "Resume" ? "page" : ""}>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
