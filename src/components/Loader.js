import React from 'react';
import DogSprite from '../images/doggo.gif'


const Loader = () => {


    return (
       
       <div className='loader-container'>
            <p className='loader-text'>Our pets are coming for you...</p>
            <img src={DogSprite} className='dog-sprite' />
            <div className='dot-container'>
                <div className='dots'></div>
            </div>
        </div>      
    
    )
}

export default Loader
