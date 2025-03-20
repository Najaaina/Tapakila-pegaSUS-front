import { NextResponse } from 'next/server';
import {events} from '@/mocks/events';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);
  const date = searchParams.get('date');
  const location = searchParams.get('location');
  const category = searchParams.get('category');

  let filteredEvents = events;

  if (date) {
    const timestamp = parseInt(date, 10);
    filteredEvents = filteredEvents.filter(event => event.eventDate >= timestamp);
  }

  if (location) {
    filteredEvents = filteredEvents.filter(event => event.location.toLowerCase() === location.toLowerCase());
  }

  if (category) {
    filteredEvents = filteredEvents.filter(event => event.category.toLowerCase() === category.toLowerCase());
  }

  const paginatedEvents = filteredEvents.slice((page - 1) * pageSize, page * pageSize);

  return NextResponse.json(paginatedEvents);
}