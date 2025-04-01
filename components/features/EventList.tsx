import { Event } from "@/types/index";
import EventCardSquare from "./EventCardSquare";

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCardSquare key={event.idEvent} event={event} />
      ))}
    </div>
  );
}
