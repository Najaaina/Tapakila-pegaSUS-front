// /components/ui/PageHeader.tsx

interface PageHeaderProps {
  count: number;
}

export default function PageHeader({ count }: PageHeaderProps) {
  return (
    <>
      {/* Header section */}
      <div className="mb-4 mt-20 flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-white">
          Tous les événements
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {count} événements disponibles
        </span>
      </div>
    </>
  );
}
