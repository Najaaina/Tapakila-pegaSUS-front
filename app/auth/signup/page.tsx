import AuthForm from "@/components/ui/AuthForm";
import WelcomeSection from "@/components/ui/WelcomeSection";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        <WelcomeSection
          welcomeMessage="Bienvenue"
          reminderMessage="Vous avez déjà un compte?"
          buttonMessage="Se connecter"
          redirection="login"
        />

        <AuthForm bigTitle="S'inscrire" buttonMessage="S'inscrire" formType="signup"/>
      </div>
    </div>
  );
}