// /app/(main)/events/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import EventList from "@/components/features/EventList";
import FilterBar from "@/components/features/FilterBar";
import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";
import { events } from "@/data/events";
import { Event } from "@/types/testIndex";

export default function AllEvents() {
  const router = useRouter();

  // State for filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
  const getSafePage = (): number => {
    if (typeof window === "undefined") return 1;

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
  }, [searchTerm, selectedDate, selectedLocation, selectedCategory, router]);

  // Calculate the events to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Unique values for filter dropdowns
  const uniqueDates = Array.from(new Set(events.map((event) => event.date)));
  const uniqueLocations = Array.from(
    new Set(events.map((event) => event.location))
  );
  const uniqueCategories = Array.from(
    new Set(events.map((event) => event.category))
  );

  // Filter handlers
  const handleFilterChange = {
    date: setSelectedDate,
    location: setSelectedLocation,
    category: setSelectedCategory,
    search: setSearchTerm,
  };

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4">
        <PageHeader
          title="Tous les événements"
          count={filteredEvents.length}
          backUrl="/"
        />

        <FilterBar
          filters={{
            dates: uniqueDates,
            locations: uniqueLocations,
            categories: uniqueCategories,
          }}
          selectedFilters={{
            date: selectedDate,
            location: selectedLocation,
            category: selectedCategory,
            search: searchTerm,
          }}
          onChange={handleFilterChange}
        />

        <EventList events={currentEvents} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
