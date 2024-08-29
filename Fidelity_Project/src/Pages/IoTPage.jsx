import React from 'react'
import Header from '../Components/Header/Header'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import IoTBanner from '../Components/Main-Banner/IoTBanner'
import Artboard from '../Components/Artboard_Image/Artboard'
import BroadBrand from '../Components/Testimonials/BroadBrand'

const IoTPage = () => {
  return (
    <div>
      <Header/>
      <IoTBanner/>
      <BroadBrand/>
      <Artboard/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default IoTPage
