import React from "react";

interface EventDescriptionProps {
  description: string;
}

export const EventDescription: React.FC<EventDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        À propos de l'événement
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
