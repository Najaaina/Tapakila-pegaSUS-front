// /components/features/EventList.tsx
import EventCardRow from "@/components/features/EventCardRow";
import { Event } from "@/types/index";

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <>
      {/* Column headers for event list */}
      <div className="hidden md:grid grid-cols-4 gap-4 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase border-b pb-2">
        <div>Événement</div>
        <div>Date</div>
        <div>Heure</div>
        <div>Lieu</div>
      </div>

      {/* List of events */}
      <div className="space-y-1">
        {events.map((event, index) => {
          return (
            <EventCardRow
              key={index}
              event={event}
            />
          );
        })}
      </div>
    </>
  );
}
