import React from "react";
import { TicketIcon } from "@heroicons/react/24/outline";
// import { Session } from "next-auth";

// interface ReservationButtonProps {
//   session: Session | null;
// }

// export const ReservationButton: React.FC<ReservationButtonProps> = ({ session }) => {
//   return (
//     <button
//       disabled={!session}
//       className={`w-full text-white py-3 rounded-xl font-semibold mt-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group
//         ${session
//           ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700'
//           : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
//         }`}
//     >
//       <TicketIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
//       {session ? 'Réserver maintenant' : 'Connexion requise'}
//     </button>
//   );
// };

export const ReservationButton = () => {
  return (
    <div className="relative group">
      {" "}
      {/* Conteneur parent pour le tooltip */}
      <button
        disabled={true}
        className="w-full text-white py-3 rounded-xl font-semibold mt-4 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
      >
        <TicketIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
        Réserver
      </button>
      <div
        className="
                absolute -bottom-10 left-1/2 transform -translate-x-1/2
                bg-gray-800 text-white text-xs py-1 px-2 rounded
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                whitespace-nowrap pointer-events-none
            "
      >
        Connectez-vous pour réserver
        <div className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 bg-gray-800 rotate-45"></div>{" "}
      </div>
    </div>
  );
};
