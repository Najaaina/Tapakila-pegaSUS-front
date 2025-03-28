import React from 'react';
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

interface EventAboutProps {
  date: string;
  time: string;
  location: string;
}

export const EventAbout: React.FC<EventAboutProps> = ({ date, time, location }) => {
  return (
    <div className="space-y-3 mt-4">
      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <div className="ml-3">
          <p className="font-medium text-gray-900 dark:text-white">
            {date}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {time}
          </p>
        </div>
      </div>

      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <div className="ml-3">
          <p className="font-medium text-gray-900 dark:text-white">
            Lieu
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};