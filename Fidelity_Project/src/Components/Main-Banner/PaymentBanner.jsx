import React, { useEffect } from "react";
import ButtonRed from "../Buttons/ButtonRed";
import Payment from "../../assets/Images/Payment/Payment.png"
import AOS from "aos";
import "aos/dist/aos.css";

const PaymentBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);
  return (
    <div className="flex lg:px-40">
      <div
        className="relative  h-[60vh] px-5 space-y-4 md:h-[65vh] lg:h-[80vh] "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 80%)" }}
      >
       

         {/* Content Container */}
         <div className="relative z-20 w-full pt-26  space-y-2 lg:px-10 lg:pt-2 ">
          <h4 className="heading text-gray-500 text-center font-semibold text-base md:text-lg lg:text-base pt-4 lg:pt-20 lg:text-start">
            Payment-Solutions-As-A-Service
          </h4>
          <h1 className="text-gray-800 text-4xl text-center font-bold md:text-5xl lg:text-5xl lg:text-start ">
            Comprehensive Payment Solutions
          </h1>
          <h1 className="text-Footer_links text-4xl text-center font-bold md:text-5xl lg:text-5xl lg:text-start ">
            for Bussiness of All Sizes
          </h1>
          <h4 className="heading text-black text-center font-semibold text-xl md:text-lg lg:text-3xl  lg:text-start">
            Card Machines, ePOS Systems, and more
          </h4>

          <div className="spacer h-4 "></div>
          <div className="btn text-center lg:text-start">
            <ButtonRed />
          </div>
        </div>
      </div>
      <div className="img hidden md:hidden lg:flex lg:w-1/2 lg:h-auto " data-aos="fade-up">
      <img src={Payment} alt="" /></div>
    </div>
  );
};

export default PaymentBanner;
