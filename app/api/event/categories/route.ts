import { NextResponse } from 'next/server';
import { events } from '@/mocks/events';

/**
 * GET /event/categories
 * Retourne une liste unique des catégories existantes
 */
export async function GET_categories() {
    const categories = Array.from(new Set(events.map(event => event.category)));
    return NextResponse.json(categories);
}