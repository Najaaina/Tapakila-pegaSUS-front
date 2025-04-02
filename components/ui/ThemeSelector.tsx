// components/ThemeSelector.tsx
"use client";

import { ChevronDown, Moon, Palette, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useThemeStore();

  const toggleTheme = (isDark: boolean) => {
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <Palette size={18} className="text-gray-500 dark:text-gray-400" />
          <span>Apparence</span>
        </div>
        <ChevronDown
          size={16}
          className={isOpen ? "transform rotate-180" : ""}
        />
      </button>

      {isOpen && (
        <div className="ml-10 mt-1 space-y-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow">
          <button
            onClick={() => toggleTheme(false)}
            className={`w-full flex items-center gap-2 p-2 rounded ${
              !darkMode ? "bg-blue-50 dark:bg-blue-900/30" : ""
            }`}
          >
            <Sun size={16} />
            <span>Mode Light</span>
          </button>
          <button
            onClick={() => toggleTheme(true)}
            className={`w-full flex items-center gap-2 p-2 rounded ${
              darkMode ? "bg-blue-50 dark:bg-blue-900/30" : ""
            }`}
          >
            <Moon size={16} />
            <span>Mode Dark</span>
          </button>
        </div>
      )}
    </div>
  );
}
