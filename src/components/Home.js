import React from 'react'
import CatPeek from '../images/cats_peeking.png'

const Home = () => {
  return (
    <div>
        <br />
        <h1>The Pet Heaven Society</h1>
        <div className='home-bg-block-1'></div>
        <img src={CatPeek} className='cat-peek' />
        <div className='home-bg-block-2'></div>
        <div className='home-bg-block-3'></div>
    </div>
  )
}

export default Home