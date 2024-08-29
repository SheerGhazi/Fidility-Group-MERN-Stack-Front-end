import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../../assets/Images/Services/Service-image-1.jpg";
import image2 from "../../assets/Images/Services/Service-image-2.jpg";
import image3 from "../../assets/Images/Services/Service-image-3.jpg";
import image4 from "../../assets/Images/Services/Service-image-4.jpg";
import image5 from "../../assets/Images/Services/Service-image-5.jpg";
import image6 from "../../assets/Images/Services/Service-image-6.jpg";
import image7 from "../../assets/Images/Services/Service-image-7.jpg";
import image8 from "../../assets/Images/Services/Service-image-8.jpg";
import { Link } from "react-router-dom";

// ServiceItem Component
const ServiceItem = ({ image, title, description }) => (
  <div className="relative cursor-pointer" data-aos="fade-up">
    <div className="relative group overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 bg-[#007aff] opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20"></div>
      {/* Button - Initially Hidden, Appears on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
        <Link to="/contact">
          <button className="h-14 px-8 border border-gray-200 rounded-md text-blue-900 font-normal text-xs bg-white">
            Call us Today
          </button>
        </Link>
      </div>
    </div>
    <div className="description text-center pt-3">
      <p className="text-base font-normal text-[#696969]">
        {description} <strong>{title}</strong>
      </p>
    </div>
  </div>
);

// ServiceCard Component
const ServiceCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      id: 1,
      image: image1,
      title: "Get super fast and reliable business broadband and ethernet connectivity.",
      description: "Connect like a pro.",
    },
    {
      id: 2,
      image: image2,
      title: " Let us procure and manage your business energy requirements.",
      description: "We have the know how.",
    },
    {
      id: 3,
      image: image3,
      title: "We have business mobile plans and service that won't let you down. ",
      description: "Let your business roam with us. ",
    },
    {
      id: 4,
      image: image4,
      title: "We can manage volume of SIMs that connect to a range of different devices via mobile connectivity. ",
      description: "IoT is changing the way we do business. ",
    },
    {
      id: 5,
      image: image5,
      title: " We build and implement bespoke cloud strategies to enhance your business operations and save on costs.",
      description: "Get your business 'in the cloud'. ",
    },
    {
      id: 6,
      image: image6,
      title: " Let's get your business using the latest VoIP and cloud solutions.",
      description: "Communicate like a king! ",
    },
    {
      id: 7,
      image: image7,
      title: "state-of-the-art payment software solutions and technology. ",
      description: "We are experts in saving business money with ",
    },
    {
      id: 8,
      image: image8,
      title: "Benefit from a compelling margin share and an opportunity to drive new digital revenues with unique product offerings.",
      description: "Become a reseller. ",
    },
  ];

  return (
    <div className="w-full bg-[#f8f8f8] h-auto px-4">
      <div className="spacer h-20"></div>
      <div className="main-heading" data-aos="fade-up">
        <h6 className="heading text-[#ababab] font-bold text-base tracking-widest text-center uppercase break-words flex-wrap">
          Customer inspired software, telecoms and energy services in the UK.
        </h6>
      </div>
      <div className="sub-heading" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-Footer_links text-center py-6">
          <span className="text-[#696969]">Empowering</span> everything as a
          service.
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-60 pb-10">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
