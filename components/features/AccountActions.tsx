"use client";

import LogoutButton from "./LogoutButton";
import DeleteAccountButton from "./DeleteAccountButton";

export default function AccountActionsDirect() {
  return (
    <>
      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
          <LogoutButton className="w-full justify-start" />
        </div>

        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
          <DeleteAccountButton className="w-full justify-start" />
        </div>
      </div>
    </>
  );
}
