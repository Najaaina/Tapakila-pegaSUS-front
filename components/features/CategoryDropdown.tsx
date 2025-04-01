import React from "react";

type CategoryDropdownProps = {
    uniquecategories: string[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

export default function CategoryDropdown({uniquecategories, selectedCategory, setSelectedCategory} : CategoryDropdownProps) {
  console.log(uniquecategories)
  return (
    <select
      className="border rounded-md p-2"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">Tous les catégories</option>
      {uniquecategories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
