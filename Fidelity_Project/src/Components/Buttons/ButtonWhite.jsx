import React from "react";
import { Link } from "react-router-dom";

const ButtonWhite = () => {
  return (
    <div>
      <Link to="/Report">
        <button className="h-14 px-11 border bg-white border-gray-200 rounded-md text-[#cf142b] font-medium text-sm hover:bg-blue-900 hover:border-[#dd3333] transform transition-transform duration-300 hover:-translate-y-1">
          Call us Today
        </button>
      </Link>
    </div>
  );
};

export default ButtonWhite;
