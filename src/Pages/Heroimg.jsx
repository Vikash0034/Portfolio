import React from 'react'
import './Heroimg.css';
import Intro from '../assets/background.jpeg'
import { Link } from 'react-router-dom';


const Heroimg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='into-img' 
        src={Intro} 
        alt="Intro" />
      </div>
      <div className="content">
        <p>HI,I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div className="">
            <Link to="/project" className='btn'>Project</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
