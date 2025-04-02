import { Filters, Reservation } from "@/types";
import { fetchPastReservations } from "../api/fecthPastReservations";
import useSWR from "swr";

interface ReservationsResponse {
    data: Reservation[];
    total: number;
}

const usePastReservations = (filters: Filters, page: number = 1, pageSize: number = 10) => {
    const { data, error, isLoading, mutate } = useSWR<ReservationsResponse>(
        ['/api/reservations/past', filters, page, pageSize],
        () => fetchPastReservations(filters, page, pageSize),
        {
            revalidateOnFocus: false,
            keepPreviousData: true
        }
    );

    return {
        reservations: data?.data || [],
        total: data?.total || 0,
        totalPages: Math.ceil((data?.total || 0) / pageSize),
        error,
        isLoading,
        mutate
    };
};

export default usePastReservations;