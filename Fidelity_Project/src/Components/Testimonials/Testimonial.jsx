import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Star_Icon from "../../assets/Images/Home/trustpilot-icon.png";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);

  return (
    <div className="px-48 py-9 bg-gray-100 space-y-8 hidden lg:block ">
      <div className="heading text-[#ababab] font-bold text-sm uppercase tracking-widest text-center" data-aos="fade-up">Testimonials</div>
      <div className="Sub-heading text-[#696969] text-4xl font-bold tracking-widest text-center" data-aos="fade-up">What our customers have to say</div>
      <div className="spacer h-7"></div>
      <div className="reviews w-full flex gap-10 " data-aos="fade-up">
        <div className="review1 w-1/2 h-auto bg-white cursor-pointer rounded-md flex flex-col px-6 pt-6 pb-28 space-y-6  transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400 ">
          <div className="flex items-center space-x-4">
            <div className="star">
              <img className="size-12 rounded-full" src={Star_Icon} alt="" />
            </div>
            <div className="name font-medium text-xl text-gray-700">
              Methew Finn / Bussiness Manager
            </div>
          </div>
          <div className="description">
            <p className=" font-normal text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum eius enim itaque ut obcaecati exercitationem expedita iure
              vel perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore similique vel saepe dolorem eveniet
              expedita voluptatibus exercitationem facere. Quo, corporis.
            </p>
          </div>
        </div>
        <div className="review2 w-1/2 h-auto bg-white rounded-md cursor-pointer flex flex-col px-6 pt-6 pb-28 space-y-6  transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        
        <div className="flex items-center space-x-4">
            <div className="star">
              <img className="size-12 rounded-full" src={Star_Icon} alt="" />
            </div>
            <div className="name font-medium text-xl text-gray-700">
              Methew Finn / Bussiness Manager
            </div>
          </div>
          <div className="description">
            <p className=" font-normal text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum eius enim itaque ut obcaecati exercitationem expedita iure
              vel perferendis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore similique vel saepe dolorem eveniet
              expedita voluptatibus exercitationem facere. Quo, corporis.
            </p>
          </div>

        </div>
      </div>
      <div className="spacer h-16"></div>
    </div>
  );
};

export default Testimonial;
