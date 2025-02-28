import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00354e] text-white py-10">
      <div className="container mx-auto p-10  bg-black bg-opacity-40 " style={{backgroundImage:'url("city.jpg")',
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
      }}>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ml-48">
          {/* Logo & Description */}
          <div>
            <img src="logo-w.png" alt="" />
             {/* Address Section */}
            <div>
            <h3 className="text-lg font-semibold mb-4">Addresses</h3>
            <ul className="space-y-2">
              <li>B-210, 2nd Floor, Elante Offices, Industrial Area Phase - 1, Chandigarh</li>
              <li>314, Tower 4, DLF Corporate Greens, Sector 74, Gurgaon</li>
              <li>Supreme Headquarters, Office 1003, Junction of 14th and 33rd Road, Bandra, West Mumbai, Maharashtra</li>
            </ul>
          </div>
          </div>

          {/* Links Section */}
          <div className='ml-20'>
            <h3 className="text-lg font-semibold mb-4 ">Popular Searches</h3>
            <ul className="space-y-2">
              <li>Our Projects</li>
              <li>Our Cities</li>
              <li>Property for Sale</li>
              <li>Photo Gallery</li>
              <li>Videos</li>
            </ul>
          </div>

          {/* Gallery Section */}
          <div className='ml-20'>
            <h3 className="text-lg font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              <img src="chandigarh.jpg" alt="Gallery 1" className="w-full h-20 object-cover" />
              <img src="city-6.jpg" alt="Gallery 2" className="w-full h-20 object-cover" />
              <img src="city-7.jpg" alt="Gallery 3" className="w-full h-20 object-cover" />
              <img src="city-2.jpg" alt="Gallery 4" className="w-full h-20 object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
      <div className=" p-4 flex flex-col md:flex-row justify-between items-center text-sm ml-20">
          <p>&copy; CCS Real Estate 2024. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">YouTube</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
