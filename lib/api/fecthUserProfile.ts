import { User } from "@/types";
import { fetchWithAuth } from "./fecthWithAuth";
import snakeToCamel from "@/lib/utils/snakeCaseToCamelCaseUtils";

export const fetchUserProfile = async (): Promise<User> => {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/account/profile`);

    if (!response) {
        throw new Error("No response after auth");
    }

    const data = await response.json();

    return snakeToCamel<User>(data);
};
