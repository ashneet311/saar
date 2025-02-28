import React from "react";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaArrowsAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Card = ({ heading, para, price, image, url }) => {
  return (
    <div className="w-[90%]  overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-1000">
      {/* Image Container with Hover Effect */}
      <div className="relative group hover:cursor-pointer overflow-hidden">
        <img
          src={image} // Replace with your image URL
          alt="Digital Marketing"
          className="w-full h-full object-cover hover:scale-125 transition duration-1000"
        />

        {/* Cart Icon - Always Visible */}
        <div className="absolute top-4 right-4 hover:cursor-pointer z-10">
          <button className="bg-[#FA6742] text-white px-2 text-sm tracking-tight">
            For Sale
          </button>
        </div>

        {/* Price Overlay - Hidden by Default, Show on Hover */}
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
        <div className="flex gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0085c4"
          >
            <path d="M480-477.61q34.2 0 58.29-24.1 24.1-24.09 24.1-58.29t-24.1-58.29q-24.09-24.1-58.29-24.1t-58.29 24.1q-24.1 24.09-24.1 58.29t24.1 58.29q24.09 24.1 58.29 24.1Zm0 405.74Q315.17-211.26 233.52-329.36q-81.65-118.1-81.65-223.6 0-153.28 98.95-244.22 98.95-90.95 229.18-90.95 130.23 0 229.18 90.95 98.95 90.94 98.95 244.22 0 105.5-81.65 223.6T480-71.87Z" />
          </svg>
          <p className=" text-sm text-gray-400">{para}</p>
        </div>
      </div>

      {/* Footer */}
      <div className=" flex gap-24 px-8">
        <div className="flex flex-col">
          <div className="flex items-center space-x-2 ">
            <FaBed className="text-gray-300" />
            <span className="text-gray-800">Advance</span>
          </div>

          <div className="flex items-center space-x-2 ">
            <FaArrowsAlt className="text-gray-300" />
            <span className="text-gray-800">Hybrid</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center space-x-2 ">
            <FaBath className="text-gray-300" />
            <span className="text-gray-800">240 Hrs</span>
          </div>

          <div className="flex items-center space-x-2 ">
            <FaBuilding className="text-gray-300" />
            <span className="text-gray-800">240 Hrs</span>
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="p-4 flex justify-between items-end">
        <div>
          <span className=" text-gray-400">Starts From</span>{" "}
          <span className=" text-gray-400">/</span>{" "}
          <span className="text-[#9A7B4F] font-bold text-xl">{price}</span>
        </div>
        <a href={url} download>
          <button className="px-2 py-1 rounded bg-[#9A7B4F] text-white">
            Download
          </button>
        </a>
      </div>
    </div>
  );
};
export default Card;
