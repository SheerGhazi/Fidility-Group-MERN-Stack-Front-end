import React, { useEffect } from "react";
import globe from "../../assets/Icons/Home/globe.png";
import flash from "../../assets/Icons/Home/flash.png";
import phone from "../../assets/Icons/Home/iphone.png";
import network from "../../assets/Icons/Home/network.png";
import cloud from "../../assets/Icons/Home/download.png";
import support from "../../assets/Icons/Home/support.png";
import arrow from "../../assets/Icons/Home/change.png";
import coins from "../../assets/Icons/Home/coins.png";
import bezier from "../../assets/Icons/Home/bezier.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);
  return (
    <div
      class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-24 pb-10 "
      data-aos="fade-up"
    >
      <Link to="/connectivity ">
        <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class="mx-auto mb-7" src={globe} alt="" />
          <h1 class="title-font sm:text-2xl lg:text-2xl font-medium text-[#696969] mb-3">
            Connectivity and Data{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Connect to super fast, reliable business broadband and ethernet
            connectivity across the UK.
          </p>
          <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
            Connectivity and data
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
          </a>
        </div>
      </Link>

      {/* 2 */}
      <Link to="/energy">
        <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class="mx-auto mb-7" src={flash} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Bussiness Energy{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Don't be left in the dark or break the bank with high energy costs.
            We have the know how. Let us procure and manage energy requirements
            for your business.
          </p>
          <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
            Energy
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
          </a>
        </div>
      </Link>
      {/* 3 */}

      <Link to="/phone">
        <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class="mx-auto mb-7" src={phone} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Bussiness Mobile{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Let your business roam with us. We have business mobile plans that
            won't let you down. Connect to the UK’s biggest networks through us.
          </p>
          <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
            Bussiness Mobile
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
          </a>
        </div>
      </Link>
      {/* 4 */}

      <Link to="/IoT">
        <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class="mx-auto mb-7" src={network} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Internet of Things{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            With vM2M, a supplier agnostic, easy to use platform making IoT
            connectivity management as Simple as 1..2..3
          </p>
          <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
            IoT
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
          </a>
        </div>
      </Link>
      {/* 5 */}

      <Link to="/cloud">
        <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <img class="mx-auto mb-7" src={cloud} alt="" />
          <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
            Cloud{" "}
          </h1>
          <p class="leading-relaxed mb-3 font-normal text-base">
            Let's get your business in the cloud. Bespoke design and
            implementation of business IT and cloud strategies is our game.
          </p>
          <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
            Cloud and Hosting
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
          </a>
        </div>
      </Link>
      {/* 6 */}

        <Link to="/telephony">
      <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        <img class="mx-auto mb-7" src={support} alt="" />
        <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
          Voice/VoIP Hosted Telephony{" "}
        </h1>
        <p class="leading-relaxed mb-3 font-normal text-base">
          Use the latest VoIP technology. Keep your business and customers
          connected with unified communications.
        </p>
        <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
          Voice and Hosted Telephony
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
        </a>
      </div>
      </Link>
      {/* 7 */}

      <a href="https://anvilhub.com" target="_blank">
      <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        <img class="mx-auto mb-7" src={arrow} alt="" />
        <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
          Billing{" "}
        </h1>
        <p class="leading-relaxed mb-3 font-normal text-base">
          An award winning billing solution. Empower your business with a
          comprehensive telecoms customer management and billing platform.
        </p>
        <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
          Billing
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
        </a>
      </div>
      </a>
      {/* 8 */}


     <Link to="/payment">
      <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        <img class="mx-auto mb-7" src={coins} alt="" />
        <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
          Payment Solutions{" "}
        </h1>
        <p class="leading-relaxed mb-3 font-normal text-base">
          Improve efficiency and save! We offer a serviced, consultative, and
          managed approach to merchants payment solutions.
        </p>
        <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
          Payments
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
        </a>
      </div>
      </Link>
      {/* 9 */}

      <Link to="/Partners">
      <div class="h-full bg-white bg-opacity-75 px-4 pt-9 pb-10 lg:pb-5  rounded-lg overflow-hidden text-center relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
        <img class="mx-auto mb-7" src={bezier} alt="" />
        <h1 class="title-font sm:text-2xl text-xl font-medium text-[#696969] mb-3">
          Fidelity Partner Programme{" "}
        </h1>
        <p class="leading-relaxed mb-3 font-normal text-base">
          Join club Fidelity. The most customer centric reseller partner
          programme in the UK.
        </p>
        <a class="text-[#cf142b] inline-flex items-center mt-8 hover:text-blue-900 ">
          Partner Programme
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
        </a>
      </div>
      </Link>
    </div>
  );
};

export default Card;
