import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OurServices() {
  const sectionStyle = {
    backgroundColor: "#f1f3ff",
  };

  const containerStyle = {
    marginLeft: "50px",
    marginTop: "50px",
  };

  const carContainerStyle = {
    justifyContent: "flex-end",
    display: "flex",
    width: "704px",
    height: "243px",
    borderTopLeftRadius: "60px",
    backgroundColor: "#0d28a6",
    marginRight: "10px",
    flexShrink: 0,
    marginTop: "164px",
  };

  const imageStyle = {
    width: "704px",
    height: "407px",
    flexShrink: 0,
    marginTop: "-150px",
  };

  return (
    <section id="ourServices">
      <div style={sectionStyle}>
        <div className="row">
          <div className="col">
            <div className="p-3" style={containerStyle}>
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
                href="../challenge2/task2/tamplate-task-2/public/index.example.html"
                style={{ borderRadius: "2px" }}
              >
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
          <div className="col backgroundCar" style={carContainerStyle}>
            <div className="col-container">
              <div className="col">
                <img
                  src="./Bahan/Mercedes Car EQC 300kW Edition - 900x598 1.png"
                  style={imageStyle}
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

export default OurServices;
