"use client";
import { LogOut, Trash2, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AccountActions() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
			>
				<div className="flex items-center gap-3">
          <span className="text-gray-700 dark:text-gray-300">
            Actions du compte
          </span>
				</div>
				<ChevronDown
					size={16}
					className={isOpen ? "transform rotate-180" : ""}
				/>
			</button>

			{isOpen && (
				<div className="ml-10 mt-1 space-y-2 p-2 bg-white dark:bg-gray-700 rounded-lg shadow">
					<button
						onClick={() => console.log("Déconnexion")}
						className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500"
					>
						<LogOut size={16} />
						<span>Se déconnecter</span>
					</button>
					<button
						onClick={() => console.log("Suppression compte")}
						className="w-full flex items-center gap-2 p-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
					>
						<Trash2 size={16} />
						<span>Supprimer le compte</span>
					</button>
				</div>
			)}
		</div>
	);
}
