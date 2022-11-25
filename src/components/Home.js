import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { db } from '../firebase';
import { addDoc, doc, collection } from 'firebase/firestore';
import CatPeek from '../images/cats_peeking.png'

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
        <h1 className='home-title'>The Pet Heaven Society</h1>
        <div className='home-bg-block-1'>
          <div className='home-info'></div>
        </div>
        <img src={CatPeek} className='cat-peek' />
        <div className='home-bg-block-2'>
          <div className='adoption-steps-container'>
            <div className="adoption-step">
              <h4>Step 1</h4>
            </div>
            <div className="adoption-step">
            </div>
            <div className="adoption-step">
            </div>
          </div>
        </div>
        <div className='home-bg-block-3'>
            <button type='button' className='release-button' onClick={ ()=> openReleaseForm()}>Release</button>
        </div>
        <div className='home-bg-block-4'></div>
    </div>}
    </div>
    
    
  )
}

export default Home