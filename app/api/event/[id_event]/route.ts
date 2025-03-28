import { NextResponse } from 'next/server';
import { events } from '@/mocks/events';

export async function GET(req: Request, context: { params: Promise<{ id_event: string }> }) {
  const { id_event } = await context.params; 

  const event = events.find(event => event.idEvent === id_event);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}