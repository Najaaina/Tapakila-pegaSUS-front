import React from "react";

interface EventHeaderProps {
  title: string;
  organizer: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  title,
  organizer,
}) => {
  return (
    <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Par {organizer}
          </p>
        </div>
      </div>
    </div>
  );
};
