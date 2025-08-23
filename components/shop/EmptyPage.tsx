import React from "react";
import { Button } from "../ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { Product } from "@/interfaces/product";

export type EmptyPageProps = {
  sortedProducts: Product[];
  setSelectedCategory: (category: string) => void;
  setPriceRange: (price: number[]) => void;
  setSelectedRating: (rate: number) => void;
  setSearchTerm: (term: string) => void;
};

function EmptyPage({
  sortedProducts,
  setSearchTerm,
  setSelectedCategory,
  setPriceRange,
  setSelectedRating,
}: EmptyPageProps) {
  console.log(sortedProducts);
  return (
    <div className="text-center py-16 rounded-lg shadow-sm">
      <ShoppingBagIcon size={48} className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">No products found</h3>
      <p className="mb-6">Try adjusting your search or filter criteria</p>
      <Button
        variant="outline"
        onClick={() => {
          setSearchTerm("");
          setSelectedCategory("");
          setPriceRange([0, 500]);
          setSelectedRating(0);
        }}
      >
        Clear all filters
      </Button>
    </div>
  );
}

export default EmptyPage;
