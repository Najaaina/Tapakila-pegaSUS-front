import { Event } from '@/types';
import { Category } from '@/types';

export function filterUniqueEventsByCategory(events: Event[]): Event[] {
    const categories = new Map();
    return events.filter((event) => {
        if (!categories.has(event.category)) {
            categories.set(event.category, true);
            return true;
        }
        return false;
    });
}

export function getUniqueCategory(events : Event[]) : Category[] {
    return [...new Set(events.map(event => event.category))];
}