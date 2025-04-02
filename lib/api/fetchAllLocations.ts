import snakeToCamel from "../utils/snakeCaseToCamelCaseUtils";

export const fetchLocations = async () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const url = `${API_BASE_URL}/event/locations`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération des lieux d'événement");
    const data = await res.json();
    return data.map((location: any) => snakeToCamel(location));
}