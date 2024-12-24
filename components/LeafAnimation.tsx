"use client";

import React, { useEffect } from "react";

const generateLeaves = (count: number) => {
  return Array.from({ length: count }).map(() => ({
    left: `${Math.random() * 90}%`,
    delay: `${Math.random() * 1}s`,
    duration: `${Math.random() * 3 + 2}s`,
  }));
};

const LeafAnimation: React.FC = () => {
  useEffect(() => {
    const leavesContainer = document.getElementById("leaves-container");
    if (leavesContainer) {
      leavesContainer.style.visibility = "hidden";
      leavesContainer.innerHTML = ""; // Clear existing leaves
      const leaves = generateLeaves(20);
      const fragment = document.createDocumentFragment(); // Use a document fragment for batch updates

      leaves.forEach((leaf) => {
        const leafElement = document.createElement("div");
        leafElement.className =
          'absolute w-12 h-12 bg-[url("/leaf.png")] bg-no-repeat bg-contain animate-leaf_fall';
        leafElement.style.left = leaf.left;
        leafElement.style.animationDelay = leaf.delay;
        leafElement.style.setProperty("--animation-duration", leaf.duration);
        fragment.appendChild(leafElement); // Append to fragment
      });
      setTimeout(() => {
        leavesContainer.style.visibility = "visible";
      }, 500);

      leavesContainer.appendChild(fragment); // Append fragment to DOM
      const longestDuration = Math.max(
        ...leaves.map(
          (leaf) => parseFloat(leaf.duration) + parseFloat(leaf.delay)
        )
      );
      setTimeout(() => {
        leavesContainer.remove();
      }, (longestDuration + 1) * 1000);
    }
  }, []);

  return <div id="leaves-container" className=" h-full"></div>;
};

export default LeafAnimation;
