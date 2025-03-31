"use client";

import ReservationDashboard from "@/components/features/ReservationDashboard";
import ReservationDetail from "@/components/features/ReservationDetail";
import ReservationHeader from "@/components/ui/ReservationHeader";
import ReservationTabs from "@/components/ui/ReservationTabs";
import React, { useState } from "react";

import { reservations } from "@/mocks/reservationsMocks";
import { Reservation } from "@/types";

export default function ReservationPage() {
  // État pour suivre l'onglet actif (événements passés ou futurs)
  const [activeTab, setActiveTab] = useState("future");
  // État pour suivre la réservation sélectionnée
  const [selectedReservation, setSelectedReservation] = useState<Reservation>();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl pt-20">
      <ReservationHeader />
      <ReservationTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

      <div className="flex gap-8">
        <div className="w-2/3">
          <ReservationDashboard reservations={reservations} selectedReservation={selectedReservation} setSelectedReservation={setSelectedReservation}/>
        </div>

        {selectedReservation && (
          <div className="w-1/3">
            <ReservationDetail reservation={selectedReservation} />
          </div>
        )}
      </div>
    </div>
  );
}
