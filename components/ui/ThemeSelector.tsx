"use client";
import { ChevronDown, Moon, Palette, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeSelector() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState(
		typeof window !== "undefined"
			? localStorage.getItem("theme") || "light"
			: "light"
	);

	const toggleTheme = (theme: string) => {
		setCurrentTheme(theme);
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
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
						onClick={() => toggleTheme("light")}
						className={`w-full flex items-center gap-2 p-2 rounded ${
							currentTheme === "light" ? "bg-blue-50 dark:bg-blue-900/30" : ""
						}`}
					>
						<Sun size={16} />
						<span>Mode Light</span>
					</button>
					<button
						onClick={() => toggleTheme("dark")}
						className={`w-full flex items-center gap-2 p-2 rounded ${
							currentTheme === "dark" ? "bg-blue-50 dark:bg-blue-900/30" : ""
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
