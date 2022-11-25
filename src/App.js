import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';
import ShowPets from './components/ShowPets';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import Contact from './components/Contact'
import Donate from './components/Donate';

import PawPrints from './images/paw_prints_heart.png'

const App = () => (

  <Router>

      <Navbar className='menuitem' />

      <img src={PawPrints} className='paw-prints' />

      <div className='container'>
      
      <Routes>
        <Route path="/" exact element={ <Home />} />
        <Route path="/Contact" exact element={ <Contact />} />
        <Route path="/About"  element ={ <About />} />
        <Route path="/Pets"  element ={ <ShowPets />} />
        <Route path="/Login"  element ={ <LoginForm />} />
        <Route path="/Signup"  element ={ <SignupForm />} />
        <Route path="/Profile"  element ={ <Profile />} />
        <Route path="/Donate"  element ={ <Donate />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>

      <div className='footer'>
          <p className='footer-text'>Pet Heaven is a certified charity. (UEN Charity Registration No. T03SS6942E) </p>
      </div>
      
  </Router>
);

export default App