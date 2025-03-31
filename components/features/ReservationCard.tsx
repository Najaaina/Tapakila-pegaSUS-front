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
    const { date, time }: FormattedDateTime = formatDateTime(reservation.event.eventDate);
    const { date: reservationDate, time: reservationTime }: FormattedDateTime = formatDateTime(reservation.reservationDate);

  return (
    <div
      className={`grid grid-cols-4 py-4 px-4 border-b hover:bg-gray-50 cursor-pointer ${
        selectedReservation?.idReservation === reservation.idReservation
          ? "bg-blue-50"
          : ""
      }`}
      onClick={() => setSelectedReservation(reservation)}
    >
      <div className="flex items-center">
        <div className="w-12 h-12 mr-3 overflow-hidden">
          <img
            src={reservation.event.image.url}
            alt={reservation.event.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <span className="font-medium">{reservation.event.title}</span>
      </div>

      <div className="flex flex-col">
        <span>{date}</span>
        <span className="text-sm text-gray-500">{time}</span>
      </div>

      <div className="flex flex-col">
        <span>{reservationDate}</span>
        <span className="text-sm text-gray-500">
          {reservationTime}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {reservation.reservationTicket.map((ticket, index) => (
          <div key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {ticket.ticketType.ticketName} x{ticket.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}
