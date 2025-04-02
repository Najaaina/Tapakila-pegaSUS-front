import AuthForm from "@/components/ui/AuthForm";
import WelcomeSection from "@/components/ui/WelcomeSection";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        <WelcomeSection
          welcomeMessage=" Nous sommes ravis de vous revoir"
          reminderMessage="Vous n'avez pas encore un compte?"
          buttonMessage="S'inscrire"
          redirection="signup"
        />

        <AuthForm bigTitle="Se connecter" buttonMessage="Se connecter" formType="login"/>
      </div>
    </div>
  );
}