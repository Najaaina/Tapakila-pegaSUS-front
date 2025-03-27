"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import FilterBar from "@/components/features/FilterBar";
import EventList from "@/components/features/EventList";
import { Pagination } from "@/components/ui/PaginationfutureEvent";
import EventListSkeleton from "@/components/ui/EventListSkeleton";
import { useEventSearch } from "@/lib/utils/useEventSearch";
import useEventsQuery from "@/lib/queries/useEventsQuery";
import useCategoriesQuery from "@/lib/queries/useCategoriesQuery";
import useLocationsQuery from "@/lib/queries/useLocationsQuery";
import { FilterBarSkeleton } from "@/components/ui/FilterBarSkeleton";

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
  const {
    locations,
    error: locationsError,
    isLoading: isLoadingLocations,
  } = useLocationsQuery();
  const {
    categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useCategoriesQuery();

  const { filteredEvents } = useEventSearch(data?.events, searchTerm);
  console.log(categories)
  console.log(locations)

  if (locationsError) return <p>Erreur lors du chargement des lieux des événements</p>
  if (categoriesError) return <p>Erreur lors du chargement des lieux des événements</p>
  if (error) return <p>Erreur lors du chargement des événements.</p>;

  return (
    <div>
      <PageHeader count={data?.total || 0} />
      {isLoadingCategories && isLoadingLocations ? (
        <FilterBarSkeleton />
      ) : (
        <FilterBar
          uniqueCategories={categories}
          uniqueLocations={locations}
          onFilterChange={setFilters}
        />
      )}

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