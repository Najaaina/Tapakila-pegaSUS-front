import { Event } from '@/types';
import { Category } from '@/types';

// get one event per categories
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