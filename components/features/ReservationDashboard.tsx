import { Reservation } from "@/types";
import ReservationHeader from "../ui/ReservationHeader";
import ReservationTabs from "../ui/ReservationTabs";
import ReservationCard from "./ReservationCard";
import ReservationDetail from "./ReservationDetail";
import ReservationTitles from "../ui/ReservationTitles";

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
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <ReservationTitles />
      <div>
        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation.idReservation}
            reservation={reservation}
            selectedReservation={selectedReservation}
            setSelectedReservation={setSelectedReservation}
          />
        ))}
      </div>
    </div>
  );
}
