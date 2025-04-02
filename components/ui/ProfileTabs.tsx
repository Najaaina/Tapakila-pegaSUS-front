import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileTabs() {
  const pathname = usePathname();
  const isSettingsActive = pathname === "/profile/settings";

  return (
    <div className="w-full border-b border-gray-200">
      <div className="flex flex-nowrap">
        <Link
          href="/profile"
          className={`
            flex-1 md:flex-none text-center px-4 py-3 font-medium
            transition-colors duration-200
            ${
              !isSettingsActive
                ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Profil
        </Link>
        <Link
          href="/profile/settings"
          className={`
            flex-1 md:flex-none text-center px-4 py-3 font-medium
            transition-colors duration-200
            ${
              isSettingsActive
                ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50/50"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          Paramètres
        </Link>
      </div>
    </div>
  );
}
