import React from 'react'
import Fid_Icon from "../../assets/Images/Connectivity and data/Fidility_Icon_In.png";
import Down_Icon from "../../assets/Icons/Home/search-down-icon.svg";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonWhite from "../Buttons/ButtonWhite";
import { Link } from 'react-router-dom';


const EnergyBanner = () => {
  return (
    <div>
     <div className="relative bg-Banner-Image4 bg-cover bg-no-repeat bg-center h-[90vh] md:h-[75vh] lg:h-[140vh]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 75%)" }}>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <div className="relative container py-5 mx-auto flex justify-between items-center px-4 w-full">
    <div className="image">
      <img className="h-auto w-48" src={Fid_Icon} alt="" />
    </div>
    <div className="Hamburger p-4 space-y-2 lg:hidden">
      <div className="line h-0.5 w-8 my-1 bg-white"></div>
      <div className="line h-0.5 w-8 my-1 bg-white"></div>
      <div className="line h-0.5 w-8 my-1 bg-white"></div>
    </div>

    {/* Nav Links */}
    <div className="links hidden lg:flex items-center space-x-40">
      <nav>
        <ul className="flex space-x-8">
          <li className="flex items-center space-x-2">
            <Link className="font-normal text-base text-white" to="/services">Services</Link>
            <img className="size-2 invert" src={Down_Icon} alt="" />
          </li>
          <li className="flex items-center space-x-2">
            <Link className="font-normal text-base text-white" to="/Partners">Partners Programmes</Link>
            <img className="size-2 invert" src={Down_Icon} alt="" />
          </li>
          <li className="flex items-center space-x-2">
            <Link className="font-normal text-base text-white" to="/">Company</Link>
            <img className="size-2 invert" src={Down_Icon} alt="" />
          </li>
          <li className="flex items-center space-x-2">
            <Link className="font-normal text-base text-white" to="/">Support</Link>
            <img className="size-2 invert" src={Down_Icon} alt="" />
          </li>
          <li className="flex items-center space-x-2">
            <Link className="font-normal text-base text-white" to="/contact">Contact</Link>
            <img className="size-2 invert" src={Down_Icon} alt="" />
          </li>
        </ul>
      </nav>
      <ButtonWhite />
    </div>
  </div>

  <div className="relative w-full lg:text-center">
    <h5 className="heading text-white font-bold text-3xl pt-1 text-center md:text-lg lg:text-4xl lg:pt-20">
      Stop paying more for your
    </h5>
    <h1 className="text-white text-6xl font-bold text-center leading-snug md:text-5xl lg:text-7xl lg:leading-relaxed">
      Business Energy Solutions.
    </h1>
    <h6 className="font-medium text-base text-white text-center lg:pt-5">
      We work for you to get your business energy costs reduced, while you focus on your customers.
    </h6>
    <div className="spacer h-1"></div>
    <div className="flex flex-col justify-center items-center gap-2 lg:flex-row pt-10">
      <ButtonRed />
      <ButtonWhite />
    </div>
  </div>
</div>

    </div>
  )
}

export default EnergyBanner
