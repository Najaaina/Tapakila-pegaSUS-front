import { Filters } from "@/types";
import snakeToCamel from "../utils/snakeCaseToCamelCaseUtils";

export const fetchEvents = async (filters: Filters, page: number, limit: number) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const params = new URLSearchParams();
    if (filters.selectedDate) params.append("date", filters.selectedDate);
    if (filters.selectedLocation) params.append("location", filters.selectedLocation);
    if (filters.selectedCategory) params.append("category", filters.selectedCategory);
    if (filters.searchTerm) params.append("title", filters.searchTerm)
    params.append("page", page.toString());
    params.append("limit", limit.toString());

    const url = `${API_BASE_URL}/event?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération des événements");

    const data = await res.json();
    return {
        events: data.data.map((event: any) => snakeToCamel(event)),
        total: data.total
    };
};
