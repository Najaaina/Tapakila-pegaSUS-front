import { ReservationTicket } from "@/types";
import ConfirmationTicket from "../ConfirmationTicket";

interface ConfirmationTicketDashboardProps {
  tickets: ReservationTicket[];
  onTicketQuantityChange: (ticketId: string, newQuantity: number) => void;
}

export default function ConfirmationTicketDashboard({
  tickets,
  onTicketQuantityChange,
}: ConfirmationTicketDashboardProps) {
  const totalQuantity = tickets.reduce(
    (sum, ticket) => sum + ticket.quantity,
    0
  );
  const totalPrice = tickets.reduce(
    (sum, ticket) => sum + ticket.ticketType.price * ticket.quantity,
    0
  );

  return (
    <div className="border border-sky-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
      <div className="grid grid-cols-3 bg-gradient-to-r from-sky-50 to-sky-100 dark:from-gray-800 dark:to-gray-700 p-4">
        <div className="font-semibold text-gray-700 dark:text-gray-300 flex items-center">
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Type
        </div>
        <div className="text-center font-semibold text-gray-700 dark:text-gray-300">
          Quantité
        </div>
        <div className="text-right font-semibold text-gray-700 dark:text-gray-300">
          Prix
        </div>
      </div>

      <div className="divide-y divide-sky-100 dark:divide-gray-700">
        {tickets.map((ticket) => (
          <ConfirmationTicket
            key={ticket.idReservationTicket}
            ticketName={ticket.ticketType.ticketName}
            price={ticket.ticketType.price}
            quantity={ticket.quantity}
            onQuantityChange={(newQuantity) =>
              onTicketQuantityChange(ticket.idReservationTicket, newQuantity)
            }
          />
        ))}
      </div>

      <div className="grid grid-cols-3 bg-sky-50 dark:bg-gray-800 p-4 font-semibold border-t-2 border-sky-200 dark:border-gray-600">
        <div className="text-gray-900 dark:text-white flex items-center">
          TOTAL
        </div>
        <div className="text-center text-gray-900 dark:text-white">
          {totalQuantity}
        </div>
        <div className="text-right text-sky-600 dark:text-sky-400 text-lg">
          {totalPrice.toFixed(2)} €
        </div>
      </div>
    </div>
  );
}
