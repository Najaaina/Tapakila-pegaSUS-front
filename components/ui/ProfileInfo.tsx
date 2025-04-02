import Image from "next/image";
import { LogOut } from "lucide-react";
import UserInfoCard from "@/components/ui/UserInfoCard";
import LogoutButton from "@/components/features/LogoutButton";
import ProfilePicture from "./ProfilePicture";

type User = {
	name: string;
	email: string;
	creation_date: string;
};

type ProfileInfoProps = {
	user: User;
};

export default function ProfileInfo({ user }: ProfileInfoProps) {
	return (
		<div className="flex flex-col md:flex-row gap-8 pt-2">
			{/* Colonne de gauche */}
			<div className="w-full md:w-1/3 flex flex-col items-center">
				<ProfilePicture name={user.name} />

				<div className="mt-6 w-full">
					<LogoutButton
						className="
            !p-3 !rounded-full
            bg-gray-100 dark:bg-gray-800
            hover:bg-gray-200 dark:hover:bg-gray-700
          "
					/>
				</div>
			</div>

			{/* Colonne de droite */}
			<div className="w-full md:w-2/3">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-xl font-semibold text-gray-800 dark:text-white">
						Informations personnelles
					</h2>
					<button
						className="
            bg-blue-500 hover:bg-blue-600 text-white
            dark:bg-blue-600 dark:hover:bg-blue-700
            py-2 px-4 rounded-lg transition
          "
					>
						Mes réservations
					</button>
				</div>

				<UserInfoCard user={user} />
			</div>
		</div>
	);
}
