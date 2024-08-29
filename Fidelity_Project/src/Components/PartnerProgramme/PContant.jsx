import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const PContant = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: "ease-out-cubic", // easing function
    });
  }, []);
  return (
    <div className='w-full px-4 pb-20 space-y-4 md:flex md:justify-center  '  data-aos="fade-up">
        <div className='lg:w-1/2'  data-aos="fade-up">
      <div className="heading "  data-aos="fade-up">
      <h3 className="text-4xl font-bold text-text_primary leading-relaxed">Partner inspired software, telecoms, energy and billing solutions.</h3>
      </div>
      <div className="paras text-base font-normal text-text_primary space-y-3"  data-aos="fade-up">
        <p>With over 40 years of experience in the telecom market, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions</p>
        <p>Our collaborative approach is designed to provide your business with greater value for both existing and new customers who require these essential services.</p>
      </div>
      </div>
      <div className="details-btns space-y-5 ">
        <div className="dtl-btn1 w-full h-auto bg-[#edf2fe] rounded-lg text-center px-12 py-5 cursor-pointer "  data-aos="fade-up"><h5 className='font-bold text-2xl text-text_primary'>Dealers programme</h5></div>
        <div className="dtl-btn2 w-full h-auto bg-[#edf2fe] rounded-lg text-center px-12 py-5 cursor-pointer "  data-aos="fade-up"><h5 className='font-bold text-2xl text-text_primary'>Wholesale Partner</h5></div>
        <div className="dtl-btn3 w-full h-auto bg-[#edf2fe] rounded-lg text-center px-12 py-5 cursor-pointer "  data-aos="fade-up"><h5 className='font-bold text-2xl text-text_primary'>Dealers programme</h5></div>
       
      </div>
    </div>
  )
}

export default PContant
