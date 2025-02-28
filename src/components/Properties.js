import React from "react";

// Card data array
const cards = [
  {
    image: "gurgaon.jpg",
    city: "Gurgaon",
    description: "Luxury Flats in Gurgaon",
  },
  {
    image: "chandigarh.jpg",
    city: "New Chandigarh",
    description: "Luxury Flats in New Chandigarh",
  },
  {
    image: "zirakpur.jpg",
    city: "Zirakpur",
    description: "Luxury Property in Zirakpur",
  },
  {
    image: "Mohali.jpg",
    city: "Mohali",
    description: "Luxury Property in Mohali",
  },
  {
    image: "mumbai.jpg",
    city: "Mumbai",
    description: "Luxury Property in Mumbai",
  },
  {
    image: "Panchkula.jpg",
    city: "Panchkula",
    description: "Luxury Property in Panchkula",
  },
];

const Properties = () => {
  return (
    <div className="p-28 ">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <p className="text-blue-400 uppercase text-sm font-semibold">
          Browse popular properties
        </p>
        <h1 className="text-3xl font-bold">Find Properties in Your City</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg"
          >
            {/* Background Image */}
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all"></div>

            {/* Card Content */}
            <div className="absolute bottom-4 left-4 text-white">
              <div className="bg-white text-black text-sm font-semibold px-3 py-1  mb-24 inline-block">
                {item.city.toUpperCase()}
              </div>
              <h2 className="text-lg font-semibold">{item.description}</h2>
              <p className="text-sm text-gray-300 mt-1 group-hover:underline cursor-pointer">
                See all Listings →
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
