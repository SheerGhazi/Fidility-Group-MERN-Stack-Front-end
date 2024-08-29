import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Particle_Image from "../../assets/Images/Connectivity and data/Particle.png";
import coins from "../../assets/Icons/Home/coins.png";
import network from "../../assets/Icons/Home/network.png";
import cloud from "../../assets/Icons/Home/download.png";
import flash from "../../assets/Icons/Home/flash.png";
import globe from "../../assets/Icons/Home/globe.png";
import { Link } from "react-router-dom";

const BroadBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="lg:px-60 py-20 bg-gray-300 " data-aos="fade-up">
      <div className="heading text-4xl text-text_primary font-bold text-center pt-3 pb-12" switching your business energy>
        We’ll make{" "}
        <span className="text-Footer_links">
          switching your business energy
        </span>
        {" "}
         easy
      </div>
      <div className="flex-content px-4  lg:flex gap-3"  data-aos="fade-up">
        <div class="h-full w-full bg-white bg-opacity-75 px-4 pt-9 pb-10 cursor-pointer lg:pb-5 lg:w-1/4    overflow-hidden  relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class=" mb-7" src={network} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Gas{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Say goodbye to confusing gas tariffs and time-consuming paperwork.
            We’ll support you with everything from metre reading to
            understanding your bill.lorem6 Lorem ipsum dolor sit amet.
          </p>
          <Link class="text-[#cf142b] inline-flex items-center  mt-8 hover:text-blue-900 " to="/Services">
            Find out more
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="spacer h-4"></div>
        {/* 2 */}

        <div class="h-full w-full bg-white bg-opacity-75 px-4 pt-9 pb-10 cursor-pointer lg:pb-5 lg:w-1/4   overflow-hidden  relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class=" mb-7" src={flash} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Electricity{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            A new way to procure business electricity – with access to some of
            the UK’s top electricity suppliers, you can leave the lengthy price
            comparison process to us. Lorem ipsum dolor sit amet consectetur
            
          </p>
          <Link class="text-[#cf142b] inline-flex items-center  mt-8 hover:text-blue-900 " to="/Services">
            Find out more
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="spacer h-4"></div>
        {/* 3 */}
        <div class="h-full w-full bg-white bg-opacity-75 px-4 pt-9 pb-10 cursor-pointer lg:pb-5 lg:w-1/4   overflow-hidden  relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class=" mb-7" src={coins} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            EV Charging{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Install EV charging points on your premises and see immediate
            benefits, including cost savings on employee travel and incentives
            provided by the Workplace Charging Scheme (WCS).
          </p>
          <Link class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 " to="/Services" >
            Find out more
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="spacer h-4"></div>
        {/* 4 */}

        <div class="h-full w-full bg-white bg-opacity-75 px-4 pt-9 pb-10 cursor-pointer  lg:pb-5 lg:w-1/4   overflow-hidden  relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class=" mb-7" src={globe} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Green Energy{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Looking to reduce your carbon footprint by sourcing energy from
            renewable sources? We have access to suppliers offering solar, wind,
            hydro and many more types of Green energy.
          </p>
          <Link class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 " to="/Services">
            Find out more
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BroadBrand;
