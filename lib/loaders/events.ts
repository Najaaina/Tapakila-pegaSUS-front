export async function getUpcomingEvents() {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    // Simuler un délai de chargement (par exemple 5 secondes)
    await new Promise(resolve => setTimeout(resolve, 5000));

    const res = await fetch(`${API_BASE_URL}/event?upcoming=true?page=1&pageSize=10`, {
        next: { revalidate: 60 }, // ISR: Rafraîchi toutes les 60s
    });

    if (!res.ok) throw new Error("Failed to fetch events");

    return res.json();
}
