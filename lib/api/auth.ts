export const login = async (email: string, password: string) => {
    try {
        const response = await fetch("https://tapakila-backend-gaqg.onrender.com/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Identifiants incorrects');
        }

        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};


// lib/api/auth.ts
export const register = async (userData: {
    name: string;
    email: string;
    password: string;
}) => {
    const response = await fetch("https://tapakila-backend-gaqg.onrender.com/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        throw new Error("L'inscription a échoué");
    }

    return response.json();
};

export const storeToken = (token: string) => {
    // Stockage sécurisé du token
    if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', token);
    }
};

export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('authToken');
    }
    return null;
};

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
    }
};