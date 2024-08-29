import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ButtonRed from "../Buttons/ButtonRed";

const Testimonial2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto lg:px-24">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center space-y-5" data-aos="fade-up">
                <div className="title flex items-center justify-center text-Footer_links">
                  {" "}
                  <h3 className="font-medium text-lg border-b-2 ">
                    <a href="">Dedicated Fibre Internet</a>
                  </h3>
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
                </div>

                <p className="leading-relaxed text-text_primary  font-normal text-base opacity-80">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>

                <ButtonRed />
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center space-y-5" data-aos="fade-up">
                <div className="title flex items-center justify-center text-Footer_links">
                  {" "}
                  <h3 className="font-medium text-lg border-b-2 ">
                    <a href="">Fibre to the Premises (FTTP)</a>
                  </h3>
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
                </div>

                <p className="leading-relaxed text-text_primary  font-normal text-base opacity-80">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>

                <ButtonRed />
              </div>
              
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center space-y-5" data-aos="fade-up">
                <div className="title flex items-center justify-center text-Footer_links">
                  {" "}
                  <h3 className="font-medium text-lg border-b-2 ">
                    <a href="">SoGEA Broadband</a>
                  </h3>
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
                </div>

                <p className="leading-relaxed text-text_primary  font-normal text-base opacity-80">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>

                <ButtonRed />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial2;
