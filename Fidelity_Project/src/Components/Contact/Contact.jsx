import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "../../assets/Images/Home/Artboard.webp";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);
  return (
    <div className=" w-full px-40 pb-32 gap-16 hidden lg:flex" data-aos="fade-up">
      <div className="contact w-1/2 flex flex-col space-y-6 p-6 ">
        <div className="heading " data-aos="fade-up">
          <h3 className="font-bold text-4xl text-[#696969] ">
            Connect with us
          </h3>
        </div>
        <div className="desc" data-aos="fade-up">
          <p className="font-normal text-base text-[#696969] ">
            If you’d like to find out more, why not call us now on 0800 840 6800
            or simply fill in our contact form below and we’ll be in touch.
          </p>
        </div>
        <div className="grid col-span-12">
          <div className="col-span-6">
            <div className="gap-4 space-x-2 flex " data-aos="fade-up">
              <input
                type="text"
                placeholder="Name"
                className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md  focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="col-span-6 pt-5 gap-4 space-x-2 flex" data-aos="fade-up">
            <input
              type="text"
              name=""
              id=""
              placeholder="Contact Number"
              className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2]  rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[47%] p-2 border border-[#cdcdcd] bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="message" data-aos="fade-up">
          <textarea
            className="w-full h-32 p-4 border border-[#cdcdcd]  bg-[#f2f2f2] rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent resize-none"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="radio flex items-center space-x-3" data-aos="fade-up">
          <input className="size-5 cursor-default" type="checkbox" name="" id="" />
          <p className="text-xs text-[#696969]">I agree to read the Fidility privacy policy</p>
        </div>
        <div className="btn-submit">
          <button className=" h-8 bg-Footer_links px-5 rounded-md text-white font-semi-bold hover:bg-blue-950 transform transition-transform duration-300 hover:-translate-y-1 ">Submit</button>
        </div>
      </div>
      <div className="image w-1/2">
        <img className=" rounded-b-lg" src={Image} alt="" />
      </div>
    </div>
  );
};

export default Contact;
