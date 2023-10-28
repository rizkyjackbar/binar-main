import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from "./404";
import RegisterPage from "./Register";
import SignIn from "./Login";
import SearchCars from "./SearchCars";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Homepage" element={<App />}></Route>
      <Route path="/cariMobil" element={<SearchCars />}></Route>
      <Route path="/Register" element={<RegisterPage />}></Route>
      <Route path="/Login" element={<SignIn />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
