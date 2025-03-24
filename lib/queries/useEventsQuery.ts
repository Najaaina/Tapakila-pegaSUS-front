import useSWR from "swr";
import { fetchEvents } from "@/lib/api/fecthClientEvents";
import { Filters } from "@/types";

const useEventsQuery = (filters : Filters, page : number, pageSize :number) => {
    const { data, error, isLoading } = useSWR(
        [filters, page, pageSize],
        () => fetchEvents(filters, page, pageSize),
        { revalidateOnFocus: false }
    );

    return {
        data,
        error,
        isLoading,
        total: Math.ceil((data?.total || 0) / pageSize),
    };
};

export default useEventsQuery;
