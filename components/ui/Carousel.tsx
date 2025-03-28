"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Event } from "@/types/index";
import { filterUniqueEventsByCategory } from '@/lib/utils/eventUtils';

type CarouselProps = {
  data:{
    events: Event[],
    total: number
  };
};

export function Carousel({ data }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const filteredEvents = filterUniqueEventsByCategory(data.events);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="w-full h-screen max-h-[80vh] relative bg-black">
      <div className="embla h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {filteredEvents.map((event, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 h-full relative" key={index}>
              {/* Image de fond plein écran */}
              <div className="absolute inset-0">
                <Image
                  src={event.image.url}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                  priority={index === 0}
                  onError={(e) => {
                    e.currentTarget.src = "/Images/errorImg.jpg"
                  }}
                />
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Contenu */}
              <div className="relative h-full flex flex-col justify-center px-16 max-w-7xl mx-auto">
                <div className="text-white space-y-6 z-10">
                  <h2 className="text-5xl font-bold drop-shadow-lg">{event.title}</h2>
                  <p className="text-xl max-w-2xl drop-shadow-md">{event.description}</p>
                  <div className="flex gap-4">
                    <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 rounded-full">
                      Acheter des tickets
                    </Button>
                    <Button variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 rounded-full">
                      Plus d'infos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination en bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {filteredEvents.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-8 rounded-full transition-all ${
              i === selectedIndex
                ? "bg-primary"
                : "bg-gray-400/50 hover:bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>

      {/* Navigation */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:bg-black/15 rounded-full p-4 z-10 transition-all hidden md:block"
        onClick={() => emblaApi?.scrollPrev()}
      >
        ←
      </button>
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:bg-black/15 rounded-full p-4 z-10 transition-all hidden md:block"
        onClick={() => emblaApi?.scrollNext()}
      >
        →
      </button>
    </div>
  );
}