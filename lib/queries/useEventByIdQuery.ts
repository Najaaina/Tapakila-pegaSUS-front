import useSWR from "swr";
import { fetchEventById } from "@/lib/api/fecthEventById";
import { Event } from "@/types";

const useEventByIdQuery = (id_event: string) => {
    const { data: event, error, isLoading } = useSWR(
        id_event ? `/event/${id_event}` : null,
        () => fetchEventById(id_event),
        { revalidateOnFocus: true }
    );

    return {
        event,
        error,
        isLoading,
    };
};

export default useEventByIdQuery;
