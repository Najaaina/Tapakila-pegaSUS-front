"use client";
import { Trash2 } from "lucide-react";
import { useState } from "react";

type DeleteAccountButtonProps = {
	className?: string;
	onConfirm?: () => void;
};

export default function DeleteAccountButton({
	                                            className = "",
	                                            onConfirm,
                                            }: DeleteAccountButtonProps) {
	const [isConfirming, setIsConfirming] = useState(false);

	const handleClick = () => {
		if (!isConfirming) {
			setIsConfirming(true);
			return;
		}
		onConfirm?.();
		setIsConfirming(false);
	};

	return (
		<div className={`w-full max-w-md mx-auto ${className}`}>
			<button
				onClick={handleClick}
				className={`
          w-full flex items-center justify-center gap-2 
          py-3 px-4 rounded-lg transition-all duration-300
          ${
					isConfirming
						? "bg-red-700 hover:bg-red-800"
						: "bg-red-500 hover:bg-red-600"
				}
          text-white font-medium
          shadow-md hover:shadow-lg
          transform hover:scale-[1.02] active:scale-95
          focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50
        `}
			>
				<Trash2 size={20} className="flex-shrink-0" />
				<span className="whitespace-nowrap">
          {isConfirming ? "Confirmer la suppression ?" : "Supprimer le compte"}
        </span>
			</button>

			{isConfirming && (
				<button
					onClick={() => setIsConfirming(false)}
					className="
            w-full mt-2 text-sm text-gray-500 hover:text-gray-700
            transition-colors duration-200
          "
				>
					Annuler
				</button>
			)}
		</div>
	);
}
