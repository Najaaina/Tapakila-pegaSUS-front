import React from "react";
import { TicketType } from "@/types";

interface TicketTypeTableProps {
  ticketTypes: TicketType[];
  // selectedTickets: Record<string, number>;
  // onTicketChange: (type: string, quantity: number) => void;
}

export const TicketTypeTable: React.FC<TicketTypeTableProps> = ({
  ticketTypes,
  // selectedTickets,
  // onTicketChange,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        Types de Billets
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <thead className="bg-gray-50 dark:bg-gray-600">
            <tr>
              <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Type
              </th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Prix
              </th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Disponibilité
              </th>
              <th className="p-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">
                Limite
              </th>
            </tr>
          </thead>
          <tbody>
            {ticketTypes.map((ticket) => (
              <tr
                key={ticket.idTicket}
                className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600/50"
              >
                <td className="p-3 text-sm font-medium text-gray-800 dark:text-white">
                  {ticket.ticketName}
                </td>
                <td className="p-3 text-sm text-gray-600 dark:text-gray-300">
                  {ticket.price}€
                </td>
                <td className="p-3 text-sm text-gray-600 dark:text-gray-300">
                  {ticket.disponibility} restants
                </td>
                <td className="p-3">
                  <select
                    // value={selectedTickets[ticket.ticketName] || 0}
                    // onChange={(e) =>
                    //   onTicketChange(ticket.ticketName, Number(e.target.value))
                    // }
                    value={ticket.ticketName}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                    disabled={ticket.disponibility === 0}
                  >
                    {[...Array(ticket.buyingLimit + 1).keys()].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
