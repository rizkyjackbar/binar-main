import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Layanan() {
  const containerStyle = {
    paddingTop: "30px",
  };

  const isiLayananStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingTop: "50px",
  };

  return (
    <section id="layanan" style={containerStyle}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content">
              <div className="p-3">
                <img src="./Bahan/img_service.png" alt="gambar services" />
              </div>
            </div>
          </div>
          <div className="col isiLayanan align-center" style={isiLayananStyle}>
            <div className="container">
              <h2 className="layanan-car">
                <b>Best Car Rental for any kind of trip in Yogyakarta!</b>
              </h2>
              <p style={{ paddingTop: "24px" }}>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
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
  );
}

export default Layanan;
