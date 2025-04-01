export function FilterBarSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 p-4 border rounded-lg animate-pulse">
      <div className="h-12 w-full md:w-48 bg-gray-200 rounded"></div>
      <div className="h-12 w-full md:w-48 bg-gray-200 rounded"></div>
      <div className="h-12 w-full md:w-48 bg-gray-200 rounded"></div>
    </div>
  );
}
