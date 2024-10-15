import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Heroimg2 from '../Pages/Heroimg2'
import PricingCard from '../Pages/PricingCard'
import Work from '../Pages/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading= "PROJECTS." text="Some of my most recent works" />
      <Work/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
