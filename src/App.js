import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import Products from './components/Products';
import ShowPets from './components/ShowPets';



const App = () => (
  <Router>

      <Navbar className='menuitem' />

      <div className='container'>
      
      <Routes>
      
        <Route path="/" exact element={ <Home />} />
        <Route path="/Products" exact element={ <Products />} />
        <Route path="/About"  element ={ <About />} />
        <Route path="/About"  element ={ <ShowPets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>
  </Router>
);

export default App