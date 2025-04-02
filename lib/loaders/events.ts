import snakeToCamel from "../utils/snakeCaseToCamelCaseUtils";

export async function getUpcomingEvents(page: number = 1, limit: number = 10) {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const res = await fetch(`${API_BASE_URL}/event?page=${page}&limit=${limit}`, {
            next: { revalidate: 60 }, // ISR: Rafraîchi toutes les 60s
        });

        if (!res.ok) {
            console.error("API Error:", res.status, res.statusText);
            throw new Error(`Failed to fetch events: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return {
            events: data.data.map((event: any) => snakeToCamel<Event>(event)),
            total: data.total
        };

    } catch (error) {
        console.error("Error in getUpcomingEvents:", error);
        return { events: [], total: 0 };
    }
}
