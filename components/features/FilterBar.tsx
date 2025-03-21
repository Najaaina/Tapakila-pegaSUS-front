// /components/features/FilterBar.tsx
"use client";

interface FilterBarProps {
  filters: {
    dates: string[];
    locations: string[];
    categories: string[];
  };
  selectedFilters: {
    date: string;
    location: string;
    category: string;
    search: string;
  };
  onChange: {
    date: (value: string) => void;
    location: (value: string) => void;
    category: (value: string) => void;
    search: (value: string) => void;
  };
}

export default function FilterBar({ 
  filters, 
  selectedFilters, 
  onChange 
}: FilterBarProps) {
  return (
    <div className="mb-6 flex flex-col justify-center items-center gap-3">
      <h2 className="text-lg font-semibold dark:text-white">
        Filtres et Recherche
      </h2>
      <div className="flex flex-col md:flex-row md:gap-4">
        <select
          className="border rounded-md p-2"
          value={selectedFilters.date}
          onChange={(e) => onChange.date(e.target.value)}
        >
          <option value="">Par date</option>
          {filters.dates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <select
          className="border rounded-md p-2"
          value={selectedFilters.location}
          onChange={(e) => onChange.location(e.target.value)}
        >
          <option value="">Par lieu</option>
          {filters.locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        <select
          className="border rounded-md p-2"
          value={selectedFilters.category}
          onChange={(e) => onChange.category(e.target.value)}
        >
          <option value="">Par catégorie</option>
          {filters.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Rechercher..."
          className="border rounded-md p-2 mt-4 md:mt-0"
          value={selectedFilters.search}
          onChange={(e) => onChange.search(e.target.value)}
        />
      </div>
    </div>
  );
}