import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from "./components/404";
import RegisterPage from "./components/Register";
import SignIn from "./components/Login";
import CreateCarForm from "./components/CreateCar";
import SearchCars from "./components/SearchCars";
import reportWebVitals from './reportWebVitals';
// import Protected from './components/protected';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<App />}></Route>
      {/* <Route path="/cariMobil" element={<Protected><SearchCars /></Protected>}></Route> */}
      <Route path="/cars" element={<SearchCars />}></Route>
      <Route path="/Register" element={<RegisterPage />}></Route>
      <Route path="/createcar" element={<CreateCarForm />}></Route>
      <Route path="/Login" element={<SignIn />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
