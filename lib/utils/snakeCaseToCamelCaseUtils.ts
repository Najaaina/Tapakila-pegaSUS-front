function snakeToCamel<T>(obj: any): T {
    if (typeof obj !== 'object' || obj === null) {
        return obj as T;
    }

    if (Array.isArray(obj)) {
        return obj.map(snakeToCamel) as T;
    }

    const newObj: { [key: string]: any } = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey: string = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
            newObj[newKey] = snakeToCamel(obj[key]);
        }
    }
    return newObj as T;
}

// Exemple d'utilisation
interface ApiData {
    ticket_type: string;
    user_id: number;
}

interface ConvertedData {
    ticketType: string;
    userId: number;
}

const dataFromApi: ApiData = {
    ticket_type: "VIP",
    user_id: 123
};

const convertedData = snakeToCamel<ConvertedData>(dataFromApi);
console.log(convertedData); // { ticketType: "VIP", userId: 123 }
