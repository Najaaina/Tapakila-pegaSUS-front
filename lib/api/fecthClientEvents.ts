import { Filters } from "@/types";

export const fetchEvents = async (filters : Filters, page : number, pageSize : number) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const params = new URLSearchParams();
    if (filters.selectedDate) params.append("date", filters.selectedDate);
    if (filters.selectedLocation) params.append("location", filters.selectedLocation);
    if (filters.selectedCategory) params.append("category", filters.selectedCategory);
    params.append("page", page.toString());
    params.append("pageSize", pageSize.toString());

    const url = `${API_BASE_URL}/event?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération des événements");

    const events = await res.json();
    const total = Number(res.headers.get("X-Total-Count")) || 0;

    return { events, total };
};
