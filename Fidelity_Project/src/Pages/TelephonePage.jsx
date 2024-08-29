import React from 'react'
import Header from '../Components/Header/Header'
import Testimonial from '../Components/Testimonials/Testimonial'
import Contact from '../Components/Contact/Contact2'
import Footer from '../Components/Footer/Footer'
import Artboard from '../Components/Artboard_Image/Artboard'
import ServiceCard from '../Components/Servicess/ServiceCard'
import CloudBanner from '../Components/Main-Banner/CloudBanner'
import TelephonyBanner from '../Components/Main-Banner/TelephonyBanner'

const TelephonePage = () => {
  return (
    <div>
      <Header/>
      <TelephonyBanner/>
      <ServiceCard/>
      <Testimonial/>
      <Artboard/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default TelephonePage
