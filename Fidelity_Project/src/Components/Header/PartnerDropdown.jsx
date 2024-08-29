import React, { useState } from "react";
import { Link } from "react-router-dom";

const PartnerDropdown = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Array of services with their corresponding paths
  const services = [
    { name: "Partner Programme", path: "/Partners" },
    { name: "IoT Connectivity ans Solutions", path: "/IoT" },
    { name: "Selling Payments", path: "/payment" },
    { name: "Billing, CRM and Provisioning Platform ", },
   
  ];

  return (
    <div>
      <div className="absolute left-0 top-full py-2  w-[15vw] h-auto bg-white shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform scale-95 group-hover:scale-100 transition-all duration-300 delay-100 border-b-4 border-Footer_links">
        <ul>
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <div
                className="group hover:bg-gray-100 py-2 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <li className="flex justify-between px-4">
                  <span
                    className={`relative text-sm font-semibold ${
                      hoveredIndex === index
                        ? "text-Footer_links opacity-70"
                        : "text-[#333] opacity-60"
                    }`}
                  >
                    {service.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-Footer_links transition-transform duration-300 transform ${
                        hoveredIndex === index ? "scale-x-100" : "scale-x-0"
                      }`}
                      style={{ transformOrigin: "left" }}
                    ></span>
                  </span>
                  {/* <img src={Down_Icon} alt="" /> */}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnerDropdown;
