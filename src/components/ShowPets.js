import React, { useState } from 'react';
import db from '../firebase';
import { collection, doc, setDoc } from "firebase/firestore";

const ShowPets = () => {
    const [loading, setLoading] = useState(false);
    const render = () => {

        /* if (loading === true ) return (
            <div className='loader-container'>
                <div className='dot-container'>
                    <div className='dots'></div>
                </div>
            </div>      
        )

     return (    data.map( dog => (
            <div className='flip-card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img key={dog.id} className='image' src= { dog } alt='dog img' />
                    </div>
                    
                    <div className='card-back'>
                        <h1>Doggo</h1>
                        <p>This is a cute doggo</p>
                    </div>
                </div>
            </div>
          )
     )

     )  */
    }



    return (
        <div>
            <div  className='showlist'>
            
            {   render  } 
  
            </div>

        </div>


    )
}

export default ShowPets

