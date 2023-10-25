import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#f1f3ff'
  };

  const linkStyle = {
    marginRight: '30px',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container">
        <a className="navbar-brand" href="mainSection.html">
          Binar Rent Car's
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="navbarNav"
          aria-labelledby="navbarNavLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarNavLabel">
              BCR
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" style={linkStyle} href="#ourServices">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={linkStyle} href="#whyUs">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={linkStyle} href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={linkStyle} href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success" style={{ borderRadius: '2px' }} href="#register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;