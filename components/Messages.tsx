"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "Buy the Ancient Medical care",
  "The best Medicine for healthy life",
  "Discover the future of health",
  "Embrace the natural healing",
  "Innovative solutions for wellness",
];

const Messages: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const changeMessage = () => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setCurrentMessage(messages[randomIndex]);
    };

    changeMessage(); // Set initial message

    const messageInterval = setInterval(() => {
      changeMessage();
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="typewriter-container overflow-hidden border-r-4 border-white whitespace-nowrap animate-fadeInAndOut">
      <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base animate-typewriter">
        {currentMessage}
      </p>
    </div>
  );
};

export default Messages;
