import Image from "next/image";
import React from "react";
import Link from "next/link";

interface CollectionProps {
  mainImage: string;
  title: string;
  description: string;
  offer: string;
  link: string;
}

const Collection = ({
  collection,
  color,
}: {
  collection: CollectionProps;
  color: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl mb-2 bg-white group">
      <div className="relative w-full h-48">
        <Image
          src={
            collection.mainImage
              ? `/${collection.mainImage}`
              : "/collection_placeholder.jpg"
          }
          layout="fill"
          objectFit="cover"
          alt={collection?.title}
        />
      </div>
      <div className="p-4 text-center">
        <h2
          className={
            color === "black"
              ? `text-xl text-black font-normal mt-2 uppercase`
              : `text-xl text-green-700 font-normal mt-2 uppercase`
          }
        >
          {collection.title}
        </h2>
        <p
          className={
            color === "black"
              ? "text-lg text-black font-semibold"
              : "text-lg text-green-600 font-semibold"
          }
        >
          {collection.description}
        </p>
        <p className="text-lg text-red-600 font-bold mt-2">
          {collection.offer}
        </p>
        <Link
          href={collection.link}
          className="block w-full uppercase bg-white px-0 py-2 text-base font-bold text-green-600 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 mt-2"
        >
          <p className="text-center hover:animate-vibrate">Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Collection;
