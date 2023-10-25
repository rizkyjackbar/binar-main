import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/Button/button";
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React by Bar
        </a>

        <p>Count: {count}</p>

        <Button
          // text={'Plus 1'}
          variant="outlined"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Plus+1
        </Button>

        <Button
          // text={'Reset'}
          variant="contained"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </Button>
      </header>
    </div>
  );
}

export default App;
