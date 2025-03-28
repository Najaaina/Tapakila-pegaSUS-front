import React from "react";

const EventListSkeleton = ({ count = 10 }: { count?: number }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse rounded-lg bg-gray-100 p-4">
          <div className="h-40 rounded bg-gray-300"></div>
          <div className="mt-3 h-4 w-3/4 rounded bg-gray-300"></div>
          <div className="mt-2 h-4 w-1/2 rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default EventListSkeleton;
