"use client";
import { use } from "react";
import useEventByIdQuery from "@/lib/queries/useEventByIdQuery";
import EventDetailSkeleton from "@/components/ui/skeleton/EventDetailSkeleton";
import { formatDateTime } from "@/lib/utils/dateUtils";
import { EventImage } from "@/components/ui/EventImage";
import { EventAbout } from "@/components/ui/EventAbout";
import { EventDescription } from "@/components/ui/EventDescription";
import { TicketTypeTable } from "@/components/features/TicketTypeTable";
import { ReservationButton } from "@/components/features/ReservationButton";

export default function EventDetail({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = use(params);
  const { event, error, isLoading } = useEventByIdQuery(eventId);

  if (error)
    return (
      <p>{`Erreur lors du chargement de l'événement avec l'id ${eventId}`}</p>
    );
  if (!event) return <p>Aucun événement trouvé.</p>;

  const { date, time } = formatDateTime(event.eventDate);

  return (
    <div className="fixed inset-0 pt-20 mb-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto md:overflow-y-hidden">
      {isLoading ? (
        <EventDetailSkeleton />
      ) : (
        <div className="max-w-7xl mx-auto h-full md:h-[calc(100vh-80px)] flex flex-col md:flex-row gap-0 md:gap-0">
          {/* Partie gauche (image) */}
          <div className="md:w-1/2 h-full md:h-auto px-4 pb-4 md:pb-0 md:px-0">
            <div className="h-full rounded-tl-2xl rounded-bl-2xl overflow-hidden shadow-xl">
              <EventImage
                imageUrl={event.image.url}
                category={event.category}
                title={event.title}
                organizer={event.organizer}
              />
            </div>
          </div>

          {/* Partie droite (contenu) */}
          <div className="md:w-1/2 bg-white dark:bg-gray-800 shadow-xl overflow-y-auto rounded-tr-2xl rounded-br-2xl">
            <div className="p-6">
              <EventAbout date={date} time={time} location={event.location} />
              <EventDescription description={event.description} />
              <TicketTypeTable ticketTypes={event.ticketTypes} />
              <ReservationButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
