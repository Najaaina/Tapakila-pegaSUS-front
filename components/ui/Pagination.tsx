import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      <div>
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Previous
          </Link>
        )}
        {currentPage < totalPages && (
          <Link href={`?page=${currentPage + 1}`} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination; 