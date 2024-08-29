import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "../../assets/Images/Contact/Contact-image.webp";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: "ease-out-cubic", // easing function
    });
  }, []);
  return (
    <div className=" w-full  gap-16 lg:flex  lg:px-40 pb-16" data-aos="fade-up">
      <div className="contact w-full  flex flex-col space-y-6 p-6 lg:w-1/2 ">
        <div className="heading " data-aos="fade-up"> 
          <h3 className="font-bold text-4xl text-[#696969] ">
            Connect with us
          </h3>
        </div>
        <div className="desc">
          <p className="font-normal text-base text-[#696969] " data-aos="fade-up">
            If you’d like to find out more, why not call us now on 0800 840 6800
            or simply fill in our contact form below and we’ll be in touch.
          </p>
        </div>
        <div className="grid col-span-12" data-aos="fade-up">
          <div className="col-span-6">
            <div className="gap-4 space-x-2 flex " data-aos="fade-up">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md  focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="col-span-6 pt-5 gap-4 space-x-2 flex" data-aos="fade-up">
          <input
              type="email"
              placeholder="Your  Email"
              className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Contact Number"
              className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2]  rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
            />
           
          </div>
        </div>
        <div className="message" data-aos="fade-up">
          <textarea
            className="w-full h-32 p-4 border border-[#cdcdcd]  bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent resize-none"
            placeholder="How  can we help"
          ></textarea>
        </div>
        <div className="btn-submit w-full">
          <button className="w-full h-8 bg-Footer_links px-5 rounded-md text-white font-semi-bold hover:bg-blue-950 transform transition-transform duration-300 hover:-translate-y-1 ">Submit</button>
        </div>
      </div>
      <div className="image w-full space-y-6 lg:w-1/2" data-aos="fade-up">
        <img className=" rounded-lg" src={Image} alt="" />
        <h5 className="font-bold text-lg text-text_primary text-center" data-aos="fade-up">Prefer to pick up the phone and talk to us?</h5>
        <p className="0800 840 6800 text-sm font-normal text-text_primary text-center" data-aos="fade-up"><strong></strong> to talk to us about any of our services or partnerships.</p>
      </div>
    </div>
  );
};

export default Contact;
