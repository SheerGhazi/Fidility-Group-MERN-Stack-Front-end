import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from the assets directory
import image1 from "../../assets/Images/Home/Slider1.webp";
import image2 from "../../assets/Images/Home/Slider2.webp";
import image3 from "../../assets/Images/Home/Slider3.webp";
import image4 from "../../assets/Images/Home/Slider2.webp";
import image5 from "../../assets/Images/Home/Slider1.webp";
import image6 from "../../assets/Images/Home/Slider3.webp";

const ImageSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: "ease-out-cubic", // easing function
    });
  }, []);
  const images = [image1, image2, image3, image4, image5, image6];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full h-auto px-4 py-16 bg-gray-100 space-y-9 ">
      <div className="heading font-bold text-3xl text-center text-[#696969] tracking-wider" data-aos="fade-up">
        Fidelity group - <br /> Multi award winners
      </div>

      <div className="relative w-full max-w-lg mx-auto overflow-hidden  " data-aos="fade-up">
        <div
          className={`flex transition-transform duration-1000 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full flex-shrink-0 lg:1/2 "
              alt={`Slide ${index + 1}`}
            />
            
          ))}
        </div>
      </div>

      <div className="btn2 flex justify-center items-center" data-aos="fade-up">
        <a href="#">
          <button className='h-14 px-11 border border-gray-200 rounded-md text-[#cf142b] font-normal text-sm hover:bg-blue-900 hover:border-[#dd3333] transform transition-transform duration-300 hover:-translate-y-1'>
            Find out more
          </button>
        </a>
      </div>
    </div>
  );
};

export default ImageSlider;
