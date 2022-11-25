import React from 'react'
import AboutUs from '../images/about-us-banner.jpg'

const About = () => {
  return (
    <div>

        <h1 className='about-title'> About Us </h1>
        <img src={AboutUs} className='aboutus-banner' alt='About Us'/>
        <hr className='aboutus-header'></hr>
        <div className='about-info-block'>
          <p className='about-info'></p>
        </div>
    </div>
  )
}

export default About