"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";

interface DeleteAccountButtonProps {
  className?: string;
  onDeleteAccount?: () => void;
}

export default function DeleteAccountButton({
  className = "",
  onDeleteAccount = () => console.log("Suppression compte"),
}: DeleteAccountButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleClick = () => {
    if (isConfirming) {
      onDeleteAccount();
      setIsConfirming(false);
    } else {
      setIsConfirming(true);
    }
  };

  // Annuler la confirmation si l'utilisateur clique ailleurs
  const handleCancel = () => {
    setIsConfirming(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 p-2 rounded-lg w-full sm:w-auto transition-colors
          ${
            isConfirming
              ? "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              : "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 border border-transparent hover:border-red-200 dark:hover:border-red-800"
          }
          ${className}`}
      >
        <Trash2 size={16} className="flex-shrink-0" />
        <span className="whitespace-nowrap">
          {isConfirming ? "Confirmer la suppression" : "Supprimer le compte"}
        </span>
      </button>

      {isConfirming && (
        <button
          onClick={handleCancel}
          className="text-xs text-gray-500 dark:text-gray-400 hover:underline mt-1 block w-full text-center"
        >
          Annuler
        </button>
      )}
    </div>
  );
}
