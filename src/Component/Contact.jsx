import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Heroimg2 from '../Pages/Heroimg2'
import Form from '../Pages/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="Let's Have a Chat" />
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
