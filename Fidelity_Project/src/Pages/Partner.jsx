import React from 'react'
import Header from '../Components/Header/Header'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import PBanner from '../Components/PartnerProgramme/PBanner'
import Banner from '../Components/Main-Banner/Banner'
import PContant from '../Components/PartnerProgramme/PContant'
import ImageSlider from '../Components/Slider/Slider'
import Testimonial2 from '../Components/Testimonials/Testimonial2'

const Partner = () => {
  return (
    <div>
      <Header/>
      {/* <Banner/> */}
      <PBanner/>
      <PContant/>
      <Testimonial2/>
      <ImageSlider/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Partner
