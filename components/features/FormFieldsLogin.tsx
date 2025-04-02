// app/auth/login/components/FormFieldsLogin.tsx
import { ChangeEvent } from "react";

interface FormData {
  email: string;
  motDePasse: string;
}

interface FormFieldsLoginProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormFieldsLogin({
  formData,
  handleChange,
}: FormFieldsLoginProps) {
  return (
    <div className="w-full py-8 px-6 space-y-8 bg-white dark:bg-gray-800 rounded-lg">
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="username"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="motDePasse"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mot de passe
          </label>
          <input
            id="motDePasse"
            name="motDePasse"
            type="password"
            required
            autoComplete="current-password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            value={formData.motDePasse}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}