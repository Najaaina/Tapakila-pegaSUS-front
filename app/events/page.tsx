"use client";

// Import necessary components and hooks
import EventCard from "@/components/features/EventCard";
import Pagination from "@/components/ui/Pagination";
import { events } from "@/data/events";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Main component for displaying all events
export default function AllEvents() {
  const router = useRouter();

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter events based on selected criteria
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? event.date === selectedDate : true;
    const matchesLocation = selectedLocation
      ? event.location === selectedLocation
      : true;
    const matchesCategory = selectedCategory
      ? event.category === selectedCategory
      : true;
    return matchesSearch && matchesDate && matchesLocation && matchesCategory;
  });

  // Pagination settings
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  // Function to safely get the current page number
  const getSafePage = () => {
    const params = new URLSearchParams(window.location.search);
    const pageStr = params.get("page");
    const pageNum = parseInt(pageStr || "", 10) || 1;
    return Math.min(Math.max(pageNum, 1), totalPages || 1);
  };
  const currentPage = getSafePage();

  // Reset page when filters change
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", "1");
    router.push(`/events?${params.toString()}`);
  }, [searchTerm, selectedDate, selectedLocation, selectedCategory]);

  // Calculate the events to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <div className="pt-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Back button */}
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Retour
            </Link>
          </div>

          {/* Header section */}
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-xl font-bold dark:text-white">
              Tous les événements
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredEvents.length} événements disponibles
            </span>
          </div>

          {/* Filters and Search section */}
          <div className="mb-6 flex flex-col justify-center items-center gap-3">
            <h2 className="text-lg font-semibold dark:text-white">
              Filtres et Recherche
            </h2>
            <div className="flex flex-col md:flex-row md:gap-4">
              <select
                className="border rounded-md p-2"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="">Par date</option>
                {Array.from(new Set(events.map((event) => event.date))).map(
                  (date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  )
                )}
              </select>

              <select
                className="border rounded-md p-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Par lieu</option>
                {Array.from(new Set(events.map((event) => event.location))).map(
                  (location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  )
                )}
              </select>

              <select
                className="border rounded-md p-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Par catégorie</option>
                {Array.from(new Set(events.map((event) => event.category))).map(
                  (category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  )
                )}
              </select>

              <input
                type="text"
                placeholder="Rechercher..."
                className="border rounded-md p-2 mt-4 md:mt-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Column headers for event list */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase border-b pb-2">
            <div>Événement</div>
            <div>Date</div>
            <div>Heure</div>
            <div>Lieu</div>
          </div>

          {/* List of events */}
          <div className="space-y-1">
            {currentEvents.map((event) => {
              const {
                id,
                title,
                artist,
                date,
                startTime,
                endTime,
                location,
                image,
                maxPerPerson,
                price,
                availableTickets,
                ticketType,
              } = event;
              return (
                <EventCard
                  key={id}
                  event={{
                    id,
                    title,
                    artist,
                    date,
                    startTime,
                    endTime,
                    location,
                    image,
                    maxPerPerson,
                    price,
                    ticketType: ticketType || "",
                  }}
                />
              );
            })}
          </div>

          {/* Pagination component */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
