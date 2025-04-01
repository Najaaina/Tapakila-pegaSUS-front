"use client";

export default function CategoryGridSkeleton() {
  return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, id) => (
            <div
              key={id}
              className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-500 animate-pulse"
            >
              <div className="w-full h-64 relative">
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-400" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-6 w-32 bg-gray-400 dark:bg-gray-500 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
