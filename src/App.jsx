import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './pages/Contact';
import Location from './pages/Location';
import About from './pages/About';

const App = () => {
  return (
 <Router>
      <Navbar />
      
      {/* Define routes for the application */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
