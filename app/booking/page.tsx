"use client";

import ReservationDashboard from "@/components/features/ReservationDashboard";
import ReservationDetail from "@/components/features/ReservationDetail";
import ReservationHeader from "@/components/ui/ReservationHeader";
import ReservationTabs from "@/components/ui/ReservationTabs";
import React, { useState } from "react";
import { reservations } from "@/mocks/reservationsMocks";
import { Reservation } from "@/types";
import AuthGuard from "@/components/guards/AuthGuard";

export default function ReservationPage() {
  const [activeTab, setActiveTab] = useState("future");
  const [selectedReservation, setSelectedReservation] = useState<Reservation>();

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-7xl pt-20">
        <ReservationHeader />
        <ReservationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col xl:flex-row gap-6 mt-6">
          {/* Main Content */}
          <div className="w-full xl:w-2/3">
            <ReservationDashboard
              reservations={reservations}
              selectedReservation={selectedReservation}
              setSelectedReservation={setSelectedReservation}
            />
          </div>

          {/* Sidebar - Caché SEULEMENT sur très petits écrans (taille xs) */}
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
      </div>
    </AuthGuard>
  );
}