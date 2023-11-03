import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button/button";
// import Button from "@mui/material/Button";

function NotFound() {
  //   const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="car">
      <header className="App-header">
        <h1>404 | This Is Page Not Found</h1>
      </header>
    </div>
  );
}

export default NotFound;
