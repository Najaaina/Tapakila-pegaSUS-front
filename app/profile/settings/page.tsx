import ThemeSelector from "@/components/ui/ThemeSelector";
import PrivacyInfo from "@/components/ui/PrivacyInfo";
import AccountActions from "@/components/features/AccountActions";
import { ProfileHeader } from "@/components/ui/ProfileHeader";
import { User } from "@/types";

export default function AccountSettingsPage({ user }: { user: User }) {
  return (
    <div className="container mx-auto px-4 py-8 pt-20 max-w-4xl">
      <ProfileHeader title="Paramètres du compte" />

      <div className="space-y-4 pt-4">
        <h2>Préférences</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <ThemeSelector />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <PrivacyInfo />
        </div>

        <h2>Actions du compte</h2>
        <AccountActions />
      </div>
    </div>
  );
}
