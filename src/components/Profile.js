import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const Profile = () => {

  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  
  const auth = getAuth();  
  const currentUser = auth.currentUser;

  useEffect(() => {   

      let authToken = sessionStorage.getItem('Auth Token')
    
      if (authToken) {
          navigate('/Profile')
      }

      if (!authToken) {
          navigate('/login')
      }    
      
      if(currentUser != null)
      {
          const docRef = doc(db, "Users", currentUser.uid);
          const docSnapshot = getDoc(docRef)
          .then(docSnapshot => {
            console.log(docSnapshot.data());
            setName(docSnapshot.data().Name);
            setEmail(docSnapshot.data().Email);
            setNumber(docSnapshot.data().Phone);
            setDate(docSnapshot.data().DateRegistered);
        })
      }   
  
  }, [navigate])

  return (
    <div>

        <h1>My Profile</h1>
        <div className="profile-container">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Phone : {number}</p>
          <p>Member Since : {date}</p>
        </div>
    </div>
  )
}

export default Profile