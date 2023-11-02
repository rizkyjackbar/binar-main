import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import mercedesImage from "./images/Mercedes Car EQC 300kW Edition - 900x598 1.png";
import serviceImage from "./images/img_service.png";
import iconPrice from "./images/icon_price.png";
import iconJempol from "./images/jempol.png";
import iconProffesional from "./images/icon_professional.png";
import icon24Hourse from "./images/icon_24hrs.png";
import testi1 from "./images/test1.webp";
import testi2 from "./images/test2.webp";
import testi3 from "./images/test3.webp";
import iconFaceboook from "./images/icon_facebook.png";
import iconInstagram from "./images/icon_instagram.png";
import iconMail from "./images/icon_mail.png";
import iconTwitter from "./images/icon_twitter.png";
import iconTwich from "./images/icon_twitch.png";
import binarLogo from "./images/logoBinar.png";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
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
                  <a
                    className="nav-link"
                    style={{ marginRight: "30px" }}
                    href="#layanan"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ marginRight: "30px" }}
                    href="#whyUs"
                  >
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ marginRight: "30px" }}
                    href="#testimonial"
                  >
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{ marginRight: "30px" }}
                    href="#faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-success"
                    style={{ borderRadius: "2px" }}
                    href="/Register"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ backgroundColor: "#f1f3ff" }}>
        <div className="row">
          <div className="col">
            <div style={{ marginLeft: "50px", marginTop: "50px" }}>
              <h1>
                <b>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</b>
              </h1>
              <div>
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <a
                className="btn btn-success"
                href="/cars"
                style={{ borderRadius: "2px" }}
              >
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
          <div
            className="col backgroundCar"
            style={{
              justifyContent: "flex-end",
              display: "flex",
              width: "704px",
              height: "243px",
              borderTopLeftRadius: "60px",
              backgroundColor: "#0d28a6",
              marginRight: "10px",
              flexShrink: 0,
              marginTop: "164px",
            }}
          >
            <div className="col-container">
              <div className="col">
                <img
                  src={mercedesImage}
                  style={{
                    width: "704px",
                    height: "407px",
                    flexShrink: 0,
                    marginTop: "-150px",
                  }}
                  alt="Gambar Mobil"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="layanan" style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content">
                <div className="p-3">
                  <img src={serviceImage} alt="gambar services" />
                </div>
              </div>
            </div>
            <div
              className="col isiLayanan align-center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                paddingTop: "50px",
              }}
            >
              <div className="container">
                <h2 className="layanan-car">
                  <b>Best Car Rental for any kind of trip in Yogyakarta!</b>
                </h2>
                <p style={{ paddingTop: "24px" }}>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul className="icon-list">
                  <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                  <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="whyUs" style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="why">
            <h2>
              <b>Why Us?</b>
            </h2>
            <p>Mengapa harus pilih Binar Car Rental</p>
          </div>
          <div
            className="row row-cols-1 row-cols-md-4 g-4"
            style={{ maxWidth: "fit-content" }}
          >
            <div className="col">
              <div className="card" style={{ minHeight: "225px" }}>
                <div className="card-body">
                  <img src={iconJempol} alt="" />
                  <h5
                    className="card-title fw-bold"
                    style={{ margin: "20px 0" }}
                  >
                    Mobil Lengkap
                  </h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ minHeight: "225px" }}>
                <div className="card-body">
                  <img src={iconPrice} alt="" />
                  <h5
                    className="card-title fw-bold"
                    style={{ margin: "20px 0" }}
                  >
                    Harga Murah
                  </h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ minHeight: "225px" }}>
                <div className="card-body">
                  <img src={icon24Hourse} alt="" />
                  <h5
                    className="card-title fw-bold"
                    style={{ margin: "20px 0" }}
                  >
                    Layanan 24 Jam
                  </h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ minHeight: "225px" }}>
                <div className="card-body">
                  <img src={iconProffesional} alt="" />
                  <h5
                    className="card-title fw-bold"
                    style={{ margin: "20px 0" }}
                  >
                    Sopir Professional
                  </h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" style={{ paddingTop: "30px" }}>
        <div className="container tstmonial">
          <div className="text-center mb-4">
            <h2>
              <b>Testimonial</b>
            </h2>
            <p style={{ marginTop: "16px" }}>
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>

          <div
            className="karoselBackground container mt-5"
            style={{
              backgroundColor: "#f1f3ff",
              borderRadius: "5px",
              maxWidth: "832px",
              height: "270px",
              margin: "auto",
            }}
          >
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner testreview">
                <div className="carousel-item active">
                  <div className="testimonial">
                    <img src={testi1} alt="Person 1" />
                    <div className="testimonial-text">
                      <p style={{ color: "#f9cc00" }}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae metus in ex fringilla hendrerit.
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "20px",
                        }}
                      >
                        John Doe 10, Los Angeles
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <img src={testi2} alt="Person 2" />
                    <div className="testimonial-text">
                      <p style={{ color: "#f9cc00" }}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae metus in ex fringilla hendrerit.
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "20px",
                        }}
                      >
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container testimonial">
                    <img src={testi3} alt="Person 3" />
                    <div className="testimonial-text">
                      <p style={{ color: "#f9cc00" }}>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "20px",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae metus in ex fringilla hendrerit.
                      </p>
                      <p
                        style={{
                          color: "#000",
                          fontFamily: "Helvetica",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "20px",
                        }}
                      >
                        Jaden Smith 25, Yogyakarta
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
                style={{ marginLeft: "1px", marginRight: "auto" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="68"
                  viewBox="0 0 57 68"
                  fill="none"
                >
                  <path
                    d="M35.4836 51L21.2902 34L35.4836 17"
                    stroke="black"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
                style={{ marginLeft: "4px", marginRight: "auto" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="68"
                  viewBox="0 0 57 68"
                  fill="none"
                >
                  <path
                    d="M21.5164 51L35.7098 34L21.5164 17"
                    stroke="black"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-6 centered-card"
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "326px",
                width: "1168px",
                paddingTop: "50px",
              }}
            >
              <div
                className="card"
                style={{ backgroundColor: "#0d28a6", height: "255px" }}
              >
                <div
                  className="card-body text-center"
                  style={{ paddingBottom: "100px" }}
                >
                  <h5
                    className="card-title fw-bold fw-light"
                    style={{
                      fontSize: "36px",
                      color: "#ffffff",
                      padding: "30px",
                    }}
                  >
                    Sewa Mobil di (Sleman) Sekarang
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      fontFamily: "Helvetica",
                      fontStyle: "normal",
                      fontWeight: "300",
                      lineHeight: "20px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam et nam illum minima tenetur fugit aliquam, id
                    adipisci obcaecati assumenda enim necessitatibus. Minus,
                    sint blanditiis! Alias provident dolor quis ea.
                  </p>
                  <a
                    className="btn btn-success"
                    href="/cars"
                    style={{ borderRadius: "2px" }}
                  >
                    Mulai Sewa Mobil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className="faq-container"
        style={{ paddingTop: "30px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faQ" style={{ marginBottom: "20px" }}>
                <h3>
                  <b>Frequently Asked Questions</b>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" style={{ margin: "16px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore tenetur debitis, recusandae aspernatur, tempore
                        perspiciatis cum harum quod distinctio consectetur
                        mollitia unde. Saepe quia nulla facere, sunt id dicta!
                        Eius.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" style={{ margin: "16px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quod eveniet maiores molestiae? Placeat beatae,
                        nulla doloribus facilis iste dolores dignissimos,
                        perferendis at hic, nisi nihil laboriosam officia illo
                        accusamus ipsam.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" style={{ margin: "16px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Hic assumenda sit molestias quia nesciunt, harum
                        saepe iure nihil inventore omnis, quibusdam obcaecati
                        officia debitis minima sed? Vero ad minima harum!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" style={{ margin: "16px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sapiente, reiciendis voluptatibus? Molestias
                        reprehenderit non tempora quaerat esse officia inventore
                        voluptatum dignissimos minus, dolore aspernatur vero
                        eligendi ex corporis ratione ipsum?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item" style={{ margin: "16px" }}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Laudantium dolore neque laborum laboriosam ipsam,
                        voluptate excepturi quidem! Illum perferendis debitis
                        quisquam labore voluptas. Eveniet, ipsum. Dolores
                        doloribus accusamus at maxime!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "168px", marginBottom: "100px" }}>
        <div className="container">
          <div
            className="row"
            style={{
              margin: "auto",
              fontFamily: "Helvetica",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "20px",
            }}
          >
            <div className="col-md-3 footer">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-3 footer">
              <p>Our services</p>
              <p>Why Us</p>
              <p>Testimonial</p>
              <p>FAQ</p>
            </div>
            <div className="col-md-3 footer mb-3">
              <p>Connect With Us</p>
              <div
                className="imgConnect"
                style={{ width: "32px", height: "32px", display: "flex" }}
              >
                <img
                  src={iconFaceboook}
                  alt="Connect To Facebook"
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={iconInstagram}
                  alt="Connect To Instagram"
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={iconTwitter}
                  alt="Connect To Twitter"
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={iconMail}
                  alt="Connect To Email"
                  style={{ marginRight: "16px" }}
                />
                <img
                  src={iconTwich}
                  alt="Connect To Twitch"
                  style={{ marginRight: "16px" }}
                />
              </div>
            </div>
            <div className="col-md-3 footer">
              <p>Copyright Binar 2022</p>
              <img
                src={binarLogo}
                style={{ maxWidth: "100px" }}
                alt="Logo Binar"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
