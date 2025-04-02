import { Filters } from "@/types";
import snakeToCamel from '../utils/snakeCaseToCamelCaseUtils';
import { fetchWithAuth } from "./fecthWithAuth";

export const fetchFutureReservations = async (
    filters: Filters,
    page: number = 1,
    limit: number = 10
) => {
    const params = new URLSearchParams();

    // Ajout des filtres
    if (filters.selectedDate) params.append('date', filters.selectedDate);
    if (filters.selectedLocation) params.append('location', filters.selectedLocation);
    if (filters.selectedCategory) params.append('category', filters.selectedCategory);
    if (filters.searchTerm) params.append('title', filters.searchTerm);

    // Pagination
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/account/reservation/future?${params.toString()}`
    );

    if (!response) {
        throw new Error('No response after auth');
    }

    const data = await response.json();

    return {
        data: data.data.map((reservation: any) => snakeToCamel(reservation)),
        total: data.total
    };
};