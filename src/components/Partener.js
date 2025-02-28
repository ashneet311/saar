import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "Gillco.jpg",
  "sushma.jpg",
  "ambika.jpg",
  "suntec.jpg",
  "ty.jpg",
  "godreg.jpg",
  "M3M.jpg",
  "Mahindra.jpg",
  "Medallion.jpg",
  "omaxe.jpg",
];

const Partner = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true, // Enable looping
    speed: 600, // Transition speed
    slidesToShow: 5, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay delay
    responsive: [
      {
        breakpoint: 1024, // For devices with width < 1024px
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // For devices with width < 768px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // For devices with width < 480px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="p-16">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our Partners</h1>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="object-contain h-32 w-[90%]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
