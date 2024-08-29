import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Main-Banner/Banner'
import Testimonial2 from '../Components/Testimonials/Testimonial2'
import Testimonial from '../Components/Testimonials/Testimonial'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import ConBanner from '../Components/Main-Banner/ConBanner'
import BroadBrand from '../Components/Testimonials/BroadBrand'

const ConnectivityPage = () => {
  return (
    <div>
      <ConBanner/>
      <Testimonial2/>
      <BroadBrand/>
      <div className=''>
      <Testimonial/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default ConnectivityPage
