import React from 'react'
import './Aboutcontent.css'
import { Link } from 'react-router-dom'
import React1 from './Images/abrect1.avif'
import React2 from './Images/abrect2.avif'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                I'm a react front-end developer. I create responsive secure websites for my clients
            </p>
            <Link to="/contact" >
                <button className='btn'> CONTACT </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                <img src={React2} alt="react2" className='img' />
                </div>
                <div className="img-stack bottom">
                <img src={React1} alt="react1" className='img' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
