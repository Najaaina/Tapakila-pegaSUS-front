"use client";
import Link from "next/link";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Event } from "@/types/index";
import { formatDateTime, FormattedDateTime } from "@/lib/utils/dateUtils";
import useTotalAvailableTickets from "@/lib/queries/useTotalAvailableTickets";

type EventCardSquareProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardSquareProps) {
  const { availableTickets, totalAvailable, error, isLoading } = useTotalAvailableTickets(
    event.idEvent,
    event.ticketType
  );
  const { date, time }: FormattedDateTime = formatDateTime(event.eventDate);

  return (
    <Link
      href={`/event/${event.idEvent}`}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image.url}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
          {!isLoading ? (
            <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
              {totalAvailable}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </span>
          ) : (
            <div className="flex items-center gap-2">
              <div className="h-4 w-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      </div>

      {/* Event Details Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {event.organizer}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <CalendarIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            {date} • {time}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPinIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            {event.location}
          </div>
        </div>

        {/* Remaining Tickets and Details Link */}
        <div className="mt-4 flex justify-between items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">
            {isLoading
              ? "Chargement..."
              : error
              ? "Erreur"
              : `${totalAvailable} places restantes`}
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
            Détails
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
