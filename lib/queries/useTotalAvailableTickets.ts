import { TicketType } from "@/types";
import useSWR from "swr";
import { fetchAvailability } from "@/lib/api/fecthAllAvalaibleTicketForEvent";

const useTotalAvailableTickets = (id_event: string, ticketTypes: TicketType[]) => {
    const { data, error, isLoading } = useSWR(
        id_event && ticketTypes.length > 0 ? `/event/${id_event}/tickets/availability` : null,
        () => fetchAvailability(id_event, ticketTypes),
        { revalidateOnFocus: true }
    );

    return {
        availableTickets: data ?? [],
        totalAvailable: data ? data.reduce((sum, ticket) => sum + ticket.availableQuantity, 0) : 0,
        error,
        isLoading,
    };
};

export default useTotalAvailableTickets;