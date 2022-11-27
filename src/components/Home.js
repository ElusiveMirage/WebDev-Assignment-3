import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { db } from '../firebase';
import { addDoc, doc, collection } from 'firebase/firestore';
import CatPeek from '../images/cats_peeking.png'
import Logo from '../images/logo.png'
import PetHeaven from '../images/pet_heaven.png'
import PetHeavenLogo from '../images/logo.png'
import PetAdopted from '../images/pet-adopted.jpg'
import SadDog from '../images/sad-dog.png'

const Home = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [pet, setPet] = useState('')
    const [age, setAge] = useState('')

    const [openForm, setOpenForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const navigate = useNavigate();

    const openReleaseForm = () => {
      setOpenForm(true);
  }

  const closeReleaseForm = () => {
      setFormSubmitted(false);
      setOpenForm(false);
      navigate('/');
  }

  const handleFormSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const data = {
        Name: name,
        Email: email,
        Phone: number,
        Breed: pet,
        Age: age
      };
      console.log(data);      

    addDoc(collection(db, "Release Applications"), data);  
    setFormSubmitted(true);

};

  return (
    <div>
      { openForm ?  
      <div className="adoption-container">
      { !formSubmitted ? <h2>Want to release your pet ?</h2> : <h2>Thank you for applying !</h2>}
      { !formSubmitted ? <h2>Please fill in the form below</h2> : <h2>We will get back to you ASAP</h2>}
      { !formSubmitted ? <form className="adoption-form" name="adoptionForm" onSubmit={handleFormSubmit}>
          <div className ="input-group">
          <label>Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
          <label>Phone Number</label>
          <input type="number" name="number" id="number" onChange={(e) => setNumber(e.target.value)} required /> 
          </div>

          <div className="input-group">
          <label>Full Name</label>
          <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} required /> 
          </div>

          <div className="input-group">
          <label>Pet Breed</label>
          <input type="text" name="fullname" id="fullname" onChange={(e) => setPet(e.target.value)} required /> 
          </div>

          <div className="input-group">
          <label>Age</label>
          <input type="number" name="number" id="number" onChange={(e) => setAge(e.target.value)} required /> 
          </div>

          <div>
              <button type="submit" className="adoption-submit-button">Submit</button>
          </div>

          <div>
              <button type="button" className="cancel-button" onClick={() => setOpenForm(false)}>Cancel</button>
          </div>        

      </form> : 
      <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
          <div>
              <button type="button" className="return-button" onClick={() => closeReleaseForm()}>Return</button>
          </div>   
      </div>
      }     
      
  </div>
    : <div>
        <br />
        <img src={PetHeavenLogo} className='pet-heaven-logo' />
        <img src={PetHeaven} className='pet-heaven' />
        <div className='home-bg-block-1'>
          <div className='home-info'>
            <p>
              Every year, the number of cases of pets being abandoned continue to rise. The forlorn and miserable states they
              are left in have resolved us to make it our mission to save as many as we can and give them a safe haven to
              be taken in by a new, caring owners. Their suffering is often overlooked by many, but we at Pet Heaven refuse to turn
              a blind eye, persisting in changing the lives of as many of them as we can for the better.
              <br />
              <br />
              You can help our cause by adopting one of our animals our volunteering with us today.
            </p>
            <br />
            <div className='home-info-2'>
                  <p>Want to support us in our endeavors ?</p>
                  <button type="button" className="home-login-button" onClick={ ()=> navigate('/Login')}>Login</button>
                  <p>or</p>
                  <button type="button" className="home-signup-button" onClick={ ()=> navigate('/Signup')}>Sign Up</button>
                  <p>to join us !</p>
            </div>
          </div>
          <img src={PetAdopted} className='pet-adopted' />
        </div>
        <img src={CatPeek} className='cat-peek' />
        <div className='home-bg-block-2'>
          <div className='adopt-pet-link'>
                    <p>Want to adopt a pet from us ?</p>
                    <button type="button" className="show-pets-button" onClick={ ()=> navigate('/Pets')}>Show Pets</button>
              </div>
          <div className='adoption-steps-container'>
            <div className="adoption-step">
              <h4>Step 1</h4>
              <p className='adoption-step-text'>Choose a pet from our list available for adoption</p>
              <i class="fa fa-solid fa-list"></i>
            </div>
            <div className="adoption-step">
              <h4>Step 2</h4>
              <p className='adoption-step-text'>Fill in a form with your details for us to get in touch with you</p>
              <i class="fa fa-solid fa-pen"></i>
            </div>
            <div className="adoption-step">
              <h4>Step 3</h4>
              <p className='adoption-step-text'>And come on down to our location for an interview !</p>
              <i class="fa fa-solid fa-clipboard-question"></i>
            </div>
          </div>
        </div>
        <div className='home-bg-block-3'>
          <h5>Want to release your pet into our care ?</h5>
          <img src={SadDog} className='sad-dog' />
            <button type='button' className='release-button' onClick={ ()=> openReleaseForm()}>Apply For Release</button>
        </div>
        <div className='home-bg-block-4'></div>
    </div>}
    </div>
    
    
  )
}

export default Home