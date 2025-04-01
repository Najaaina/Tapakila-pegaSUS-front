"use client";
import React from "react";

interface EventImageProps {
  imageUrl: string;
  category: string;
  title: string;
  organizer: string;
}

export const EventImage: React.FC<EventImageProps> = ({
  imageUrl,
  category,
  title,
  organizer,
}) => {
  return (
    <div className="relative h-full w-full group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm z-10">
        <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider">
          {category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h1 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
          {title}
        </h1>
        <p className="text-gray-200 font-medium mt-1">Par {organizer}</p>
      </div>
    </div>
  );
};
