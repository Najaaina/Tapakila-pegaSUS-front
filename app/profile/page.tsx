"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { fetchUserProfile } from "@/lib/api/fecthUserProfile";
import { ProfileHeader } from "@/components/ui/ProfileHeader";
import ProfileInfo from "@/components/ui/ProfileInfo";
import { ProfileSkeleton } from "@/components/ui/ProfileSkeleton";
import AuthGuard from "@/components/guards/AuthGuard";

export default function ProfilePage() {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR("/api/account/profile", fetchUserProfile, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8 pt-20 max-w-4xl">
        <ProfileHeader title="Profile" />
        {user ? <ProfileInfo user={user} /> : <p>Profil non disponible</p>}
      </div>
    </AuthGuard>
  );
}
