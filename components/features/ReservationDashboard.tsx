import { Reservation } from "@/types";
import ReservationTitles from "../ui/ReservationTitles";
import ReservationCard from "./ReservationCard";

interface ReservationDashboardProps {
  reservations: Reservation[];
  selectedReservation?: Reservation;
  setSelectedReservation: (selectedReservation: Reservation) => void;
}

export default function ReservationDashboard({
  reservations,
  selectedReservation,
  setSelectedReservation,
}: ReservationDashboardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
      <ReservationTitles />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {reservations?.length > 0 ? (
          reservations.map((reservation) => (
            <ReservationCard
              key={reservation.idReservation}
              reservation={reservation}
              selectedReservation={selectedReservation}
              setSelectedReservation={setSelectedReservation}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center p-4">
            Aucune réservation disponible
          </p>
        )}
      </div>
    </div>
  );
}
