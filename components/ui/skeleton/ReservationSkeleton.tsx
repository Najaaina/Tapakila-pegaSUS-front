"use client";

export default function ReservationSkeleton() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 mt-6 animate-pulse">
      {/* Main Content Skeleton */}
      <div className="w-full xl:w-2/3">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow overflow-hidden">
          {/* Titles Skeleton */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 py-3 px-4 bg-gray-300 dark:bg-gray-600">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-400 dark:bg-gray-500 rounded"
              ></div>
            ))}
          </div>

          {/* Cards Skeleton */}
          <div className="divide-y divide-gray-300 dark:divide-gray-600">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4"
              >
                {/* Event Image & Title */}
                <div className="space-y-2">
                  <div className="w-full h-32 md:h-20 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                </div>

                {/* Event Date */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>

                {/* Reservation Date */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>

                {/* Tickets */}
                <div className="flex flex-wrap gap-2">
                  {[...Array(2)].map((_, j) => (
                    <div
                      key={j}
                      className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-16"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="w-full xl:w-1/3">
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full border border-gray-300 dark:border-gray-600 h-[500px]">
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-6"></div>

          {/* Header Skeleton */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-full sm:w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            <div className="space-y-2 w-full">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 dark:bg-gray-600 p-4 rounded-lg space-y-2"
              >
                <div className="h-4 bg-gray-400 dark:bg-gray-500 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 dark:bg-gray-500 rounded"></div>
                <div className="h-3 bg-gray-400 dark:bg-gray-500 rounded w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Tickets Skeleton */}
          <div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-3"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 bg-gray-300 dark:bg-gray-600 rounded-lg w-24"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
