import React, { useEffect, useState } from 'react';
// import logo from "./logo.svg";
import './App.css';
// import Button from "./components/Button/button";
// import Button from "@mui/material/Button";

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
    )
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Car">
      <header className="App-header">
        <h1>This Is Page List Car</h1>
        {cars.map((item) => (
          <div>{item.plate}</div>
        ))}
      </header>
    </div>
  );
}

export default Car;
