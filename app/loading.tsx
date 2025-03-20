export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#111827]">
      <div className="flex space-x-2">
        {/* Bouton 1 */}
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-0"></div>
        {/* Bouton 2 */}
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-100"></div>
        {/* Bouton 3 */}
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
}