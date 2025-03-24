import { useState, ChangeEvent } from "react";

type DatePickerProps = {
  selectedDate: string;
  onChangeDate: (date: string) => void;
};

export default function DatePicker({
  selectedDate,
  onChangeDate,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formattedDate = selectedDate
    ? new Date(selectedDate).toISOString().split("T")[0]
    : "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeDate(e.target.value);
  };

  const handleReset = () => {
    onChangeDate(""); 
    setIsOpen(false); 
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {selectedDate
          ? `Date sélectionnée: ${formattedDate}`
          : "Filtrer par date"}
      </button>

      {isOpen && (
        <div className="flex items-center gap-2">
          <input
            type="date"
            className="border rounded-md p-2"
            value={formattedDate}
            onChange={handleChange}
            aria-label="Sélectionner une date"
          />
          <button
            onClick={handleReset}
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
}
