import React from 'react'



const Banner = () => {
  return (
    <div className="bg-Banner-Image bg-cover bg-no-repeat bg-center h-[65vh] px-5 space-y-4  md:h-[75vh] lg:h-[80vh] "  style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 65%)" }}>
        <h1 class="heading text-white font-bold text-base pt-20  text-center md:text-lg lg:text-2xl lg:pt-36">Business broadband, telecoms, IoT, software, and energy procurement solutions.</h1>
      <h2 className="text-Footer_links text-4xl font-bold text-center md:text-5xl lg:text-6xl ">Empowering <span className='text-white inline-block '>everything as a </span> service</h2>
      
    </div>
  )
}

export default Banner
