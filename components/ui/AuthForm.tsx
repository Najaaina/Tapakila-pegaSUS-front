"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import FormFieldsSignup from "@/components/features/FormFieldsSignup";
import FormFieldsLogin from "../features/FormFieldsLogin";
import { useRouter } from "next/navigation";
import { login, register, storeToken } from "@/lib/api/auth";

interface AuthFormProps {
  bigTitle: string;
  buttonMessage: string;
  formType: "login" | "signup";
}

export default function AuthForm({
  bigTitle,
  buttonMessage,
  formType,
}: AuthFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    motDePasse: "",
    confirmationMotDePasse: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Modifications dans AuthForm
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      if (formType === "login") {
        const token = await login(formData.email, formData.motDePasse);
        storeToken(token);
        router.push("/dashboard");
      } else {
        if (formData.motDePasse !== formData.confirmationMotDePasse) {
          throw new Error("Les mots de passe ne correspondent pas");
        }
        if (formData.motDePasse.length < 4) {
          throw new Error("Le mot de passe doit faire au moins 6 caractères");
        }

        await register({
          name: formData.nom,
          email: formData.email,
          password: formData.motDePasse,
        });
        const token = await login(formData.email, formData.motDePasse);
        storeToken(token);
        router.push('/booking');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white dark:bg-gray-800">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          {bigTitle}
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {formType === "login" ? (
            <FormFieldsLogin formData={formData} handleChange={handleChange} />
          ) : (
            <FormFieldsSignup formData={formData} handleChange={handleChange} />
          )}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors"
            >
              {buttonMessage}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
