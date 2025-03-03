import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiBuildings } from "react-icons/pi";
import Footer from "./Footer";
const Aboutus = () => {
  return (
    <div className="overflow-hidden">
      <div className=" bg-[#9A7B4F] mt-8 w-full h-full flex items-center flex-col p-4 gap-2">
        <h1 className=" text-3xl tracking-wide text-white">About Us</h1>
        <p className="text-white text-xs tracking-wider">
          <NavLink to="/" className="text-white">
            HOME
          </NavLink>{" "}
          / ABOUT US
        </p>
        <ul className="flex no-underline gap-3">
          <li className="bg-white p-2 rounded">
            <FaFacebook className="text-blue-900" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaWhatsapp className="text-green-500" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaLinkedin className="text-blue-600" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaPinterest className="text-red-700" />
          </li>
        </ul>
      </div>
      <div className="lg:flex xl:flex 2xl:flex xsm:flex-col  xsm:px-4 xsm:gap-4 px-20 py-10 gap-8">
        <div className="flex flex-col gap-10 lg:w-1/2 md:w-full xsm:w-full ">
          <h1 className="text-3xl md:text-4xl xsm:text-xl font-bold">CCS Real Estate Pvt Ltd</h1>
          <p className="text-wrap md:text-xl xsm:text-sm xsm:text-justify">
            CCS Real Estate Private Limited. A Certified Real Estate Company is
            a <br /> Paramount in the real estate realm with an Experience of 5+
            years. <br />
            CCS is a pioneer amongst professional Real Estate Consulting company{" "}
            <br />
            in Chandigarh (Tricity) India , has served premium corporate in
            domestic <br /> arena. CCS is committed to offer Advanced and
            New-Fangled approach <br /> with Technical Strategies to help out
            Our Customers with Satisfactory <br /> Investments.
          </p>
          <div className="flex justify-center gap-10 mr-8 mt-10 ">
            <div className="flex flex-col gap-3 xsm:gap-0 items-center justify-center">
              <FaRegUser className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
              <h1 className="font-semibold md:text-3xl xsm:text-xl">5</h1>
              <p className="xsm:text-xs xsm:text-center">year of experience</p>
            </div>
            <div className="flex flex-col gap-3 xsm:gap-0 items-center justify-center">
              <SlLike className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
              <h1 className="font-semibold xsm:text-xl md:text-3xl">3020</h1>
              <p className="xsm:text-xs xsm:text-center">Happy Customers</p>
            </div>
            <div className="flex flex-col xsm:gap-0 gap-3 items-center justify-center">
              <PiBuildings className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
              <h1 className="font-semibold xsm:text-xl md:text-3xl">1535</h1>
              <p className="xsm:text-xs xsm:text-center">Property Sold</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-5 relative top-8">
            <div className="text-white bg-[#9A7B4F] shadow-2xl p-8 gap-1 flex flex-col rounded w-full">
              <img src="property.png" alt="" className="w-16 xsm:w-8" />
              <h1 className=" font-bold text-xl xsm:text-base">Personalized Service</h1>
              <p className="xsm:text-xs">We helps to find property in prime location</p>
            </div>
            <div className="text-black bg-white shadow-2xl p-8 gap-1 flex flex-col rounded w-full">
              <img src="rent_2.png" alt="" className="w-16 xsm:w-8" />
              <h1 className=" font-bold text-xl xsm:text-base">Loan Facility</h1>
              <p className="xsm:text-xs">Helps to provide loan for buying property</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-black bg-white shadow-2xl p-8 gap-1 flex flex-col rounded w-[90%]">
              <img src="customer_2.png" alt="" className="w-16 xsm:w-8" />
              <h1 className=" font-bold text-xl xsm:text-base">Fully Support</h1>
              <p className="xsm:text-xs">
                Fully support For Finding And Buy Process Pof Property
              </p>
            </div>
            <div className="text-white bg-[#FA6742] shadow-2xl p-8 gap-1 flex flex-col rounded w-[90%]">
              <img src="deal.png" alt="" className="w-16 xsm:w-8" />
              <h1 className=" font-bold text-xl xsm:text-base">Trusted by thousands.</h1>
              <p className="tracking-tighter xsm:text-xs">
                There are Many Kind of People Satisfy with us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 p-5 flex flex-col items-center lg:flex-row justify-center">
        {/* Left Section (Image) */}
        <div className="relative z-10 lg:w-1/2 ml-10 md:ml-0 xsm:ml-0 xsm:w-full">
          <img
            src="Team.jpeg"
            alt="City View"
            className="w-full lg:w-[90%] shadow-lg"
          />
        </div>

        {/* Right Section (Content) */}
        <div className="bg-gray-100 lg:w-[90%] p-20 xsm:p-10 relative z-0 mt-8 lg:mt-0 lg:ml-[-6rem]">
          {/* Title Section */}

          <h1 className="text-3xl lg:text-4xl xsm:text-xl text-[#9A7B4F] font-semibold mb-6">
            Who We are
          </h1>

          {/* Features Section */}
          <div className="space-y-6 xsm:text-sm">
            CCS Group was established in January, 2017 and it is involved in
            real estate activates with own or leased property. We specialize in
            Residential and commercial real estate and can help you In finding
            suitable Apartments, Flats, Villas, plots, office space, showrooms,
            factories etc. Our experts can consult you on investment in real
            estate for assured returns. We can also take care of real estate
            liaison work. It's our belief to do business with full integrity and
            commitment. CCS Is one of the fastest growing companies in the
            region. We are focusing on performing and delivering. It's our
            belief to do business with full integrity and commitment. We
            specialize in offering Proficient Consultation Services
            Professionally & Independently to Investors World widely."
          </div>
        </div>
      </div>
      <div className="w-full items-baseline bg-white py-10 px-6 lg:px-32">
        {/* Vision Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-[#9A7B4F] xsm:text-base mb-4">Vision</h1>
          <p className="text-gray-700 leading-relaxed xsm:text-xs">
            Our Vision is to build a new trademark in real estate and provide
            Epic Property as the first choice of every property finder. To
            become India’s largest real estate’s service organization, our
            vision is to facilitate asset creation for our end customers and
            enable peace & prosperity for them.
          </p>
        </div>
        {/* Mission Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#9A7B4F] mb-4 xsm:text-base">Mission</h1>
          <p className="text-gray-700 leading-relaxed mb-6 xsm:text-xs">
            CCS provides our clients with the very best service in all aspects
            of residential and commercial property, whether we are handling
            their sale or purchase personally or connecting them to one of our
            associated property experts for particular service. We believe in
            customers for life, being there for our clients throughout our
            journey in business. The best interest of our clients will always
            come first, and we will place the client's concerns ahead of our own
            in each and every transaction, as we are dedicated to the
            development of long-term client relationships.
          </p>
          <p className="text-gray-800 font-semibold">
            We are changing the real estate industry with Progression and
            Passion.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
