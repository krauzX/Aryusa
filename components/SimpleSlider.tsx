"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  images: string[];
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ensure navigation arrows are enabled
  };

  return (
    <div className="slider-container  max-w-screen-2xl mx-auto px-16 max-md:px-7">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover f"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
