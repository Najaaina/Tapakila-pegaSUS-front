import { TicketType } from "@/types/index";

/**
 * Calcule le nombre total de tickets disponibles pour un événement
 * @param ticketTypes - Liste des types de tickets
 * @returns Le nombre total de tickets disponibles
 */
export function calculateTotalAvailableTickets(ticketTypes: TicketType[] | null | undefined): number {
    if (!ticketTypes || ticketTypes.length === 0) return 0;

    return ticketTypes.reduce((total, ticketType) => {
        return total + (ticketType.disponibility || 0);
    }, 0);
}