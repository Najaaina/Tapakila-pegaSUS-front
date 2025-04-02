import { ChangeEvent } from "react";

interface FormData {
  nom: string;
  email: string;
  motDePasse: string;
  confirmationMotDePasse: string;
}

interface FormFieldsSignupProps {
  formData: FormData;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormFieldsSignup({
  formData,
  handleChange,
}: FormFieldsSignupProps) {
  return (
    <>
      <div>
        <label
          htmlFor="nom"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          value={formData.nom}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="motDePasse"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mot de passe
        </label>
        <input
          id="motDePasse"
          name="motDePasse"
          type="password"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          value={formData.motDePasse}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="confirmationMotDePasse"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Confirmation du mot de passe
        </label>
        <input
          id="confirmationMotDePasse"
          name="confirmationMotDePasse"
          type="password"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          value={formData.confirmationMotDePasse}
          onChange={handleChange}
        />
      </div>
    </>
  );
}