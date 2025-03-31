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
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-bold mb-6">Détail de la réservation</h2>

      <div className="space-y-6">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 overflow-hidden">
            <img
              src={reservation.event.image.url}
              alt={reservation.event.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <span className="text-lg font-medium">{reservation.event.title}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Date de l'événement</p>
            <p className="text-gray-600">{date}</p>
            <p className="text-gray-600">{time}</p>
          </div>
          <div>
            <p className="font-medium">Date de réservation</p>
            <p className="text-gray-600">{reservationDate}</p>
            <p className="text-gray-600">{reservationTime}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Lieu</p>
            <p className="text-gray-600">{reservation.event.location}</p>
          </div>
          <div>
            <p className="font-medium">Catégorie</p>
            <p className="text-gray-600">{reservation.event.category}</p>
          </div>
        </div>

        <div>
          <p className="font-medium mb-2">Tickets réservés</p>
          <div className="flex flex-wrap gap-3">
            {reservation.reservationTicket.map((ticket, index) => (
              <div key={index} className="bg-blue-100 px-4 py-2 rounded-lg">
                <span className="font-medium">
                  {ticket.ticketType.ticketName}
                </span>
                <span className="ml-2 bg-blue-600 text-white w-6 h-6 inline-flex items-center justify-center rounded-full text-sm">
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
