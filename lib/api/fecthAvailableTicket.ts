export const fetchAvailableTicket = async (id_event: string, id_ticket_type: string) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const url = `${API_BASE_URL}/event/${id_event}/ticket/${id_ticket_type}/availability`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération de la disponibilité du billet");

    const data = await res.json();
    return data;
};