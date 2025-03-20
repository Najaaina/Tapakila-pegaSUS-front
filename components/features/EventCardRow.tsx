import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid';

// Define the Event interface to type the event prop
interface Event {
  id: string;
  title: string;
  artist: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  image: string;
  price: number;
  maxPerPerson: number;
  ticketType: string;
}

// Main EventCard component
export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex items-center px-4 py-4 hover:bg-gray-50/80 transition-colors group border-b border-gray-200 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      
      {/* Image Section */}
      <div className="w-16 h-16 relative mr-4 rounded-lg overflow-hidden shadow-sm">
        <Image
          src={event.image}
          alt={event.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Main Information Section */}
      <div className="flex-1 flex items-center gap-8">
        
        {/* Event Title and Artist */}
        <div className="flex-1 min-w-[200px] border-r border-gray-100 pr-6">
          <h3 className="font-medium text-base text-black dark:text-white">{event.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{event.artist}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">🎟️ Ticket Type: {event.ticketType}</p>
        </div>

        {/* Date, Time, and Location Section */}
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 min-w-[280px] border-r border-gray-100 pr-6">
          <span className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gray-400" />
            <span className="dark:text-white">{event.date}</span>
          </span>
          <span className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-gray-400" />
            <span className="dark:text-white">{event.startTime}</span>
          </span>
          <span className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-gray-400" />
            <span className="dark:text-white">{event.location}</span>
          </span>
        </div>

        {/* Details Link and Price Section */}
        <div className="flex items-center gap-6 min-w-[140px] pl-2">
          <Link
            href={`/events/${event.id}`}
            className="text-sm px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
          >
            Details
          </Link>
          <span className="font-medium text-base text-blue-600">{event.price}€</span>
        </div>
      </div>
    </div>
  );
}