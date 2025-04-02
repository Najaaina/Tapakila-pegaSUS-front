import snakeToCamel from "../utils/snakeCaseToCamelCaseUtils"; 
export const fetchCategories = async () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const url = `${API_BASE_URL}/event/categories`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Erreur lors de la récupération des catégories d'événement");
    const data = await res.json();
    return data.map((category: any) => snakeToCamel(category));
}