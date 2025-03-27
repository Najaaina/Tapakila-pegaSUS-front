import { NextResponse } from 'next/server';
import { events } from '@/mocks/events';

/**
 * GET /event/categories
 * Retourne une liste unique des catégories existantes
 */
export async function GET() {
    try {
        if (!events || !Array.isArray(events)) {
            throw new Error('Events data not loaded');
        }

        const categories = Array.from(new Set(events.map(event => event.category)));
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json([], { status: 500 });
    }
}