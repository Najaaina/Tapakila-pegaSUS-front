import { NextResponse } from 'next/server';
import { events } from '@/mocks/events';

/**
 * GET /event/locations
 * Retourne une liste de toutes les locations existantes (avec doublons)
 */
export async function GET() {
    try {
        if (!events || !Array.isArray(events)) {
            throw new Error('Events data not loaded');
        }

        const locations = Array.from(new Set(events.map(event => event.location)));
        return NextResponse.json(locations);
    } catch (error) {
        return NextResponse.json([], { status: 500 });
    }
}