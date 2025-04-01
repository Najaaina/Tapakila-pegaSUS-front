import React from "react";

interface ReservationDetailHeaderProps {
  urlImage: string;
  eventTitle: string;
  eventCategory: string;
}

export default function ReservationDetailHeader({
  urlImage,
  eventTitle,
  eventCategory,
}: ReservationDetailHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="w-full sm:w-20 h-20 overflow-hidden rounded-lg">
        <img
          src={urlImage}
          alt={eventTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {eventTitle}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {eventCategory}
        </p>
      </div>
    </div>
  );
}
