import React from "react";

const PBanner = () => {
  return (
    <div
      className="bg-Banner-Image2 flex flex-col bg-cover bg-no-repeat bg-black h-[90vh] px-5 space-y-4  md:h-[75vh] lg:h-[90vh] lg:items-center "
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 65%)" }}
      
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative  z-10   pt-10 lg:flex flex-col lg:pt-20">
        <h2 className="text-white text-4xl  font-bold leading-relaxed pr-4  md:text-3xl lg:text-3xl lg:w-1/2 ">
          Unlock New Revenue Opportunities with Our Channel Partnership Program​
        </h2>

        <div className="btns w-full flex flex-col justify-start items-center space-y-1 pt-8 md:flex-row md:space-x-3">
          <div className="btn1">
            <a href="#">
              <button className="h-14 px-12 bg-[#cf142b] border-1 border-[#dd3333] rounded-md text-white font-normal text-sm hover:bg-blue-900 transform transition-transform duration-300 hover:-translate-y-1">
                Equire Now
              </button>
            </a>
          </div>
          <div className="spacer h-3"></div>
          <div className="btn1">
            <a href="#">
              <button className="h-14 w-auto px-12 bg-[#cf142b] border-1 border-[#dd3333] rounded-md text-white font-normal text-sm hover:bg-blue-900 transform transition-transform duration-300 hover:-translate-y-1">
                Download our partnership broucher
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PBanner;
