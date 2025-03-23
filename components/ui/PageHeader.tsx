// /components/ui/PageHeader.tsx
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  count: number;
}

export default function PageHeader({ title, count}: PageHeaderProps) {
  return (
    <>
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