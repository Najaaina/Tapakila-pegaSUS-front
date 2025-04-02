import { LogOut } from "lucide-react";

type LogoutButtonProps = {
	className?: string;
};

export default function LogoutButton({ className = "" }: LogoutButtonProps) {
	return (
		<button
			className={`
        p-2 rounded-full
        text-gray-500 dark:text-gray-400
        bg-gray-100 dark:bg-gray-800
        transition-colors duration-200
        ${className}
      `}
			aria-label="Se déconnecter"
			title="Se déconnecter"
		>
			<LogOut size={18} className="transform scale-x-[-1]"/>
		</button>
	);
}
