import { Carousel } from "@/components/ui/Carousel";
import EventsSection from "@/components/features/EventsSection";
import CategoryGrid from "@/components/features/CategoryGrid";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getUpcomingEvents() {
  const res = await fetch(`${API_BASE_URL}/event?page=1&pageSize=10`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}

// Main component for the Home page
export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <>
      <div className="pt-20">
        {/* Carousel Section */}
        <Carousel />

        {/* Events Section */}
        <EventsSection events={events} />

        {/* Categories Section */}
        <CategoryGrid />
      </div>
    </>
  );
}