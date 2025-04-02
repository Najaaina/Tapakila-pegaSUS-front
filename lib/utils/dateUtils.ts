export interface FormattedDateTime {
    date: string;
    time: string;
}
/**
 * Formate une date en séparant la date et l'heure 
 * @param {Date | null | undefined} dateObj - L'objet Date à formater
 * @returns {Object} Un objet contenant la date et l'heure formatées
 */

export function formatDateTime(dateObj: number | string | Date | null | undefined): FormattedDateTime {
    if (!dateObj) return { date: '', time: '' };

    const date = new Date(dateObj);
    if (isNaN(date.getTime())) return { date: '', time: '' };

    // console.log(date);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return {
        date: `${day}/${month}/${year}`,
        time: `${hours}:${minutes}`
    };
}
