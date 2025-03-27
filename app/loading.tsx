export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#111827]">
      <div className="flex space-x-2">
        {/* Point 1 (gris clair) */}
        <div className="w-4 h-4 bg-gray-300 rounded-full animate-bounce delay-0"></div>
        {/* Point 2 (gris moyen) */}
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce delay-100"></div>
        {/* Point 3 (gris foncé) */}
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
}