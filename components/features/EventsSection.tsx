import Link from "next/link";
import EventCardSquare from "./EventCardSquare";
import { Event } from "@/types/index";

type EventsSectionProps = {
  events: Event[];
};

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header for Events */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Événements à venir
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          {events.length} événements disponibles
        </p>
      </div>

      {/* Grid of Events */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCardSquare key={event.idEvent} event={event} />
        ))}
      </div>

      {/* Button to View More Events */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/events"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
        >
          Voir tous les événements
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}