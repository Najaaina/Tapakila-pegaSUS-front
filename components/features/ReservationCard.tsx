import { FormattedDateTime, formatDateTime } from "@/lib/utils/dateUtils";
import { Reservation } from "@/types";

interface ReservationCardProps {
  reservation: Reservation;
  selectedReservation?: Reservation;
  setSelectedReservation: (selectedReservation: Reservation) => void;
}

export default function ReservationCard({
  reservation,
  selectedReservation,
  setSelectedReservation,
}: ReservationCardProps) {
  const { date, time }: FormattedDateTime = formatDateTime(
    reservation.event.eventDate
  );
  const { date: reservationDate, time: reservationTime }: FormattedDateTime =
    formatDateTime(reservation.reservedAt);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors ${
        selectedReservation?.idReservation === reservation.idReservation
          ? "bg-blue-50 dark:bg-blue-900/20"
          : "bg-white dark:bg-gray-900"
      }`}
      onClick={() => setSelectedReservation(reservation)}
    >
      {/* Event Image and Title - now stacked */}
      <div className="flex flex-col items-start space-y-2">
        <div className="w-full h-32 md:h-20 overflow-hidden rounded-lg relative">
          <img
            src={reservation.event.image?.url  || "/userPic.jpg"}
            alt={reservation.event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
            <span className="font-medium text-white dark:text-gray-100 truncate">
              {reservation.event.title}
            </span>
          </div>
        </div>
      </div>

      {/* Event Date */}
      <div className="flex flex-col">
        <span className="text-gray-900 dark:text-white">{date}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
      </div>

      {/* Reservation Date */}
      <div className="flex flex-col">
        <span className="text-gray-900 dark:text-white">{reservationDate}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {reservationTime}
        </span>
      </div>

      {/* Tickets */}
      <div className="flex flex-wrap gap-2 items-start">
        {reservation.reservationTicket.map((ticket, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm text-gray-800 dark:text-gray-200"
          >
            {ticket.ticketType.ticketName} x{ticket.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}
