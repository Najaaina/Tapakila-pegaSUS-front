import { NextResponse } from 'next/server';
import {events} from '@/mocks/events';

export async function GET(req: Request, { params }: { params: { id_event: string } }) {
  const event = events.find(event => event.idEvent === params.id_event);
  if (!event) {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 });
  }
  return NextResponse.json(event);
}
