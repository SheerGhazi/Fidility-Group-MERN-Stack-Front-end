import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Foundation_Image from "../../assets/Images/Home/Found-Image1.png";
import { Link } from "react-router-dom";

const Found = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleClick = () => {
    setShowImage((prevShowImage) => !prevShowImage);
  };

  return (
    <div className="w-full px-3 bg-[#f8f8f8] h-auto">
      <div className="heading pt-12" data-aos="fade-up">
        <h2 className="uppercase text-[#ababab] text-sm font-bold text-center tracking-widest">
          Discover fidelity group
        </h2>
      </div>
      <div className="sub-heading pt-7" data-aos="fade-up">
        <h3 className="font-bold text-3xl text-[#696969] text-center">
          We've been thriving{" "}
          <span className="text-[#cf142b]">since 2008</span>
        </h3>
      </div>

      <div
        className="info flex flex-col pt-12 md:flex-row justify-center md:items-center md:space-x-3 lg:gap-6 lg:pb-20 lg:px-52"
        data-aos="fade-up"
      >
        <div
          className="w-full bg-white rounded-sm p-5 border border-gray-200 transform transition-all duration-300 md:w-1/4 lg:w-[1/3] lg:px-5 py-2 lg:text-center hover:border-[#cf142b] cursor-pointer"
          onClick={handleClick}
        >
          <Link to="">
            <span className="font-medium text-sm uppercase tracking-widest text-[#696969]">
              Our mission
            </span>
          </Link>
        </div>
        <div className="spacer h-4"></div>
        <div
          className="w-full bg-white rounded-sm p-5 border border-gray-200 transform transition-all duration-300 md:w-[32vw] lg:w-[1/3] lg:px-5 py-2 lg:text-center hover:border-[#cf142b] cursor-pointer"
          onClick={handleClick}
        >
          <Link to="">
            <span className="font-medium text-sm uppercase tracking-widest text-[#696969]">
              Tech and Telecom Partners
            </span>
          </Link>
        </div>
        <div className="spacer h-4"></div>
        <div
          className="w-full bg-white rounded-sm p-5 border border-gray-200 transform transition-all duration-300 md:w-1/4 lg:w-[1/3] lg:px-5 py-2 lg:text-center hover:border-[#cf142b] cursor-pointer"
          onClick={handleClick}
        >
          <Link to="">
            <span className="font-medium text-sm uppercase tracking-widest text-[#696969]">
              Energy Partners
            </span>
          </Link>
        </div>
      </div>
      {showImage && (
        <div className="fnd-image flex justify-center">
          <img className="w-3/4 h-auto" src={Foundation_Image} alt="Foundation" />
        </div>
      )}
    </div>
  );
};

export default Found;
