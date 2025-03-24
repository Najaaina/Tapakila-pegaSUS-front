"use client";

import { useEffect, useState } from "react";
import DatePicker from "../ui/DatePicker";
import LocationSearch from "./LocationSearch";
import CategoryDropdown from "./CategoryDropdown";

interface FilterBarProps {
  uniqueCategories: string[];
  uniqueLocations: string[];
  onFilterChange: React.Dispatch<
    React.SetStateAction<{
      selectedDate: string;
      selectedLocation: string;
      selectedCategory: string;
    }>
  >;
}

export default function FilterBar({
  uniqueCategories,
  uniqueLocations,
  onFilterChange,
}: FilterBarProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    onFilterChange((prev) => ({
      ...prev,
      selectedDate,
      selectedLocation,
      selectedCategory,
    }));
  }, [selectedDate, selectedLocation, selectedCategory, onFilterChange]);

  return (
    <div className="mb-6 flex flex-col justify-center items-center gap-3">
      <h2 className="text-lg font-semibold dark:text-white">
        Filtres et Recherche
      </h2>
      <div className="flex flex-col md:flex-row md:gap-4">
        <DatePicker
          selectedDate={selectedDate}
          onChangeDate={setSelectedDate}
        ></DatePicker>

        <LocationSearch
          uniqueLocations={uniqueLocations}
          setSelectedLocation={setSelectedLocation}
        ></LocationSearch>

        <CategoryDropdown
          uniquecategories={uniqueCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></CategoryDropdown>

        {/* <input
          type="text"
          placeholder="Rechercher..."
          className="border rounded-md p-2 mt-4 md:mt-0"
          value={selectedFilters.search}
          onChange={(e) => onChange.search(e.target.value)}
        /> */}
      </div>
    </div>
  );
}
