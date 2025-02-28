import React from 'react';

const videos = [
  {
    image: '/Mohali.jpg', // Path relative to public folder
    description: 'Luxury Flats in Affordable Price in PR-7 Road',
    button: '3BHK READY TO MOVE FLAT FOR SALEIN ZIRAKPUR',
  },
  {
    image: '/mumbai.jpg', // Path relative to public folder
    description: 'Ready to Move Luxury Apartments',
    button: 'LUXURY FLATS IN AIRPORT ROAD MOHALI',
  },
];

const Video = () => {
  return (
    <div className="p-10 bg-gray-50">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <p className="text-blue-500">Browse popular Videos</p>
        <h1 className="text-3xl font-bold">Videos</h1>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-md"
            style={{
              backgroundImage: `url(${video.image})`,
              height: '200px', // Adjust height as needed
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="bg-white w-2/3 text-black text-xs tracking-tighter font-semibold px-2 py-1 rounded">
                {video.button}
              </div>
              <p className="mt-4 text-lg font-semibold">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Browse More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition duration-200">
          Browse More
        </button>
      </div>
    </div>
  );
};

export default Video;
