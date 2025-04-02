import { Filters, Reservation } from "@/types";
import useSWR from "swr";
import { fetchFutureReservations } from "../api/fecthFutureReservation";

interface ReservationsResponse {
    data: Reservation[];
    total: number;
}

const useFutureReservations = (filters: Filters, page: number = 1, pageSize: number = 10) => {
    const { data, error, isLoading, mutate } = useSWR<ReservationsResponse>(
        ['/api/reservations/future', filters, page, pageSize],
        () => fetchFutureReservations(filters, page, pageSize),
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

export default useFutureReservations;