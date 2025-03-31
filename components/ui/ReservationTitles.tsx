export default function ReservationTitles() {
  return (
    <div className="hidden md:grid grid-cols-4 gap-4 py-3 px-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="font-medium text-gray-900 dark:text-white">
        Nom de l'événement
      </div>
      <div className="font-medium text-gray-900 dark:text-white">
        Date de l'événement
      </div>
      <div className="font-medium text-gray-900 dark:text-white">
        Date de réservation
      </div>
      <div className="font-medium text-gray-900 dark:text-white">
        Type de ticket
      </div>
    </div>
  );
}
