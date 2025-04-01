"use client";
import ConfirmationTicketDashboard from "@/components/features/ConfirmationTicketDashboard";
import ReservationDetailHeader from "@/components/ui/ReservationDetailHeader";
import { ReservationTicket } from "@/types/index";
import { useState } from "react";

export default function PageConfirmation() {
  // Données de l'événement
  const eventData = {
    title: "Concert de Jazz",
    category: "Musique",
    image: "https://picsum.photos/seed/event_70/600/400",
    eventDate: "15 mai 2025",
    reservationDate: "1 avril 2025",
    location: "Salle Pleyel, Paris",
  };

  // État pour gérer les tickets
  const [tickets, setTickets] = useState<ReservationTicket[]>([
    {
      idReservationTicket: "RT-001",
      quantity: 2,
      ticketType: {
        idTicket: "TT-001",
        ticketName: "VIP Pass",
        price: 150,
        disponibility: 50,
        buyingLimit: 4,
      },
    },
    {
      idReservationTicket: "RT-002",
      quantity: 3,
      ticketType: {
        idTicket: "TT-002",
        ticketName: "Standard Entry",
        price: 75,
        disponibility: 100,
        buyingLimit: 6,
      },
    },
  ]);

  // Gestionnaire de changement de quantité
  const handleTicketQuantityChange = (
    ticketId: string,
    newQuantity: number
  ) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.idReservationTicket === ticketId
          ? { ...ticket, quantity: newQuantity }
          : ticket
      )
    );
  };

  // Calcul des totaux
  const totalQuantity = tickets.reduce(
    (sum, ticket) => sum + ticket.quantity,
    0
  );
  const totalPrice = tickets.reduce(
    (sum, ticket) => sum + ticket.ticketType.price * ticket.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto my-8 px-4 pt-12">
      <div className="bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-sky-100 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Confirmation de votre réservation
        </h1>

        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-sky-400 dark:bg-sky-500 rounded-full"></div>
        </div>

        {/* Section Événement */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-sky-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-sky-500 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Vous avez réservé pour l'événement :
          </p>

          <ReservationDetailHeader
            urlImage={eventData.image}
            eventTitle={eventData.title}
            eventCategory={eventData.category}
          />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-sky-500 dark:text-sky-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">Date :</span> {eventData.eventDate}
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-sky-500 dark:text-sky-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">Lieu :</span> {eventData.location}
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-sky-500 dark:text-sky-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Réservé le :</span>{" "}
              {eventData.reservationDate}
            </div>
          </div>
        </div>

        {/* Section Billets */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 border border-sky-100 dark:border-gray-700 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-sky-500 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Vos billets
          </h2>
          <ConfirmationTicketDashboard
            tickets={tickets}
            onTicketQuantityChange={handleTicketQuantityChange}
          />
        </div>

        {/* Section Récapitulatif */}
        <div className="bg-sky-50 dark:bg-gray-800 rounded-xl p-6 mb-8 border border-sky-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-sky-500 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Récapitulatif
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">
                Nombre de billets:
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                {totalQuantity}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Total:</span>
              <span className="font-medium text-sky-600 dark:text-sky-400">
                {totalPrice.toFixed(2)} €
              </span>
            </div>
          </div>
        </div>

        {/* Bouton de confirmation */}
        <div className="flex justify-center mt-6">
          <button className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white font-medium py-3 px-10 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Confirmer la réservation
          </button>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2 text-sky-500 dark:text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Vous pouvez modifier les quantités avant confirmation
          </p>
        </div>
      </div>
    </div>
  );
}
