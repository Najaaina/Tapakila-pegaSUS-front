import snakeToCamel from "../utils/snakeCaseToCamelCaseUtils";
import { Event } from "@/types";

export const fetchEventById = async (url: string): Promise<Event | null> => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${API_BASE_URL}${url}`);
    if (!res.ok) throw new Error("Erreur lors de la récupération de l'événement");

    const data = await res.json();
    return snakeToCamel(data) as Event;
};
