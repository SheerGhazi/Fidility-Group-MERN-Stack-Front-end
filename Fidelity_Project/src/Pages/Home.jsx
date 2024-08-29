import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Main-Banner/Banner'
import Factors from '../Components/Factor.jsx/Factors'
import Artboard from '../Components/Artboard_Image/Artboard'
import Found from '../Components/Foundation/Found'
import Slider from '../Components/Slider/Slider'
import Testimonial from '../Components/Testimonials/Testimonial'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import BroadBrand from '../Components/Testimonials/BroadBrand'

const Home = () => {
  return (
    <div>
       <Header/>
      <Banner/>
      <Factors/>
      <Found/>
      <BroadBrand/>
      <Slider/>
      <Testimonial/>
      <Artboard/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
