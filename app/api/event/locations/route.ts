import { NextResponse } from 'next/server';
import { events } from '@/mocks/events';

/**
 * GET /event/locations
 * Retourne une liste de toutes les locations existantes (avec doublons)
 */
export async function GET_locations() {
    const locations = events.map(event => event.location);
    return NextResponse.json(locations);
}