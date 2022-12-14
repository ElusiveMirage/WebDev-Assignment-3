import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { app } from '../firebase';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');    

    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } 
        else {
            x.type = "password";
    }
    }

    const handleSignupSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        
        const date = new Date();
  
        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            if (response && response.user)
            {
                const data = {
                    Name: name,
                    Email: email,
                    Phone: number,
                    DateRegistered: date.getDate().toString() + "/" + date.getMonth().toString() + "/" + date.getFullYear().toString()
                  };
                  console.log(data);      

                setDoc(doc(db, "Users", response.user.uid,), data);
            }  
            toast.success('Registration Success!')
                setTimeout(() => {
                    navigate('/')
                  }, 2000);
        })
        .catch(error => {   
            switch(error.code) {
                case 'auth/email-already-in-use':
                    toast.error('Email already in use !')
                break;
                default:
            }
        })
    };

    const navigate = useNavigate();

  return (
    <div className="signup-container">
        <ToastContainer
            position="top-center"
            autoClose={1000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            
          <div>
            <h1 className="signup-title">Join us at Pet Heaven !</h1>
          </div>
          
          <form className="signup-form" name="signupForm" onSubmit={handleSignupSubmit}>
            <div className ="input-group">
              <label>Email</label>
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required /> 
            </div>

            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} required /> 
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="number" name="phone" id="phone" onChange={(e) => setNumber(e.target.value)} required /> 
            </div>

            <div>
              <label>Show Password</label>
              <input type="checkbox" className="checkbox" onClick={showPassword} />
              <p>By creating an account you agree to our <a href='#/' style={{color: "blue", textDecoration: "underline"}}>Terms & Privacy</a></p>
            </div>
            
            <div>
                <button type="submit" className="signup-submit-button">Confirm Registration</button>
            </div>        

          </form>
        </div>
  )
}

export default SignupForm