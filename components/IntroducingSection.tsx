"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import LeafAnimation from "./LeafAnimation";
import Messages from "./Messages";
import Testimonials from "./Testimonials";

const IntroducingSection: React.FC = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-r from-primary via-green-400 to-green-600 h-screen flex flex-col items-center animate-fadeIn">
      <div className="text-center flex flex-col gap-y-5 items-center animate-fadeInLeft delay-1000">
        <LeafAnimation />
        <h2 className="text-emerald-700 text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING
          <div className="mt-2 flex justify-center animate-fadeInAndOut">
            <Image
              className="mx-auto rounded-lg shadow-lg"
              src={"/logo-v1-svg.svg"}
              alt="LOGO"
              width={460}
              height={440}
            />
          </div>
        </h2>
        <Messages />
        <Link
          href="/shop"
          className="block text-white bg-green-700 font-bold px-12 py-3 text-xl hover:bg-emerald-800 transition duration-300 ease-in-out w-96 mt-2 max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto transform hover:scale-105"
        >
          SHOP NOW
        </Link>
      </div>
      <Testimonials />
    </div>
  );
};

export default IntroducingSection;
