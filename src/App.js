import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import Products from './components/Products';



const App = () => (
  <Router>

      <Navbar className='menuitem' />

      <div className='container'>
      
      <Routes>
      
        <Route path="/" exact element={ <Home />} />
        <Route path="/Products" exact element={ <Products />} />
        <Route path="/About"  element ={ <About />} />
      </Routes>
      </div>
  </Router>
);

export default App