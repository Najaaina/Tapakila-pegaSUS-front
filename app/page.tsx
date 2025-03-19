import Navbar from "@/components/NavBar";
import { Carousel } from "@/components/ui/Carousel";
import CategoryGrid from "@/components/CategoryGrid";
import { events } from "@/data/events";
import Link from "next/link";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

// Main component for the Home page
export default function Home() {
  return (
    <>
      <div className="pt-20">
        {/* Carousel Section */}
        <Carousel />

        {/* Section Événements */}
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
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {event.price}€
                    </span>
                  </div>
                </div>

                {/* Event Details Section */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {event.artist}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <CalendarIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      {event.date} • {event.startTime}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPinIcon className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                      {event.location}
                    </div>
                  </div>

                  {/* Remaining Tickets and Details Link */}
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {event.availableTickets} places restantes
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

        {/* Section Catégories */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {" "}
          {/* Réduction du padding */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Catégories
          </h2>
          <CategoryGrid/>
        </div>
      </div>
    </>
  );
}
