import Link from "next/link";

interface WelcomeSectionProps {
  welcomeMessage: string;
  reminderMessage: string;
  buttonMessage: string;
  redirection: string;
}

export default function WelcomeSection({
  welcomeMessage,
  reminderMessage,
  buttonMessage,
  redirection,
}: WelcomeSectionProps) {
  return (
    <div className="w-full md:w-1/2 bg-gray-800 dark:bg-white p-8 flex flex-col justify-center text-white dark:text-gray-800">
      <h1 className="text-4xl font-bold mb-2">{welcomeMessage}</h1>
      <div className="w-16 h-1 bg-white dark:bg-gray-800 mb-6"></div>

      <p className="text-lg mb-4">
        Connectez-vous pour une navigation sans restriction
      </p>

      <p className="mb-6">{reminderMessage}</p>

      <Link href={`/auth/${redirection}`}>
        <div className="inline-block px-6 py-2 border-2 border-white dark:border-gray-800 text-white dark:text-gray-800 font-medium rounded hover:bg-white hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-white transition-colors">
          {buttonMessage}
        </div>
      </Link>
    </div>
  );
}