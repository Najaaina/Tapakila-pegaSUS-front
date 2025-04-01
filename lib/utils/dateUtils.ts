export interface FormattedDateTime {
    date: string;
    time: string;
}
/**
 * Formate une date en séparant la date et l'heure 
 * @param {Date | null | undefined} dateObj - L'objet Date à formater
 * @returns {Object} Un objet contenant la date et l'heure formatées
 */
export function formatDateTime(dateObj: number | Date | null | undefined): FormattedDateTime {
    if (!dateObj) return { date: '', time: '' };

    const date = typeof dateObj === 'number' ? new Date(dateObj * 1000) : dateObj;

    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('fr-FR', { month: 'long' });
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day} ${month} ${year}`;
    const formattedTime = `${hours}:${minutes}`;

    return {
        date: formattedDate,
        time: formattedTime
    };
}