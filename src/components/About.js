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
              Pet Heaven is a registered charity and home to over 300 dogs and cats. The animals under our care
              range from those abandoned by their owners, strays, abused and traumatised. 
              <br />
              <br />
              Our mission is to rescue as
              many as we can and bring them into the care of a new, loving family.
              <br />
              <br />
              We have over 80 employed staff and volunteers who help to keep our cause going, carrying out tasks such
              as feeding, treating them, bringing them for veterinary checks, making sure to keep them healthy and happy.
              In order to keep our operatings going, we depend greatly on the support of the public. Some ways the public
              can assist us through monetary and food donations, and helping to foster the animals in our care.
              <br />
              <br />
              If you are interested in seeing more of the work we do, follow us on our social media below!

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