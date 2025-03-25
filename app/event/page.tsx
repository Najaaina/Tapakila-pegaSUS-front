"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import FilterBar from "@/components/features/FilterBar";
import EventList from "@/components/features/EventList";
import { Pagination } from "@/components/ui/PaginationfutureEvent";
import EventListSkeleton from "@/components/ui/EventListSkeleton";
import useEventsQuery from "@/lib/queries/useEventsQuery";
import { getUniqueCategory, getUniqueLocations } from "@/lib/utils/eventUtils";
import { useEventSearch } from "@/lib/utils/useEventSearch";
import { SearchBar } from "@/components/features/SearchBar";

const AllEvents = () => {
  const [filters, setFilters] = useState({
    selectedDate: "",
    selectedLocation: "",
    selectedCategory: "",
    searchTerm: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, error, isLoading, total } = useEventsQuery(
    filters,
    currentPage,
    pageSize
  );
  const { filteredEvents } = useEventSearch(data?.events, searchTerm);

  if (error) return <p>Erreur lors du chargement des événements.</p>;

  return (
    <div>
      {/* le count à modifier en evenements dispo avec filtrage ou un truc du genre */}
      <PageHeader count={data?.total || 0} />
      <FilterBar
        uniqueCategories={getUniqueCategory(data?.events || [])}
        uniqueLocations={getUniqueLocations(data?.events || [])}
        onFilterChange={setFilters}
      />
      {/* <SearchBar onSearch={setSearchTerm} />  */}
      {isLoading ? (
        <EventListSkeleton count={pageSize} />
      ) : (
        <EventList events={filteredEvents} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={total}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AllEvents;
