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
  className?: string; // Ajout d'une prop className optionnelle
};

export default function ProfileInfo({
  user,
  className = "",
}: ProfileInfoProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 pt-2 ${className}`}>
      {/* Colonne de gauche - Profil */}
      <div className="w-full md:w-1/3 flex flex-col items-center space-y-6">
        <ProfilePicture name={user.name} />

        <LogoutButton
          className="
            w-full
            !p-3 !rounded-full
            bg-gray-100 dark:bg-gray-800
            hover:bg-gray-200 dark:hover:bg-gray-700
            transition-colors duration-200
          "
        />
      </div>

      {/* Colonne de droite - Informations */}
      <div className="w-full md:w-2/3 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Informations personnelles
          </h2>

          <button
            className="
              bg-blue-500 hover:bg-blue-600 text-white 
              dark:bg-blue-600 dark:hover:bg-blue-700
              py-2 px-4 rounded-lg 
              transition-colors duration-200
              w-full sm:w-auto text-center
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
