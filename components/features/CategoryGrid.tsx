"use client";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/types/index";
import useCategoriesQuery from "@/lib/queries/useCategoriesQuery";
import CategoryGridSkeleton from "../ui/skeleton/CategoryGridSkeleton";

type CategoryGridProps = {
  data: {
    events: Event[];
    total: number;
  };
};

export default function CategoryGrid({ data }: CategoryGridProps) {
  const {
    categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useCategoriesQuery();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Catégories
      </h2>
      {isLoadingCategories ? (
        <CategoryGridSkeleton />
      ) : (
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category: string, id: number) => (
              <div
                key={id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <Link href="/event">
                  <div className="w-full h-64 relative">
                    <Image
                      src={`/Images/categories/${category}.jpg`}
                      alt={category}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">
                      {category}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
