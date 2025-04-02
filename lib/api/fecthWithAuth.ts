import { getToken } from './auth';

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = getToken();

    const headers = new Headers(options.headers || {});
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    if (!headers.has('Content-Type')) {
        headers.append('Content-Type', 'application/json');
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            window.location.href = 'auth/login';
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};