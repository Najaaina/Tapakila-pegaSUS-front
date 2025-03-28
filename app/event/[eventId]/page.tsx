"use client";
import Image from "next/image";
import { events } from "@/data/events";
import { use } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  TicketIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";
import useEventByIdQuery from "@/lib/queries/useEventByIdQuery";
import EventDetailSkeleton from "@/components/ui/skeleton/EventDetailSkeleton";
import { formatDateTime, FormattedDateTime } from "@/lib/utils/dateUtils";

export default function EventDetail({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = use(params);
  const {event, error, isLoading} = useEventByIdQuery(eventId);

  if (error) return <p>{`Erreur lors du chargement de l'evenement avec l'id ${eventId}`}</p>;
  if (!event) return <p>Aucun événement trouvé.</p>; // ✅ Ajout de cette vérification

    const { date, time }: FormattedDateTime = formatDateTime(event.eventDate);

  return (
    <>
      <div className="pt-20">
        {isLoading ? (
          <EventDetailSkeleton/>
        ) : (
          <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-[calc(100vh-180px)]">
            {/* Image à gauche */}
            <div className="md:w-1/2 h-full relative group">
              <img
                src={event.image.url}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Partie droite avec les informations */}
            <div className="md:w-1/2 p-6 overflow-y-auto dark:bg-gray-800">
              {/* En-tête avec titre et prix */}
              <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {event.title}
                    </h1>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      Par {event.organizer}
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {event.title}€
                    </span>
                  </div>
                </div>
              </div>

              {/* Informations principales */}
              <div className="space-y-3 mt-4">
                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-white">
                      Lieu
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mt-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  À propos de l'événement
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Billets */}
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Billets disponibles
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {/* {event.availableTickets} places */}
                      {event.titre} places
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-600 dark:text-gray-300">
                    {/* Max {event.maxPerPerson} par personne */}
                    Max {event.title} par personne
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  <span>+261 34 00 000 00</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  <span>contact@event.com</span>
                </div>
              </div>

              {/* Bouton Réserver */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white py-3 rounded-xl font-semibold mt-4 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
                <TicketIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
}
