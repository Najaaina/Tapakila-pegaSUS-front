"use client";

import ReservationDashboard from "@/components/features/ReservationDashboard";
import ReservationDetail from "@/components/features/ReservationDetail";
import ReservationHeader from "@/components/ui/ReservationHeader";
import ReservationTabs from "@/components/ui/ReservationTabs";
import React, { useEffect, useState } from "react";
// import { reservations } from "@/mocks/reservationsMocks";
import { Reservation } from "@/types";
import AuthGuard from "@/components/guards/AuthGuard";
import useFutureOrPastReservations from "@/lib/queries/useFutureReservations";
import useCategoriesQuery from "@/lib/queries/useCategoriesQuery";
import useLocationsQuery from "@/lib/queries/useLocationsQuery";
import FilterBar from "@/components/features/FilterBar";
import { FilterBarSkeleton } from "@/components/ui/skeleton/FilterBarSkeleton";
import { Pagination } from "@/components/ui/PaginationfutureEvent";
import ReservationSkeleton from "@/components/ui/skeleton/ReservationSkeleton";

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("future");
  const [selectedReservation, setSelectedReservation] = useState<Reservation>();
  const [filters, setFilters] = useState({
    selectedDate: "",
    selectedLocation: "",
    selectedCategory: "",
    searchTerm: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { reservations, total, error, isLoading } = useFutureOrPastReservations(
    filters,
    currentPage,
    pageSize,
    activeTab
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
  if (error) return <p>Erreur lors du chargement des reservations</p>;

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl pt-20">
        <ReservationHeader />
        <ReservationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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

        {isLoading ? (
          <ReservationSkeleton />
        ) : (
          <div className="flex flex-col xl:flex-row gap-6 mt-6">
            <div className="w-full xl:w-2/3">
              <ReservationDashboard
                reservations={reservations}
                selectedReservation={selectedReservation}
                setSelectedReservation={setSelectedReservation}
              />
            </div>

            <div
              className={`w-full xl:w-1/3 ${
                !selectedReservation ? "hidden xl:block" : ""
              }`}
            >
              {selectedReservation ? (
                <ReservationDetail reservation={selectedReservation} />
              ) : (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6 h-fit sticky top-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Aucune réservation sélectionnée
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Cliquez sur une réservation pour afficher les détails
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={total}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </AuthGuard>
  );
}
