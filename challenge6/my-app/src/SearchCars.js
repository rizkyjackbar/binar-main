import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function SearchCars() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="car">
      <header className="App-header">
        <h1>This Is Page For Searching Cars</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
    </div>
  );
}

export default SearchCars;
