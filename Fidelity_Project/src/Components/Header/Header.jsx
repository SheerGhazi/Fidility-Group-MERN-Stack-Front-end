import React, { useState, useEffect } from "react";
import Fidelity_Icon from "../../assets/Icons/Fidelity_Icon.svg";
import Down_Icon from "../../assets/Icons/Home/search-down-icon.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceDropdown from "./ServiceDropdown";
import PartnerDropdown from "./PartnerDropdown";
import CompanyDropdown from "./CompanyDropdown";
import SupportDropdown from "./SupportDropdown";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`sticky top-0 z-50 bg-white py-5 flex justify-between items-center
     px-4 lg:w-full lg:px-52 lg:py-3 transition-shadow duration-300 ${
       shadow ? "shadow-lg" : ""
     }`}
    >
      <div className="image">
        <img className="h-auto w-48" src={Fidelity_Icon} alt="Fidelity Icon" />
      </div>
      <div className="Hamburger p-4 space-y-2 lg:hidden" onClick={toggleMenu}>
        <div className="line h-0.5 w-8 my-1 bg-black"></div>
        <div className="line h-0.5 w-8 my-1 bg-black"></div>
        <div className="line h-0.5 w-8 my-1 bg-black"></div>
      </div>

      {/* Nav Links for small screens */}
      <div
        className={`absolute top-0 left-0 bg-Footer_links shadow-lg transform transition-transform duration-300 ease-in-out
          ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 lg:hidden lg:flex-row md:hidden `}
        style={{ width: "60vw", height: "60vh" }}
      >
         <img  className="pb-8" src={Fidelity_Icon} alt="" />
        <nav className="flex flex-col justify-start items-start p-5 space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:p-0 lg:space-x-8">
         
          <ul className="flex flex-col text-white lg:flex-row lg:space-x-8 space-y-5 w-full">
            <li className="relative flex items-center space-x-2 group">
              <Link
                className="font-normal text-sm text-white hover:text-Footer_links"
                to="/services"
              >
                Services
              </Link>
              <img className="size-2 invert" src={Down_Icon} alt="Down Icon" />

              {/* Dropdown Menu */}
              <ServiceDropdown />
            </li>

            <li className="relative flex items-center space-x-2 group">
              <Link
                className="font-normal text-sm text-white hover:text-Footer_links"
                to="/partners"
              >
                Partners Programmes
              </Link>
              <img className="size-2 invert" src={Down_Icon} alt="Down Icon" />

              {/* Dropdown Menu */}
              <PartnerDropdown />
            </li>

            <li className="relative flex items-center space-x-2 group">
              <Link
                className="font-normal text-sm text-white hover:text-Footer_links"
                to="/"
              >
                Company
              </Link>
              <img className="size-2 invert" src={Down_Icon} alt="Down Icon" />

              {/* Dropdown Menu */}
              <CompanyDropdown />
            </li>

            <li className="relative flex items-center space-x-2 group">
              <Link
                className="font-normal text-sm text-white hover:text-Footer_links"
                to="/Report"
              >
                Support
              </Link>
              <img className="size-2 invert" src={Down_Icon} alt="Down Icon" />

              {/* Dropdown Menu */}
              <SupportDropdown />
            </li>

            <li className="relative flex items-center space-x-2 group">
              <Link
                className="font-normal text-sm text-white hover:text-Footer_links"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navbar for md screens and larger */}
      <div className="hidden md:flex md:flex-row md:items-center md:space-x-8">
        <li className="relative flex items-center space-x-2 group">
          <Link
            className="font-normal text-sm text-[#333] hover:text-Footer_links"
            to="/services"
          >
            Services
          </Link>
          <img className="size-2" src={Down_Icon} alt="Down Icon" />

          {/* Dropdown Menu */}
          <ServiceDropdown />
        </li>

        <li className="relative flex items-center space-x-2 group">
          <Link
            className="font-normal text-sm text-[#333] hover:text-Footer_links"
            to="/partners"
          >
            Partners Programmes
          </Link>
          <img className="size-2" src={Down_Icon} alt="Down Icon" />

          {/* Dropdown Menu */}
          <PartnerDropdown />
        </li>

        <li className="relative flex items-center space-x-2 group">
          <Link
            className="font-normal text-sm text-[#333] hover:text-Footer_links"
            to="/"
          >
            Company
          </Link>
          <img className="size-2" src={Down_Icon} alt="Down Icon" />

          {/* Dropdown Menu */}
          <CompanyDropdown />
        </li>

        <li className="relative flex items-center space-x-2 group">
          <Link
            className="font-normal text-sm text-[#333] hover:text-Footer_links"
            to="/Report"
          >
            Support
          </Link>
          <img className="size-2" src={Down_Icon} alt="Down Icon" />

          {/* Dropdown Menu */}
          <SupportDropdown />
        </li>

        <li className="relative flex items-center space-x-2 group">
          <Link
            className="font-normal text-sm text-[#333] hover:text-Footer_links"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
