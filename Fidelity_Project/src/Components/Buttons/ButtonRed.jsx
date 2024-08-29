import React from "react";
import { Link } from "react-router-dom";

const ButtonRed = () => {
  return (
    <div>
      <Link to="/About">
        <button className="h-14 px-12 bg-Footer_links border-1 border-[#dd3333] rounded-md text-white font-normal text-sm hover:bg-blue-900 transform transition-transform duration-300 hover:-translate-y-1">
          Get a Quote
        </button>
      </Link>
    </div>
  );
};

export default ButtonRed;
