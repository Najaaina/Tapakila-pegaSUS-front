import useSWR from "swr";
import { fetchLocations } from "@/lib/api/fetchAllLocations";

const useLocationsQuery = () => {
    const { data: locations, error, isLoading } = useSWR(
        'locations',
        fetchLocations,
        {
            revalidateOnFocus: false,
            dedupingInterval: 5 * 60 * 1000 // Cache les données pendant 5 minutes
        }
    );

    return {
        locations,
        error,
        isLoading
    };
};

export default useLocationsQuery;