// components/CategoryGrid.tsx
import Image from "next/image"; // Importez le composant Image de Next.js
import Link from "next/link";
import { Event } from "@/types/index";
import { getUniqueCategory } from "@/lib/utils/eventUtils";

type CategoryGridProps = {
  events: Event[];
};

export default function CategoryGrid({ events }: CategoryGridProps) {
  const categories = getUniqueCategory(events);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Catégories
      </h2>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, id) => (
            <div
              key={id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <Link href="/events">
                <div className="w-full h-64 relative">
                  <Image
                    src={`/Images/categories/${category}.jpg`}
                    alt={category}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">{category}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
