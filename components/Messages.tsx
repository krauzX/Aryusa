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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentMessage((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        if (charIndex < messages[currentIndex].length) {
          setCurrentMessage((prev) => prev + messages[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charIndex, currentIndex, isDeleting]);

  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base border-r-4 border-white animate-caret">
        {currentMessage}
      </p>
    </div>
  );
};

export default Messages;
