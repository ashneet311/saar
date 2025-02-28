import React from "react";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaPinterest } from "react-icons/fa";

const Test = () => {
  return (
    <div className="relative group shadow-md transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src="city-1.webp" // Replace with your image path
          alt="Property"
          className="w-full h-auto"
        />
        {/* Tags */}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Apartment
          </span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-3 left-3 flex gap-3">
        <div className="bg-white p-2 rounded-full shadow cursor-pointer">
          <FaFacebook className="text-blue-600" />
        </div>
        <div className="bg-white p-2 rounded-full shadow cursor-pointer">
          <FaWhatsapp className="text-green-500" />
        </div>
        <div className="bg-white p-2 rounded-full shadow cursor-pointer">
          <FaLinkedin className="text-blue-500" />
        </div>
        <div className="bg-white p-2 rounded-full shadow cursor-pointer">
          <FaPinterest className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Test;
