import React from 'react'
import Contact2 from '../Components/Contact/Contact2'
import Footer from '../Components/Footer/Footer'
import HeaderRed from '../Components/Header/HeaderRed'

const ContactPage = () => {
  return (
    <div>
      <HeaderRed/>
      <div className='pt-16'>
      <Contact2/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage
