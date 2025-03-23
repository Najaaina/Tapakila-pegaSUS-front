"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import EventCardSquare from "./EventCardSquare";
import { Event } from "@/types/index";
import { Pagination } from "../ui/PaginationfutureEvent";
import { getUpcomingEvents } from "@/lib/loaders/events";

interface EventsSectionProps {
  initialData: {
    events: Event[];
    total: number;
  };
}

export default function EventsSection({ initialData }: EventsSectionProps) {
  const [events, setEvents] = useState(initialData.events);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(initialData.total / 10)
  );
  const pageSize = 10;

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getUpcomingEvents(currentPage, pageSize);
        setEvents(data.events);
        setTotalPages(Math.ceil(data.total / pageSize));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, [currentPage]);

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

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Button to View More Events */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/event"
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
