import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10 animate-fadeIn">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2 animate-fadeInLeft delay-1000">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl animate-zoomIn">
            THE PRODUCT OF THE FUTURE
          </h1>
          <p className="text-white max-sm:text-sm animate-fadeIn delay-2000">
            Discover the innovative product that brings a touch of nature and
            technology together. Embrace the future with our revolutionary
            product designed to enhance your lifestyle.
          </p>
          <div className="flex gap-x-3 max-lg:flex-col max-lg:gap-y-3">
            <button className="bg-white text-green-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-green-300 transition-colors duration-300 ease-in-out shadow-lg rounded-lg transform hover:scale-105 animate-bounceIn delay-3000">
              BUY NOW
            </button>
            <button className="bg-white text-green-600 font-bold px-12 py-3 max-lg:text-xl max-sm:text-lg hover:bg-green-300 transition-colors duration-300 ease-in-out shadow-lg rounded-lg transform hover:scale-105 animate-bounceIn delay-4000">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="animate-fadeInRight delay-1000">
          <Image
            src="/banner.png"
            width={400}
            height={400}
            alt="Nature-inspired product"
            className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto shadow-2xl rounded-lg animate-zoomIn delay-2000"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
