import { User } from "@/types";
import { fetchWithAuth } from "./fecthWithAuth";

export const fetchUserProfile = async (): Promise<User> => {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/account/profile`);

    if (!response) {
        throw new Error('No response after auth');
    }

    return response.json();
};