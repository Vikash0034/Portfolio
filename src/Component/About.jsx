import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Heroimg2 from '../Pages/Heroimg2'
import AboutContent from '../Pages/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="I'm a Friendly Front-End Developer."  />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About
