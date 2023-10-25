import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button/button";
// import Button from "@mui/material/Button";

function Car() {
//   const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return <div className="car">
    <h1>This Is Page List Car</h1>
  </div>;
}

export default Car;
