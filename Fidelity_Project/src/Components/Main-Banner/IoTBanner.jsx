import React from "react";
import Fid_Icon from "../../assets/Images/Connectivity and data/Fidility_Icon_In.png";
import Down_Icon from "../../assets/Icons/Home/search-down-icon.svg";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonWhite from "../Buttons/ButtonWhite";

const IoTBanner = () => {
  return (
    <div className="relative bg-Banner-Image6 bg-cover bg-no-repeat bg-center h-[70vh] px-5 space-y-4 md:h-[75vh] lg:h-[90vh] lg:px-40">
      {/* Black Overlay with Opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full lg:w-1/2 space-y-4 ">
        <h1 className="text-white text-4xl pt-10 font-bold md:text-5xl lg:text-5xl  lg:pt-20">
        A Global IoT Solution – Data everywhere for everything
        </h1>
        <h4 className="heading text-white font-semibold text-base md:text-lg lg:text-base pt-4" >
        Our IoT solutions are driving connectivity and growth everywhere, from CCTV cameras to hand held payment devices. And from the UK to the farthest reaches of the globe.
        </h4>
        <h4 className="heading text-white font-semibold text-base md:text-lg lg:text-base ">
        If your business needs the very best in IoT connectivity, choosing our solution will be the easiest decision you’ll ever make.
        </h4>

        <div className="spacer h-4"></div>
        <ButtonRed />
      </div>
    </div>
  );
};

export default IoTBanner;
