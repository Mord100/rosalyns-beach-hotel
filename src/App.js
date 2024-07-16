import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Testimonials/>
      <Footer />
    </Router>
  );
}

export default App;
