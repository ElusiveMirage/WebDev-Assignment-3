import React, { useState } from "react";
import MapSection from './Map'
import { app } from '../firebase';
import { db } from '../firebase';
import { addDoc, doc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CatWave from '../images/cat_waving.png'

const Contact = () => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');    
    const [message, setMessage] = useState('');    
    const [formSubmitted, setFormSubmitted] = useState(false);

    const location = {
        address: '59 Sungei Tengah Road, Block Q #01-29, Singapore 699014',
        lat: 1.3815181070835898,
        lng: 103.72599654085612,
      }

    const handleEnquirySubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
  
        const data = {
            Name: name,
            Email: email,
            Phone: phoneNumber,
            Message: message
          };
          console.log(data);      

        addDoc(collection(db, "Enquiries"), data);
        setFormSubmitted(true);

    };

  return (
    <div>
        
        <h1>Contact Us</h1>
        <hr />
        <div className="contact-page-info">
            
            <h2>Support Hours: Monday to Fridays (Excluding PH), 10AM to 6PM SGT</h2>
            <div className="contact-flex-container">
                <div>General Enquiries
                    <br />
                    <br />
                    Tel: 65721329
                    <br />
                    Email: support@petheaven.com
                    <br />
                    Response time: 1-7 working days</div>
                <div>Appointment Enquiries
                    <br />
                    <br />
                    Tel: 65721665
                    <br />
                    Email: petheaven@petheaven.com
                    <br />
                    Response time: 1-3 working days</div>
                    <div>Membership Enquiries
                    <br />
                    <br />
                    Email: joinus@petheaven.com
                    <br />
                    Response time: 1-3 working days</div>
            </div>
        </div>
        <div className='contact-bg-block-1'></div>
        <div>
            <MapSection location={location} zoomLevel={18} />
            
            <div className="enquiry-container">
                <img src={CatWave} className='cat-wave' />
                { !formSubmitted ? <h2>Have questions? Get in touch with us !</h2> : <h2>Thank you for your enquiry !</h2>}
                { !formSubmitted ? <form className="enquiry-form" name="enquiryForm" onSubmit={handleEnquirySubmit}>
                    <div className ="input-group">
                    <label>Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="input-group">
                    <label>Phone Number</label>
                    <input type="number" name="number" id="number" onChange={(e) => setPhoneNumber(e.target.value)} required /> 
                    </div>

                    <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} required /> 
                    </div>

                    <div className="input-group">
                    <label>Message</label>
                    <textarea type="text" name="message" id="message" style={{height: "200px", width:"100%", fontFamily: "'montserrat', sans-serif", color: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(77, 77, 77, 0.753)"}} onChange={(e) => setMessage(e.target.value)} required /> 
                    </div>

                    <div>
                        <button type="submit" className="enquiry-submit-button">Submit</button>
                    </div>        

                </form> : 
                <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                </div>}
                
            </div>

        </div>
    </div>
  )
}

export default Contact