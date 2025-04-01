export const fetchEventById = async (id_event: string) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const url = `${API_BASE_URL}/event/${id_event}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération de l'événement");

    return await res.json();
};
