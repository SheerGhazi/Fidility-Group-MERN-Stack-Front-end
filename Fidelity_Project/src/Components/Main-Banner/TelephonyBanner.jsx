import React from 'react'
import ButtonRed from "../Buttons/ButtonRed"; 

const TelephonyBanner = () => {
  return (
    <div>
        <div className="relative bg-Banner-Image8 bg-cover bg-no-repeat bg-center h-[60vh] px-5 space-y-4 md:h-[65vh] lg:h-[80vh] lg:px-40"  style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 80%)" }} >
            
      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full pt-12 lg:w-1/2 space-y-4 lg:px-10 lg:pt-2 ">

      <h4 className="heading text-white text-center font-semibold text-base md:text-lg lg:text-base pt-4 lg:pt-20 lg:text-start" >
      Empowering everything as a service.
        </h4>
        <h1 className="text-white text-4xl text-center font-bold md:text-5xl lg:text-5xl lg:text-start ">
        Get your business in the cloud
        </h1>
     
        

        <div className="spacer h-4 "></div>
        <div className="btn text-center lg:text-start">
        <ButtonRed />
        </div>
        
      </div>
    </div>
      
    </div>
  )
}

export default TelephonyBanner
