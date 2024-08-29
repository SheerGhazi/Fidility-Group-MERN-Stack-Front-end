import React from "react";
import Fid_Icon from "../../assets/Images/Connectivity and data/Fidility_Icon_In.png";
import Down_Icon from "../../assets/Icons/Home/search-down-icon.svg";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonWhite from "../Buttons/ButtonWhite";

const Phonebanner = () => {
  return (
    <div>
      <div
        className="relative bg-Banner-Image5 bg-cover bg-no-repeat bg-center h-[90vh] flex flex-col items-center pt-16 md:h-[75vh] lg:h-[90vh]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 75%)" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-5"></div>

        <div className="relative w-full space-y-4 px-4 lg:text-center lg:px-40">
          <h5 className="heading text-white font-bold text-sm pt-5 text-center md:text-lg lg:text-xl lg:pt-20">
            Business Mobile Services in the UK
          </h5>
          <h1 className="text-white text-3xl font-bold text-center leading-snug md:text-3xl lg:text-4xl  lg:leading-relaxed">
            Competitive deals on bespoke <span className="text-Footer_links">business mobile plans</span>  from all the
            major UK mobile providers.
          </h1>

          <div className="spacer h-4"></div>
          <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
            <ButtonRed />
            <ButtonRed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonebanner;
