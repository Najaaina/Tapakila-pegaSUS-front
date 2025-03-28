"use client";
import { Button } from "@/components/ui/Button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-4">
      {/* Bouton précédent */}
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </Button>

      {/* Boutons des pages */}
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index + 1}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      {/* Bouton suivant */}
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </Button>
    </div>
  );
}
