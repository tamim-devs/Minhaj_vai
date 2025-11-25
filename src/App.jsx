import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={  <Home/>} />    
    <Route path="/about" element={  <About/>} />    
    <Route path="/contact" element={  <Contact/>} />    
    <Route path="/works" element={  <Works/>} />    
    </Routes>
   
    </>
  )
}

export default App