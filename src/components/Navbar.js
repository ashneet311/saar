import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Property from "./Property";
import Contact from "./Contact";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div
        className={`font-roboto font-medium transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 w-full z-50`}
      >
        <div className="bg-[#9A7B4F] text-white py-2 px-4 flex justify-between items-center">
          <div className="flex gap-14">
            <Link
              className="hover:text-[#9A7B4F]"
              to="callto:+971582450101,+971552959123"
            >
              +971582450101,+971552959123
            </Link>

            <Link to="mailto:support@alketbirealestate.com" target="_blank">
              Email: support@alketbirealestate.com
            </Link>
          </div>
          <div>
            <p className="text-sm">Saeed Alketbi & Ahmad Real Estate LLC</p>
          </div>
        </div>
        <nav className="bg-white shadow-md px-1 gap-52 py-0 flex justify-center items-center">
          <img src="/logo.png" alt="Logo" className="w-40" />
          <ul className="flex space-x-6 text-sm">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Property"
                end
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Property
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutus"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contactus"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <a href="https://wa.me/qr/S3LVDB3Y3SB3H1">
            <button className="bg-[#0bbf41] text-white px-4 py-2 rounded-[2px] flex gap-1 items-center">
              <FaWhatsapp /> Get Quote
            </button>
          </a>
        </nav>
      </div>
      <div className="mt-24">
        {" "}
        {/* Adjust padding to avoid content overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/Contactus" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
