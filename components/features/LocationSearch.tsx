import { useEffect, useState } from "react";
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

  const suggestions = query
    ? uniqueLocations.filter((location) =>
        location.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const changeLocation = (location : string) => {
    setQuery(location);
    setSelectedLocation(location);
  }

  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    if (query === "") {
      setSelectedLocation(""); 
    }
  }, [query, setSelectedLocation]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un lieu"
        className="w-full p-2 pr-8 border rounded"
      />
      {query.length > 0 && <ClearButton onClick={handleClear} />}
      {query && (
        <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
          {suggestions && suggestions.length > 0 ? (
            suggestions?.map((location: string, index: number) => (
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
