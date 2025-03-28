import EventCardRow from "@/components/features/EventCardRow";
import { Event } from "@/types/index";

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="hidden md:grid grid-cols-12 gap-4 p-5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
        <div className="col-span-5">Événement</div>
        <div className="col-span-2 text-center">Date</div>
        <div className="col-span-2 text-center">Heure</div>
        <div className="col-span-2 text-center">Lieu</div>
        <div className="col-span-1 text-right">Billets</div>
      </div>

      {/* Liste des événements */}
      <div className="space-y-3 p-2">
        {events?.map((event) => (
          <EventCardRow key={event.idEvent} event={event} />
        ))}
      </div>
    </div>
  );
}
