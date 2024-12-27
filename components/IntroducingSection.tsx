"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import LeafAnimation from "./LeafAnimation";
import Messages from "./Messages";
import Testimonials from "./Testimonials";

const IntroducingSection: React.FC = () => {
  return (
    <div className="py-10 pt-16 bg-gradient-to-r from-primary via-green-400 to-green-600 min-h-screen flex flex-col items-center animate-fadeIn">
      <div className="text-center flex flex-col gap-y-5 items-center animate-fadeInLeft delay-1000">
        <LeafAnimation />
        <h2 className="text-emerald-700 text-5xl font-extrabold text-center mb-2 md:text-6xl sm:text-4xl max-[480px]:text-3xl">
          INTRODUCING
          <div className="mt-2 flex justify-center animate-fadeInAndOut">
            <Image
              className="mx-auto rounded-lg shadow-lg"
              src={"/logo-v1-svg.svg"}
              alt="LOGO"
              width={260}
              height={240}
            />
          </div>
        </h2>
        <Messages />
        <Link
          href="/shop"
          className="block text-white bg-green-700 font-bold px-8 py-2 text-lg hover:bg-emerald-800 transition duration-300 ease-in-out w-72 mt-2 sm:text-base sm:w-60 max-[480px]:w-48 mx-auto transform hover:scale-105"
        >
          SHOP NOW
        </Link>
      </div>
      <div className="mt-10 sm:mt-6">
        <Testimonials />
      </div>
    </div>
  );
};

export default IntroducingSection;
