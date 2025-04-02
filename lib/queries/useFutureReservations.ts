import { Filters, Reservation } from "@/types";
import useSWR from "swr";
import { fetchFutureOrPastReservations } from "../api/fecthFutureReservation";

interface ReservationsResponse {
    data: Reservation[];
    total: number;
}

const useFutureOrPastReservations = (filters: Filters, page: number = 1, pageSize: number = 10, time: string) => {
    const { data, error, isLoading } = useSWR<ReservationsResponse>(
        [`/api/reservations/${time}`, filters, page, pageSize],
        () => fetchFutureOrPastReservations(filters, page, pageSize, time),
        {
            revalidateOnFocus: false,
            keepPreviousData: true
        }
    );

    return {
        reservations: data?.data || [],
        total: data?.total || 0,
        error,
        isLoading
    };
};

export default useFutureOrPastReservations;