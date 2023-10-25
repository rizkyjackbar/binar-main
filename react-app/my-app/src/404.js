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

  return <div className="404">
    <h1>404 | This Is Page Not Found</h1>
  </div>;
}

export default NotFound;
