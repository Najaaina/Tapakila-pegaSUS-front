import { useEffect, useState, useRef } from "react";
import ClearButton from "../ui/ClearButton";

type LocationSearchProps = {
  uniqueLocations: string[];
  setSelectedLocation: (location: string) => void;
};

export default function LocationSearch({
  uniqueLocations,
  setSelectedLocation,
}: LocationSearchProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const suggestions = query
    ? uniqueLocations.filter((location) =>
        location.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const changeLocation = (location: string) => {
    setQuery(location);
    setSelectedLocation(location);
    setShowSuggestions(false); // Ferme le dropdown après sélection
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(false); // Ferme le dropdown lors du reset
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowSuggestions(true); // Ouvre le dropdown lors de la saisie
  };

  // Ferme le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query === "") {
      setSelectedLocation("");
    }
  }, [query, setSelectedLocation]);

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)} // Ouvre le dropdown au focus
        placeholder="Rechercher un lieu"
        className="w-full p-2 pr-8 border rounded"
      />
      {query.length > 0 && <ClearButton onClick={handleClear} />}
      {showSuggestions && query && (
        <div className="absolute z-10 w-full bg-white border rounded shadow-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((location: string, index: number) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => changeLocation(location)}
              >
                {location}
              </div>
            ))
          ) : (
            <div className="p-2">Aucun résultat trouvé</div>
          )}
        </div>
      )}
    </div>
  );
}
