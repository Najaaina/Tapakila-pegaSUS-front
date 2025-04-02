import { fetchAvailableTicket } from "@/lib/api/fecthAvailableTicket";
import { TicketType } from "@/types";

export const fetchAvailability = async (id_event: string, ticketTypes: TicketType[]) => {
    const results = await Promise.all(
        ticketTypes.map(async (ticket) => {
            try {
                const data = await fetchAvailableTicket(id_event, ticket.idTicket);
                return { idTicket: ticket.idTicket, availableQuantity: data.availableQuantity ?? 0 };
            } catch (error) {
                console.error(`Erreur pour le ticket ${ticket.idTicket}`, error);
                return { idTicket: ticket.idTicket, availableQuantity: 0 };
            }
        })
    );

    return results;
};