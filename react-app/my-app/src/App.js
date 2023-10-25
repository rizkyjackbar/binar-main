// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Dashboard.css';
import Navbar from './components/navbar/navbar';
import OurServices from './components/ourServices/OurServices';
import Layanan from './components/layanan/layanan';

function App() {
  return (
    <div className="App">
      <Navbar />
      <OurServices />
      <Layanan />
      {/* <WhyUs />
      <Testimonial />
      <FAQ />
      <Footer /> */}
    </div>
  );
}

export default App;