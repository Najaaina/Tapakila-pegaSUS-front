// /components/ui/PageHeader.tsx
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  count: number;
  backUrl: string;
}

export default function PageHeader({ title, count, backUrl }: PageHeaderProps) {
  return (
    <>
      {/* Back button */}
      <div className="mb-4">
        <Link
          href={backUrl}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour
        </Link>
      </div>

      {/* Header section */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-white">
          {title}
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {count} événements disponibles
        </span>
      </div>
    </>
  );
}