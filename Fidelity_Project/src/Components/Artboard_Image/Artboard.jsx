import React from 'react'
import Artboard_Image from "../../assets/Images/Home/Artboard.webp"

const Artboard = () => {
  return (
    <div  className='w-full  py-12 lg:hidden  '>
      <img className='w-full h-auto px-5 ' src={Artboard_Image} alt="" />
    </div>
  )
}

export default Artboard
