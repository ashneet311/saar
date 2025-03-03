import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const testimonials = [
  {
    name: "Naveen Kansal",
    image: "city-3.png",
    feedback:
      "CCS is providing best services to their clients. Management always works in staff favour... happy to be a part of CCS team...",
  },
  {
    name: "Priyanka Musafir",
    image: "city-3.png",
    feedback:
      "CCS provides the best property to their clients. Since long I was finding a good apartment in Chandigarh, and I got it through CCS. If anyone wants a property in Tricity, contact CCS.",
  },
  {
    name: "Girjesh",
    image: "city-3.png",
    feedback:
      "Properties are very premium and budget-friendly. Behavior of the staff is very professional and they listen to all the queries and requirements. We met Tindarpal Singh and I must say CCS should have more...",
  },
  {
    name: "Girjesh",
    image: "city-3.png",
    feedback:
      "Properties are very premium and budget-friendly. Behavior of the staff is very professional and they listen to all the queries and requirements. We met Tindarpal Singh and I must say CCS should have more...",
  },
  {
    name: "Girjesh",
    image: "city-3.png",
    feedback:
      "Properties are very premium and budget-friendly. Behavior of the staff is very professional and they listen to all the queries and requirements. We met Tindarpal Singh and I must say CCS should have more...",
  },
  {
    name: "Girjesh",
    image: "city-3.png",
    feedback:
      "Properties are very premium and budget-friendly. Behavior of the staff is very professional and they listen to all the queries and requirements. We met Tindarpal Singh and I must say CCS should have more...",
  },
];

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-6 h-full">
        <div
      className="relative h-[500px] p-8 bg-cover bg-center text-white flex items-center justify-center gap-20 bg-black backdrop-brightness-50"
      style={{ backgroundImage: `url('city.jpg')` }}
    > <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      {/* Section Heading */}
      <div className="text-center mb-10 flex flex-col  gap-6 z-10">
        <h2 className="text-4xl xsm:text-base font-bold">Hear From Our Clients</h2>
        <button className="mt-3 xsm:text-xs xsm:px-2 xsm:py-2 px-5 py-2 bg-transparent border border-white  text-white hover:bg-white hover:text-blue-400 transition-all duration-300">
          More Reviews
        </button>
       <div className="flex gap-2"> 
        <button
          onClick={handlePrev}
          className=" p-5 xsm:p-2 bg-white rounded-full text-black shadow-md hover:bg-gray-200"
        >
          <IoIosArrowRoundBack/>
        </button>
      <button
          onClick={handleNext}
          className="p-5 xsm:p-2 bg-white rounded-full text-black shadow-md hover:bg-gray-200"
        >
          <IoIosArrowRoundForward />
        </button>
        </div>
      </div>
      

      {/* Testimonial Cards */}
      <div className="flex items-center justify-center space-x-8 z-10">
        

        {/* Testimonial Card */}
        <div className="bg-white text-black rounded-lg p-6 shadow-lg max-w-sm text-center ">
          <div className="w-20 h-20 mx-auto mb-4 relative bottom-16 border-4 border-white rounded-full">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="relative bottom-10 "><h3 className="font-bold text-lg xsm:text-xs">{testimonials[currentIndex].name}</h3>
          <p className="mt-4 text-gray-600 xsm:text-xs">{testimonials[currentIndex].feedback}</p></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Client;
