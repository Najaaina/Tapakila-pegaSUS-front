export default function ReservationHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Mes réservations</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Réserver d'autres events
      </button>
    </div>
  );
}
