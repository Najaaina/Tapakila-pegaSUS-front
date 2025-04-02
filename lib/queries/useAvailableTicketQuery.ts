import useSWR from "swr";
import { fetchAvailableTicket } from "@/lib/api/fecthAvailableTicket";

const useAvailableTicketQuery = (id_event: string, id_ticket_type: string) => {
    const { data: availableTicket, error, isLoading } = useSWR(
        id_event && id_ticket_type ? `/event/${id_event}/ticket/${id_ticket_type}/availability` : null,
        () => fetchAvailableTicket(id_event, id_ticket_type),
        { revalidateOnFocus: true }
    );

    return {
        availableTicket,
        error,
        isLoading,
    };
};

export default useAvailableTicketQuery;