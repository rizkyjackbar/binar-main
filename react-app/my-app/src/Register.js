import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button/button";
// import Button from "@mui/material/Button";

function Register() {
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="car">
      <header className="App-header">
        <h1>This Is Page Register</h1>
      </header>
    </div>
  );
}

export default Register;
