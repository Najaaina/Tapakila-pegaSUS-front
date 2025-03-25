"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      placeholder="Rechercher par titre..."
      className="w-full p-2 border rounded"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
