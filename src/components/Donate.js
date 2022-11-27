import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DogHeart from '../images/dog-heart.jpg'

const About = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    
        setFormSubmitted(true);
    
    };

    const closeForm = () => {
        setFormSubmitted(false);
        navigate('/Web-Dev-Assignment-3');
    }

  return (
    <div>

        <h1 className='about-title'> Donate </h1>
        <img src={DogHeart} className='aboutus-banner' alt='Donate'/>
        <hr className='aboutus-header'></hr>
        <div className="donation-container">
            { !formSubmitted ? <h2>Want to support our cause ?</h2> : <h2>Thank you for donating !</h2>}
            { !formSubmitted ? <h2>Please fill in your details below</h2> : <h2>''</h2>}
            { !formSubmitted ? <form className="adoption-form" name="adoptionForm" onSubmit={handleFormSubmit}>
                <div class="icon-container">
                    <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                    <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                    <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                    <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
                  </div>
                <div className ="input-group">
                <label>Name on Card</label>
                <input type="text" name="cname" id="cname" required />
                </div>

                <div className="input-group">
                <label>Credit Card Number</label>
                <input type="text" id="ccnum" name="cardnumber" minlength="16" maxlength="16" placeholder="1111-2222-3333-4444" required /> 
                </div>

                <div className="input-group">
                <label>Full Name</label>
                <input type="text" name="fullname" id="fullname" required /> 
                </div>

                <div className="donation-cc-container">
                    <div className="input-group">
                      <label for="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" maxlength="2" placeholder="Month" />
                    </div>
                    <div className="input-group">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" maxlength="4" placeholder="Year" />
                    </div>
                    <div className="input-group">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" maxlength="3" placeholder="000" />
                    </div>
                  </div>

                <div>
                    <button type="submit" className="adoption-submit-button">Donate</button>
                </div>    

            </form> : 
            <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
                <div>
                    <button type="button" className="return-button" onClick={() => closeForm()}>Return</button>
                </div>   
            </div>
            }     
            
        </div>
            
    </div>
  )
}

export default About