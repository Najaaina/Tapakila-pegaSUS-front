import useSWR from "swr";
import { fetchCategories } from "../api/fecthAllCategories";

const useCategoriesQuery = () => {
    const { data: categories, error, isLoading } = useSWR(
        'categories',
        fetchCategories,
        {
            revalidateOnFocus: false,
            dedupingInterval: 5 * 60 * 1000
        }
    );

    return {
        categories,
        error,
        isLoading
    };
};

export default useCategoriesQuery;