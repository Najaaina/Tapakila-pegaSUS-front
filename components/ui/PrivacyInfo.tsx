"use client";
import { Lock, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PrivacyInfo() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg"
			>
				<div className="flex items-center gap-3">
					<Lock size={18} className="text-gray-500 dark:text-gray-400" />
					<span>Confidentialité</span>
				</div>
				<ChevronDown
					size={16}
					className={isOpen ? "transform rotate-180" : ""}
				/>
			</button>

			{isOpen && (
				<div className="ml-10 mt-1 p-3 bg-white dark:bg-gray-700 rounded-lg shadow text-sm text-gray-600 dark:text-gray-300">
					<p>
						Nous collectons et utilisons vos données pour améliorer votre
						expérience. Vos informations sont sécurisées et partagées uniquement
						avec des fournisseurs de services tiers. Contactez-nous à
						pegasustapakila@hei.group pour plus d'informations.
					</p>
				</div>
			)}
		</div>
	);
}
