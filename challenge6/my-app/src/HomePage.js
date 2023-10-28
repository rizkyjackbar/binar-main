import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function HomePage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="mainSection.html">Binar Rent Car's</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* ... (Kode Navbar) */}
        </div>
      </nav>

      <section id="ourServices">
        <div style={{ backgroundColor: '#f1f3ff' }}>
          <div className="row">
            {/* ... (Kode Our Services) */}
          </div>
        </div>
      </section>

      <section id="layanan" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="row">
            {/* ... (Kode Layanan) */}
          </div>
        </div>
      </section>

      <section id="whyUs" style={{ paddingTop: '30px' }}>
        <div className="container">
          {/* ... (Kode Why Us) */}
        </div>
      </section>

      <section id="testimonial" style={{ paddingTop: '30px' }}>
        <div className="container tstmonial">
          <div className="text-center mb-4">
            {/* ... (Kode Testimonial) */}
          </div>

          <div className="karoselBackground container mt-5" style={{ backgroundColor: '#f1f3ff' }}>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              {/* ... (Kode Carousel Testimonial) */}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-container" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="row">
            {/* ... (Kode FAQ) */}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '168px', marginBottom: '100px' }}>
        <div className="container">
          <div className="row" style={{ fontFamily: 'Helvetica', fontSize: '14px', fontStyle: 'normal', fontWeight: 300, lineHeight: '20px' }}>
            {/* ... (Kode Footer) */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
