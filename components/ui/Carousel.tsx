// components/ui/Carousel.tsx
"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Event } from "@/types/index";


type EventsCarousel = {
  events: Event[];
};

// const images = [
//   {
//     src: "/Images/Carousel/1.jpg",
//     title: "Événement Exclusive",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     src: "/Images/Carousel/2.jpg",
//     title: "Concert Épique",
//     description:
//       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     src: "/Images/Carousel/3.jpg",
//     title: "Festival International",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
//   },
//   {
//     src: "/Images/Carousel/4.jpg",
//     title: "Spectacle Unique",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
//   },
// ];

export function Carousel({ events } : EventsCarousel) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  // Filtrer pour n'avoir qu'un seul événement par catégorie
  const categories = new Map();
  const filteredEvents = events.filter((event) => {
    if (!categories.has(event.category)) {
      categories.set(event.category, true);
      return true;
    }
    return false;
  });

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="max-w-6xl mx-auto p-4 relative group bg-background rounded-2xl">
      <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="embla__container flex">
          {filteredEvents.map((event, index) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[500px]">
                {/* Image avec overlay */}
                <div className="relative h-full w-full">
                  <Image
                    src={event.image.url}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-lg mx-auto"
                    style={{
                      maxWidth: "95%",
                      objectPosition: "center",
                    }}
                    quality={100}
                    priority={index === 0}
                  />

                  {/* Overlay de texte aligné à gauche */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end items-start p-8">
                    <div className="text-white ml-8 space-y-4 max-w-2xl">
                      <h2 className="text-4xl font-bold">{event.title}</h2>
                      <p className="text-xl max-w-lg">{event.description}</p>
                      <Button className="text-lg px-6 py-3 bg-primary/90 hover:bg-primary">
                        Acheter des tickets
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {filteredEvents.map((_, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="sm"
                      className={`h-3 w-3 rounded-full p-0 transition-all ${
                        i === selectedIndex
                          ? "bg-primary w-6"
                          : "bg-muted opacity-50"
                      }`}
                      onClick={() => emblaApi?.scrollTo(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden group-hover:block"
        onClick={() => emblaApi?.scrollPrev()}
      >
        ←
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden group-hover:block"
        onClick={() => emblaApi?.scrollNext()}
      >
        →
      </Button>
    </div>
  );
}
