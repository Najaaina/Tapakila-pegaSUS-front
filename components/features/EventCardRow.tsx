import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { Event } from "@/types/index";
import { FormattedDateTime, formatDateTime } from "@/lib/utils/dateUtils";
import { calculateTotalAvailableTickets } from "@/lib/utils/ticketUtils";

export default function EventCardRow({ event }: { event: Event }) {
  const { date, time }: FormattedDateTime = formatDateTime(event.eventDate);
  const totalAvailableTickets = calculateTotalAvailableTickets(
    event.ticketTypes
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="md:col-span-5 flex items-center space-x-4">
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={event.image.url}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">
            {event.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {event.organizer}
          </p>
        </div>
      </div>

      {/* Date */}
      <div className="hidden md:flex md:col-span-2 items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
        <CalendarIcon className="h-4 w-4 text-gray-400" />
        <span>{date}</span>
      </div>

      {/* Heure*/}
      <div className="hidden md:flex md:col-span-2 items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
        <ClockIcon className="h-4 w-4 text-gray-400" />
        <span>{time}</span>
      </div>

      {/* Lieu*/}
      <div className="hidden md:flex md:col-span-2 items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
        <MapPinIcon className="h-4 w-4 text-gray-400" />
        <span>{event.location}</span>
      </div>

      {/* Billets*/}
      <div className="md:col-span-1 flex items-center justify-end space-x-2">
        <span className="font-medium text-blue-600 dark:text-blue-400 text-sm">
          {totalAvailableTickets}{" "}
        </span>
        <Link
          href={`/event/${event.idEvent}`}
          className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
        >
          Détails
        </Link>
      </div>

      {/* Version mobile - informations condensées */}
      <div className="md:hidden flex items-center justify-between pt-2 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <ClockIcon className="h-3 w-3" />
            <span>{time}</span>
          </span>
          <span className="flex items-center space-x-1">
            <MapPinIcon className="h-3 w-3" />
            <span className="truncate max-w-[100px]">{event.location}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
