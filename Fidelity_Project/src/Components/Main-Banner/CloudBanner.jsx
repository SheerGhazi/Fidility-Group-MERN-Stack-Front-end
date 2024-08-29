import React from 'react'
import ButtonRed from "../Buttons/ButtonRed"; 

const CloudBanner = () => {
  return (
    <div className="relative bg-Banner-Image7 bg-cover bg-no-repeat bg-center h-[70vh] px-5 space-y-4 md:h-[60vh] lg:h-[60vh] lg:px-40">
      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full lg:w-1/2 space-y-4 lg:px-10 ">

      <h4 className="heading text-white pt-40  text-center   font-semibold text-base md:text-lg lg:text-base  lg:pt-20 lg:text-start" >
      Empowering everything as a service.
        </h4>
        <h1 className="text-white text-4xl text-center   font-bold md:text-5xl lg:text-5xl lg:text-start  ">
        Get your business in the cloud
        </h1>
     
        

        <div className="spacer h-4"></div>
        <div className='btn text-center  lg:text-start '>
        <ButtonRed />

        </div>
      </div>
    </div>
  )
}

export default CloudBanner
