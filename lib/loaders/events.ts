export async function getUpcomingEvents(page: number = 1, pageSize: number = 10) {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const res = await fetch(`${API_BASE_URL}/event?upcoming=true&page=${page}&pageSize=${pageSize}`, {
            next: { revalidate: 60 }, // ISR: Rafraîchi toutes les 60s
        });
        
            // // Simuler un délai de chargement (par exemple 5 secondes)
            // await new Promise(resolve => setTimeout(resolve, 5000));

        if (!res.ok) {
            console.error("API Error:", res.status, res.statusText);
            throw new Error(`Failed to fetch events: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        const total = res.headers.get("X-Total-Count");

        return { events: data, total: Number(total) };
    } catch (error) {
        console.error("Error in getUpcomingEvents:", error);
        return { events: [], total: 0 };
    }
}
