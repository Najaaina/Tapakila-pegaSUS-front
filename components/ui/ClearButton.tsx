import React from "react";

interface ClearButtonProps {
  onClick: () => void;
  className?: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors ${className}`}
      aria-label="Clear input"
    >
      <img
        src="/xmark.svg"
        alt="Clear"
        className="w-3 h-3"
      />
    </button>
  );
};

export default ClearButton;