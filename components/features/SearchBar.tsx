"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import ClearButton from "../ui/ClearButton";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        className="w-full p-2 pr-8 border rounded"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && <ClearButton onClick={handleClear} />}
    </div>
  );
};