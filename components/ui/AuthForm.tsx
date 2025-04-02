"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import FormFieldsSignup from "@/components/features/FormFieldsSignup";
import FormFieldsLogin from "../features/FormFieldsLogin";

interface AuthFormProps {
  bigTitle: string;
  buttonMessage: string;
  formType: 'login' | 'signup';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation et traitement du formulaire
    // console.log("Données du formulaire:", formData);
  };

  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white dark:bg-gray-800">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          {bigTitle}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
        {formType === 'login' 
      ? <FormFieldsLogin formData={formData} handleChange={handleChange}/> 
      : <FormFieldsSignup formData={formData} handleChange={handleChange} />
    }
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