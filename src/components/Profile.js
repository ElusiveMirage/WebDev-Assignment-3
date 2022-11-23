import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase';
import { getAuth } from 'firebase/auth'

const Profile = () => {

  let navigate = useNavigate();

  const [uid, setUID] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const authentication = getAuth();
  authentication.verifyIdToken(sessionStorage.getItem('Auth Token'))
      .then((decodedToken) => {
        setUID(decodedToken.uid)
        
      })
      .catch((error) => {
        // Handle error
    });

  useEffect(() => {
      
      let authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
          navigate('/Profile')
      }

      if (!authToken) {
          navigate('/login')
      }
  }, [navigate])

  return (
    <div>
        
        <h1>My Profile</h1>

    </div>
  )
}

export default Profile