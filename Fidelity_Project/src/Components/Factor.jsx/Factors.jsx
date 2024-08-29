import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "./Card";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonWhite from "../Buttons/ButtonWhite";

const Factors = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-cubic", 
    });
  }, []);
  return (
    <div className="px-4   ">
      <div className="heading font-bold  text-3xl text-center p-4  " data-aos="fade-up">
        <h2 className="text-[#696969]">
          {" "}
          The <span className="text-Footer_links">X factor</span> for your
          bussiness
        </h2>
      </div>

      <div className="factors" data-aos="fade-up">
  <section className="text-gray-600 body-font" data-aos="fade-up">
    <div className="container px-2 py-12 mx-auto">
      <div data-aos="fade-up">
        <Card />
      </div>
      <div
        className="btns flex flex-col justify-center items-center md:flex-row md:space-x-3"
        data-aos="fade-up"
      >
        <div className="btn1">
          <ButtonRed />
        </div>
        <div className="spacer h-3"></div>
        <div className="btn2 flex">
          <ButtonWhite />
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  );
};

export default Factors;
