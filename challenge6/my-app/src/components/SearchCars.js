import React, { useEffect, useState } from "react";
import mercedesImage from "../images/Mercedes Car EQC 300kW Edition - 900x598 1.png";
import icon_passanger from "../images/fi_users.png";
import iconFaceboook from "../images/icon_facebook.png";
import iconInstagram from "../images/icon_instagram.png";
import iconMail from "../images/icon_mail.png";
import iconTwitter from "../images/icon_twitter.png";
import iconTwich from "../images/icon_twitch.png";
import binarLogo from "../images/logoBinar.png";
import user1 from "../images/fi_users1.png";
import setting from "../images/fi_settings.png";
import calender from "../images/fi_calendar.png";

function SearchCars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [tipeDriver, setTipeDriver] = useState("default");
  const [tanggalSewa, setTanggalSewa] = useState("");
  const [waktuSewa, setWaktuSewa] = useState("");
  const [jumlahPenumpang, setJumlahPenumpang] = useState("");
  const [showTipeDriverAlert, setShowTipeDriverAlert] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  const handleFilters = () => {
    if (tipeDriver === "default") {
      setShowTipeDriverAlert(true);
      return;
    }

    setShowTipeDriverAlert(false);

    let filtered = cars.filter((car) => {
      if (tipeDriver !== "default") {
        const hasDriver = tipeDriver === "true";
        if (car.type === (hasDriver ? "Dengan Supir" : "Lepas Kunci")) {
          return false;
        }
      }

      // Filter by Tanggal Sewa
      if (tanggalSewa) {
        if (car.availableAt.slice(0, 10) <= tanggalSewa) {
          return false;
        }
      }

      // Filter by Waktu Sewa
      if (waktuSewa) {
        if (car.availableAt.slice(0, 10) <= waktuSewa) {
          return false;
        }
      }

      // Filter by Jumlah Penumpang
      if (jumlahPenumpang) {
        if (car.capacity < parseInt(jumlahPenumpang, 10)) {
          return false;
        }
      }

      return true;
    });

    // Sort the filtered array based
    filtered.sort((a, b) => a.capacity - b.capacity);

    setFilteredCars(filtered);
    console.log(filtered);
  };

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
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
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

      <section className="search">
        <div className="card container" style={{ marginTop: "65px" }}>
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div
                  className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto"
                  style={{ marginLeft: "5px" }}
                >
                  <label>Tipe Driver</label>
                  <select
                    className={`form-select ${
                      showTipeDriverAlert ? "is-invalid" : ""
                    }`}
                    aria-label="Default select example"
                    id="tipeDriver"
                    value={tipeDriver}
                    onChange={(e) => {
                      setTipeDriver(e.target.value);
                      setShowTipeDriverAlert(false);
                    }}
                  >
                    <option value="default">Pilih Tipe Driver</option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                  {showTipeDriverAlert && (
                    <div className="invalid-feedback">
                      Silakan pilih tipe driver terlebih dahulu.
                    </div>
                  )}
                </div>
                <div
                  className="col-lg-auto col-xl-auto col-md-auto"
                  style={{ marginLeft: "5px" }}
                >
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="dateInput"
                    value={tanggalSewa}
                    onChange={(e) => setTanggalSewa(e.target.value)}
                  />
                </div>
                <div
                  className="col-lg-auto col-xl-auto col-md-auto search__time"
                  style={{ marginLeft: "5px" }}
                >
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="timeInput"
                    value={waktuSewa}
                    onChange={(e) => setWaktuSewa(e.target.value)}
                  >
                    <option value="false">Pilih Waktu</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div
                  className="col-lg-auto col-xl-auto col-md-auto"
                  style={{ marginLeft: "5px" }}
                >
                  <label>Jumlah Penumpang (optional)</label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="passangerInput"
                      value={jumlahPenumpang}
                      onChange={(e) => setJumlahPenumpang(e.target.value)}
                    />
                    <span className="input-group-text bg-white">
                      <img src={icon_passanger} width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-xl-auto col-md-2 pt-4"
                  style={{ marginLeft: "5px" }}
                >
                  <button
                    className="btn btn-success"
                    id="load-btn"
                    onClick={() => {
                      handleFilters();
                      console.log(filteredCars);
                    }}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="filtered-cars" style={{ paddingTop: "30px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              {filteredCars.length === 0 ? (
                <div className="alert alert-danger text-center" role="alert">
                  <h2>Mohon Maaf, Mobil tidak tersedia di waktu ini.</h2>
                </div>
              ) : (
                <div className="row">
                  {filteredCars.map((car, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div
                        className="card cars shadow"
                        style={{ minHeight: "420px" }}
                      >
                        <div className="mt-3 mx-3">
                          <img
                            src={car.image}
                            className="card-img-top img-fluid car-image"
                            alt={car.manufacture}
                            style={{
                              height: "180px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title fs-6">{car.manufacture}</h5>
                          <h5 className="card-title fs-5 fw-bold">
                            Rp {car.rentPerDay} / hari
                          </h5>
                          <p className="cars__p">{car.description}</p>
                          <div className="row">
                            <div className="col-1">
                              <img
                                src={user1}
                                width="20px"
                                alt="Passenger Capacity"
                              />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.capacity} orang
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-1">
                              <img
                                src={setting}
                                width="20px"
                                alt="Transmission"
                                srcSet=""
                              />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.transmission}
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-1">
                              <img
                                src={calender}
                                width="20px"
                                alt="Year"
                                srcSet=""
                              />
                            </div>
                            <div className="col-10 ms-lg-2">
                              Tahun {car.year}
                            </div>
                          </div>
                          <a
                            href="/detailcar"
                            className="btn btn-success"
                            style={{ width: "100%", marginTop: "20px" }}
                          >
                            Go Somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          paddingTop: "168px",
          marginBottom: "100px",
          marginTop: "-90px",
        }}
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

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="./scripts/binar.js"></script>
      <script type="text/javascript" src="./scripts/app.example.js"></script>
      <script type="text/javascript" src="./scripts/car.example.js"></script>
      <script type="text/javascript" src="./scripts/main.example.js"></script>
    </div>
  );
}

export default SearchCars;
