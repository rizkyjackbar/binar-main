import React from "react";
import mercedesImage from "./images/Mercedes Car EQC 300kW Edition - 900x598 1.png";
import iconFaceboook from "./images/icon_facebook.png";
import iconInstagram from "./images/icon_instagram.png";
import iconMail from "./images/icon_mail.png";
import iconTwitter from "./images/icon_twitter.png";
import iconTwich from "./images/icon_twitch.png";
import binarLogo from "./images/logoBinar.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
                <a
                  className="nav-link"
                  style={{ marginRight: "30px" }}
                  href="#ourServices"
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
  );
}

function OurServices() {
  return (
    <section id="ourServices" style={{ marginBottom: "-115px" }}>
      <div style={{ backgroundColor: "#f1f3ff" }}>
        <div className="row">
          <div className="col">
            <div
              className="p-3"
              style={{ marginLeft: "50px", marginTop: "50px" }}
            >
              <h1>
                <b>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</b>
              </h1>
              <div
                style={{ width: "468px", height: "60px", marginTop: "16px" }}
              >
                <p>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
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
    </section>
  );
}

function SearchSection() {
  return (
    <section className="search">
      <div className="card container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row search__card mx-lg-5 py-3 px-4">
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                <label>Tipe Driver</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipeDriver"
                >
                  <option value="default" selected>
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="true">Dengan Supir</option>
                  <option value="false">Tanpa Supir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="dateInput"
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                <label>Pilih Waktu</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="timeInput"
                >
                  <option value="false" selected>
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00">08.00 WIB</option>
                  <option value="09:00">09.00 WIB</option>
                  <option value="10:00">10.00 WIB</option>
                  <option value="11:00">11.00 WIB</option>
                  <option value="12:00">12.00 WIB</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto">
                <label>Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="passangerInput"
                  />
                  <span className="input-group-text bg-white">
                    <img src="images/fi_users.png" width="20px" alt="" />
                  </span>
                </div>
              </div>

              <div className="col-lg-2 col-xl-auto col-md-2 pt-4">
                <button className="btn btn-success" id="load-btn">
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarsSection() {
  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row" id="cars-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section
      style={{ paddingTop: "168px", marginBottom: "100px", marginTop: "-90px" }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            margin: "auto",
            fontFamily: "Helvetica",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 300,
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
                alt="Connect To Facebok"
                style={{ marginRight: "16px" }}
              />
              <img
                src={iconInstagram}
                alt="Connect To Instagram"
                style={{ marginRight: "16px" }}
              />
              <img
                src={iconTwitter}
                alt="Connect To Twittet"
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
  );
}

export default function SearchCars() {
  return (
    <div>
      <Navbar />
      <OurServices />
      <SearchSection />
      <CarsSection />
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="./scripts/binar.js"></script>
      <script type="text/javascript" src="./scripts/app.example.js"></script>
      <script type="text/javascript" src="./scripts/car.example.js"></script>
      <script type="text/javascript" src="./scripts/main.example.js"></script>
    </div>
  );
}
