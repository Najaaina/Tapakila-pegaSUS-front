import useSWR from "swr";
import { fetchEventById } from "@/lib/api/fecthEventById";
import { Event } from "@/types";

const useEventByIdQuery = (id_event: string) => {
    const { data: event, error, isLoading } = useSWR<Event | null>(
        id_event ? `/event/${id_event}` : null,
        fetchEventById as (id: string) => Promise<Event | null>,
        { revalidateOnFocus: true }
    );

    return {
        event,
        error,
        isLoading,
    };
};

export default useEventByIdQuery;
