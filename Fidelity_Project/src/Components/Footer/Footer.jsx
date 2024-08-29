import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import Footer_Image from "../../assets/Images/Footer/Footer_Image1.png";
import Footer_Image2 from "../../assets/Images/Footer/ISO-Fidelity-Group.png";
import linkedin_icon from "../../assets/Icons/Home/linkedin-logo.png";
import facebook_icon from "../../assets/Icons/Home/facebook-app-symbol.png";
import twitter_icon from "../../assets/Icons/Home/twitter.png";
import youtube_icon from "../../assets/Icons/Home/youtube.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="">
      <div
        className="w-full bg-Footer_bg h-auto  flex flex-col py-20 px-12 md:flex md:flex-row md:justify-center "
        data-aos="fade-up"
      >
        <div className="vc-coloumn-inner px-4">
          <div className="image">
            <img
              className="w-40 h-auto bg-Footer_bg"
              src={Footer_Image}
              alt=""
            />
          </div>
          <div className="heading mt-8 text-Footer_text">
            Henley: 14 Station Rd, Henley-on-Thames, RG9 1AY
            <br /> London: Fox Court, 14 Grays Inn Rd, London WC1X 8HN
            <p>Reg. Number: 06765669</p>
          </div>
          <div className="link mt-3">
            <a className="text-Footer_links hover:text-blue-900" href="">
              www.fidelity-group.co.uk
            </a>
          </div>
        </div>

        <div className="md:flex justify-between">
          {/* Services */}
          <div className="services-title mt-8 px-4">
  <div className="heading">
    <h2 className="font-bold text-lg text-Footer_text mb-5">Services</h2>
  </div>
  <div className="services-links text-Footer_links text-sm font-normal space-y-3">
    {[
      { name: "Connectivity", path: "/connectivity" },
      { name: "Cloud and Hosting", path: "cloud" },
      { name: "Energy", path: "/energy" },
      { name: "IoT", path: "/IoT" },
      { name: "Mobile", path: "/Phone" },
      { name: "Voices", path: "/telephony" },
      { name: "Billing",  },
      { name: "Payments", path: "/payment" },
    ].map((service) => (
      <h6 key={service.name}>
        <Link
          to={service.path}
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-red-600 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
        >
          {service.name}
        </Link>
      </h6>
    ))}
  </div>
</div>
          {/* Quick Links */}

          <div className="Quick-links-title mt-8 px-4">
  <div className="heading">
    <h2 className="font-bold text-lg text-Footer_text mb-5">
      Quick links
    </h2>
  </div>
  <div className="Quick-links text-Footer_links text-sm font-normal space-y-3 ">
    {[
      { name: "About",},
      { name: "Contacts",  },
      { name: "Media and News", },
      { name: "Careers",},
      { name: "Terms of use", },
      { name: "Privacy Policy", },
      { name: "Cookie Policy", },
      { name: "Code of Practice", },
      { name: "KIT Home VoIP", },
    ].map((link) => (
      <h6 key={link.name}>
        <Link
          to={link.path}
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-red-600 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
        >
          {link.name}
        </Link>
      </h6>
    ))}
  </div>
</div>

          {/* Support */}
          <div className="Support-title mt-8 px-4">
  <div className="heading">
    <h2 className="font-bold text-lg text-Footer_text mb-5">Support</h2>
  </div>
  <div className="Support-links text-Footer_links text-sm font-normal space-y-3">
    {[
      { name: "Anvil Login", },
      { name: "RDC Remote Support", },
      { name: "Report a Fault",  },
      { name: "Emergency Location",  },
      { name: "Cloud Fault", },
      { name: "Energy Complaints Procedure",  },
    ].map((link) => (
      <h6 key={link.name}>
        <Link
          to={link.path}
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-red-600 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
        >
          {link.name}
        </Link>
      </h6>
    ))}
  </div>
</div>
        </div>

        <div className="footer-img flex items-center justify-center  ">
          <img className="w-52 mt-14 mb-7  " src={Footer_Image2} alt="" />
        </div>

        {/* <div className="light">
            <a href="">
                <div>
                   
                </div>
            </a>
            <p>Hello</p>
        </div> */}
      </div>
      <div className="block bg-Footer_bg md:flex flex-row-reverse justify-around items-center ">
        <div className="contact size-24  rounded-full hidden md:flex"></div>
        <div className="tm-social-networks">
          <ul className="list flex justify-center items-center space-x-4">
            <li className=" size-14  bg-[#ededed] rounded-full flex justify-center items-center cursor-pointer hover:bg-Footer_links">
              <div className="hover:filter hover:brightness-0 hover:invert">
                <img className="" src={linkedin_icon} alt="" />
              </div>
            </li>
            <li className=" size-14  bg-[#ededed] rounded-full  flex justify-center items-center cursor-pointer  hover:bg-Footer_links">
              <div className="hover:filter hover:brightness-0 hover:invert">
                <img src={facebook_icon} alt="" />
              </div>
            </li>
            <li className=" size-14  bg-[#ededed] rounded-full  flex justify-center items-center cursor-pointer  hover:bg-Footer_links">
              <div className="hover:filter hover:brightness-0 hover:invert">
                <img src={twitter_icon} alt="" />
              </div>
            </li>
            <li className=" size-14  bg-[#ededed] rounded-full  flex justify-center items-center  cursor-pointer hover:bg-Footer_links">
              <div className="hover:filter hover:brightness-0 hover:invert">
                <img src={youtube_icon} alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="rights-reserved mt-8 flex justify-center items-center">
          <p className="text-[#7e7e7e]">
            © 2024 Fidelity Group. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
