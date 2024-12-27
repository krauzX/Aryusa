"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="loader border-t-4 border-green-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
