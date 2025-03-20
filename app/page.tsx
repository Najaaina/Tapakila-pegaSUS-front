import { Carousel } from "@/components/ui/Carousel";
import EventsSection from "@/components/features/EventsSection";
import CategoryGrid from "@/components/features/CategoryGrid";
import { getUpcomingEvents } from "@/lib/loaders/events";

// Main component for the Home page
export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <>
      <div className="pt-20">
        {/* Carousel Section */}
        <Carousel events={events}/>

        {/* Events Section */}
        <EventsSection events={events} />

        {/* Categories Section */}
        <CategoryGrid />
      </div>
    </>
  );
}