"use client";

import { LogOut } from "lucide-react";

interface LogoutButtonProps {
  className?: string;
  onLogout?: () => void;
}

export default function LogoutButton({
  className = "",
  onLogout = () => console.log("Déconnexion"),
}: LogoutButtonProps) {
  return (
    <button
      onClick={onLogout}
      className={`flex items-center gap-2 p-2 rounded-lg w-full sm:w-auto transition-colors
        text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600
        border border-transparent hover:border-red-200 dark:hover:border-red-800
        ${className}`}
    >
      <LogOut size={16} className="flex-shrink-0" />
      <span className="whitespace-nowrap">Se déconnecter</span>
    </button>
  );
}
