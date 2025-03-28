import {
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function EventDetailSkeleton() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-[calc(100vh-180px)]">
          {/* Partie image - Skeleton */}
          <div className="md:w-1/2 h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>

          {/* Partie contenu - Skeleton */}
          <div className="md:w-1/2 p-6 overflow-y-auto dark:bg-gray-800 space-y-4">
            {/* En-tête */}
            <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
                <div className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Informations principales */}
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <CalendarIcon className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                <div className="ml-3 space-y-2">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <MapPinIcon className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                <div className="ml-3 space-y-2">
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl space-y-3">
              <div className="h-5 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-4/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Billets */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-blue-200 dark:bg-blue-800/50 rounded animate-pulse"></div>
                  <div className="h-3 w-24 bg-blue-200 dark:bg-blue-800/50 rounded animate-pulse"></div>
                </div>
                <div className="h-6 w-24 bg-blue-200 dark:bg-blue-800/50 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-3 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 mr-2 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-3 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Bouton - Skeleton */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-12 rounded-xl mt-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
