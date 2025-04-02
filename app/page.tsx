import ProfileInfo from "@/components/ui/ProfileInfo";
import { ProfileHeader } from "@/components/ui/ProfileHeader";

export default function ProfilePage() {
    const user = {
        name: "Jean Dupont",
        email: "jean.dupont@example.com",
        creation_date: "2023-05-15T10:30:00Z"
    };

    return (
        <div className="container mx-auto px-4 py-8 pt-20 max-w-4xl">
            <ProfileHeader title="Profile"/>
            <ProfileInfo user={user} />
        </div>
    );
}