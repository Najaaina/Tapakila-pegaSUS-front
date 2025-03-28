"use client";
import { useState, useEffect } from "react";
import PageHeader from "@/components/ui/PageHeader";
import FilterBar from "@/components/features/FilterBar";
import EventList from "@/components/features/EventList";
import { Pagination } from "@/components/ui/PaginationfutureEvent";
import EventListSkeleton from "@/components/ui/skeleton/EventListSkeleton";
import useEventsQuery from "@/lib/queries/useEventsQuery";
import useCategoriesQuery from "@/lib/queries/useCategoriesQuery";
import useLocationsQuery from "@/lib/queries/useLocationsQuery";
import { FilterBarSkeleton } from "@/components/ui/skeleton/FilterBarSkeleton";

const AllEvents = () => {
  const [filters, setFilters] = useState({
    selectedDate: "",
    selectedLocation: "",
    selectedCategory: "",
    searchTerm: "",
  });
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

  if (locationsError)
    return <p>Erreur lors du chargement des lieux des événements</p>;
  if (categoriesError) return <p>Erreur lors du chargement des catégories</p>;
  if (error) return <p>Erreur lors du chargement des événements.</p>;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="pt-10">
        <PageHeader count={data?.total || 0} />
      </div>

      <div className="mb-8">
        {isLoadingCategories || isLoadingLocations ? (
          <FilterBarSkeleton />
        ) : (
          <FilterBar
            uniqueCategories={categories}
            uniqueLocations={locations}
            onFilterChange={setFilters}
          />
        )}
      </div>

      <div className="mb-8">
        {isLoading ? (
          <EventListSkeleton count={pageSize} />
        ) : (
          <EventList events={data?.events} />
        )}
      </div>

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={total}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AllEvents;
