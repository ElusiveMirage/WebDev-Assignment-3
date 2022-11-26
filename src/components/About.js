import React from 'react'
import AboutUs from '../images/about-us-banner.jpg'

const About = () => {
  return (
    <div>

        <h1 className='about-title'> About Us </h1>
        <img src={AboutUs} className='aboutus-banner' alt='About Us'/>
        <hr className='aboutus-header'></hr>
        <div className='about-info-block'>
          <p className='about-info'>
              adsasssssssssssssssssssssssssssssssssssss
            <br /> 
              sada
            <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
              <br />
              sadagg
          </p>
          <div className="social-media-links">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-youtube"></a>
                <a href="#" className="fa fa-instagram"></a>
            </div>
        </div>
    </div>
  )
}

export default About