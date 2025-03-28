import { Carousel } from "@/components/ui/Carousel";
import CategoryGrid from "@/components/features/CategoryGrid";
import { getUpcomingEvents } from "@/lib/loaders/events";
import EventsSection from "@/components/features/EventsSection";

// Main component for the Home page
export default async function Home() {
  const data = await getUpcomingEvents();

  return (
    <>
      <div className="pt-15">
        {/* Carousel Section */}
        <Carousel data={data}/>

        {/* Events Section */}
        <EventsSection initialData={data}/>

        {/* Categories Section */}
        <CategoryGrid data={data}/>
      </div>
    </>
  );
}