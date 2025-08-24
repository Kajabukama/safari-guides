import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export const categories = [
  { value: "all", label: "All Photos" },
  { value: "wildlife", label: "Wildlife" },
  { value: "landscape", label: "Landscapes" },
  { value: "people", label: "People & Culture" },
  { value: "guides", label: "From Guides" },
  { value: "tourists", label: "From Travelers" },
];

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({ selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mb-8 overflow-x-auto pb-2 -mx-4 px-4"
    >
      <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="w-full">
        <TabsList className="w-full md:w-auto h-auto flex flex-wrap justify-start md:justify-start">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value} className="">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </motion.div>
  );
};
