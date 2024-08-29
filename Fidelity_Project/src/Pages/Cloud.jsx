import React from 'react'
import Header from '../Components/Header/Header'
import Contact2 from '../Components/Contact/Contact2'
import Footer from '../Components/Footer/Footer'
import IoTBanner from '../Components/Main-Banner/IoTBanner'
import CloudBanner from '../Components/Main-Banner/CloudBanner'
import Testimonial2 from '../Components/Testimonials/Testimonial2'

const Cloud = () => {
  return (
    <div>
      <Header/>
      <CloudBanner/>
      <Testimonial2/>
      <Contact2/>
      <Footer/>
    </div>
  )
}

export default Cloud
