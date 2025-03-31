"use client";

import { FormattedDateTime, formatDateTime } from "@/lib/utils/dateUtils";
import { Reservation } from "@/types";

interface ReservationDetailProps {
  reservation: Reservation;
}

export default function ReservationDetail({
  reservation,
}: ReservationDetailProps) {
  const { date, time }: FormattedDateTime = formatDateTime(
    reservation.event.eventDate
  );
  const { date: reservationDate, time: reservationTime }: FormattedDateTime =
    formatDateTime(reservation.reservationDate);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
        Détail de la réservation
      </h2>

      <div className="space-y-6">
        {/* Event Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-full sm:w-20 h-20 overflow-hidden rounded-lg">
            <img
              src={reservation.event.image.url}
              alt={reservation.event.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {reservation.event.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {reservation.event.category}
            </p>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Event Date */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date de l'événement
            </p>
            <p className="text-gray-900 dark:text-white">{date}</p>
            <p className="text-gray-600 dark:text-gray-400">{time}</p>
          </div>

          {/* Reservation Date */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date de réservation
            </p>
            <p className="text-gray-900 dark:text-white">{reservationDate}</p>
            <p className="text-gray-600 dark:text-gray-400">
              {reservationTime}
            </p>
          </div>

          {/* Location */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
              Lieu
            </p>
            <p className="text-gray-900 dark:text-white">
              {reservation.event.location}
            </p>
          </div>

          {/* Category */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">
              Catégorie
            </p>
            <p className="text-gray-900 dark:text-white">
              {reservation.event.category}
            </p>
          </div>
        </div>

        {/* Tickets */}
        <div>
          <p className="font-medium mb-3 text-gray-700 dark:text-gray-300">
            Tickets réservés
          </p>
          <div className="flex flex-wrap gap-2">
            {reservation.reservationTicket.map((ticket, index) => (
              <div
                key={index}
                className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg flex items-center gap-2"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {ticket.ticketType.ticketName}
                </span>
                <span className="bg-blue-600 dark:bg-blue-500 text-white w-5 h-5 inline-flex items-center justify-center rounded-full text-xs">
                  {ticket.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
