import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';
import dog from '../doggo.png';

const ShowDog = ({ data, loading }) => {
    
    const render = ( data, loading ) => {

        if (loading === true ) return (
            <div className='loader-container'>
                <SpriteAnimator
                    sprite={dog}
                    width={35}
                    height={24}
                    startFrame={1}
                    frameCount={8}
                    fps={12}
                    scale={0.5}
                    direction={'horizontal'}
                    shouldAnimate={true}
                    wrapAfter={8}
                    className={"dog-sprite"}
                />
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

     ) 
    }



    return (
        <div>
            <div  className='showlist'>
            
            {   render( data, loading )  } 
  
            </div>

        </div>


    )
}

export default ShowDog
