import React from "react";
import Fid_Icon from "../../assets/Images/Connectivity and data/Fidility_Icon_In.png";
import Down_Icon from "../../assets/Icons/Home/search-down-icon.svg";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonWhite from "../Buttons/ButtonWhite";
import { Link } from 'react-router-dom';

const ConBanner = () => {
  return (
    <div className="bg-Banner-Image3 bg-cover bg-no-repeat bg-center h-[50vh] px-5 space-y-4  md:h-[75vh] lg:h-[80vh] lg:px-40 ">
      <div
        className=" container py-5 mx-auto flex justify-between  items-center
     px-4 lg: w-full "
      >
        <div className="image">
          <img className="h-auto w-48" src={Fid_Icon} alt="" />
        </div>
        <div className="Hamburger p-4 space-y-2  lg:hidden">
          <div className="line h-0.5 w-8 my-1 bg-white"></div>
          <div className="line h-0.5 w-8 my-1 bg-white"></div>
          <div className="line h-0.5 w-8 my-1 bg-white"></div>
        </div>

        {/* Nav Links */}
        <div className="links hidden lg:flex items-center space-x-40">
          <nav>
            <ul className=" flex space-x-8 ">
              <li className="flex items-center space-x-2  ">
                <Link className="font-normal text-base text-white   " to="/services">
                  Services
                </Link>
                <img className="size-2 invert" src={Down_Icon} alt="" />
              </li>

              <li className=" flex items-center space-x-2 ">
                <Link className="font-normal text-base text-white  " to="/Partners">
                  Partners Programmes
                </Link>
                <img className="size-2 invert" src={Down_Icon} alt="" />
              </li>

              <li className="flex items-center space-x-2  ">
                <Link className="font-normal text-base text-white  " to="/">
                  Company
                </Link>
                <img className="size-2 invert" src={Down_Icon} alt="" />
              </li>

              <li className="flex items-center space-x-2  ">
                <Link className="font-normal text-base text-white " to="/">
                  Support
                </Link>
                <img className="size-2 invert" src={Down_Icon} alt="" />
              </li>

              <li className="flex items-center space-x-2  ">
                <Link className="font-normal text-base text-white " to="/contact">
                  Contact
                </Link>
                <img className="size-2 invert" src={Down_Icon} alt="" />
              </li>
            </ul>
          </nav>

          <ButtonWhite />
        </div>
      </div>

      <div className="w-full lg:w-1/2  ">
        <h1 className="heading text-white font-bold text-base pt-5   md:text-lg lg:text-base lg:pt-20">
          Trusted business fibre broadband and ethernet cable services.
        </h1>
        <h2 className="text-white text-4xl font-bold  md:text-5xl lg:text-5xl lg:leading-relaxed ">
          Get the best business fibre broadband
        </h2>
        <div className="spacer h-4"></div>
        <ButtonRed />
      </div>
    </div>
  );
};

export default ConBanner;
