// components/ProfileSkeleton.tsx
"use client";

import React from "react";

export const ProfileSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-20 max-w-4xl animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
      </div>

      {/* Profile Card Skeleton */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        {/* Avatar + Basic Info */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-20 w-20"></div>
          <div className="flex-1 space-y-3">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-2/3"></div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0"
            >
              <div className="h-4 bg-gray-100 dark:bg-gray-600 rounded w-1/4 mb-3"></div>
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, j) => (
                  <React.Fragment key={j}>
                    <div className="h-3 bg-gray-50 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded"></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-8">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div className="h-10 bg-gray-100 dark:bg-gray-600 rounded w-32"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center mt-6">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          Vérification de la session...
        </p>
      </div>
    </div>
  );
};
