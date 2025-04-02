"use client";
import React from "react";
import { TicketType } from "@/types";
import useTotalAvailableTickets from "@/lib/queries/useTotalAvailableTickets";

interface TicketTypeTableProps {
  idEvent: string;
  ticketTypes: TicketType[];
}

export const TicketTypeTable: React.FC<TicketTypeTableProps> = ({
  idEvent,
  ticketTypes,
}) => {
  const { availableTickets, error, isLoading } = useTotalAvailableTickets(
    idEvent,
    ticketTypes
  );

  if (isLoading) {
    return (
      <p className="text-gray-600 dark:text-gray-300">
        Chargement des disponibilités...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500">
        Erreur lors du chargement des disponibilités.
      </p>
    );
  }

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
            {ticketTypes.map((ticket) => {
              const availableTicket = availableTickets.find(
                (t) => t.idTicket === ticket.idTicket
              );
              const availableQuantity = availableTicket
                ? availableTicket.availableQuantity
                : 0;

              return (
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
                    {availableQuantity} restants
                  </td>
                  <td className="p-3">
                    <select
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
                      disabled={availableQuantity === 0}
                    >
                      {[...Array(ticket.buyingLimit + 1).keys()].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
