import { ChangeEvent } from "react";

type DatePickerProps = {
  selectedDate: string;
  onChangeDate: (date: string) => void;
};

export default function DatePicker({
  selectedDate,
  onChangeDate,
}: DatePickerProps) {
  const formattedDate = selectedDate
    ? new Date(selectedDate).toISOString().split("T")[0]
    : "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeDate(e.target.value);
  };

  const handleReset = () => {
    onChangeDate("");
  };

  return (
    <div className="relative inline-block">
      <div className="relative">
        <input
          type="date"
          className={`
            w-48 px-3 py-2 border rounded-md
            ${!selectedDate ? "text-gray-400" : "text-gray-800"}
            pr-8
          `}
          value={formattedDate}
          onChange={handleChange}
          aria-label="Sélectionner une date"
        />
        
        {selectedDate && (
          <button
            onClick={handleReset}
            className="
              absolute right-2 top-1/2 transform -translate-y-1/2
              flex items-center justify-center
              w-5 h-5 rounded-full hover:bg-gray-200
            "
            aria-label="Réinitialiser la date"
          >
            <img 
              src="/reset.svg" 
              alt="Réinitialiser" 
              className="w-3 h-3"
            />
          </button>
        )}
      </div>
    </div>
  );
}