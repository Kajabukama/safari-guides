import { SearchIcon, FilterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onSearch: () => void;
  onFilterClick: () => void;
}

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  onSearch,
  onFilterClick,
}: SearchBarProps) => {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search photos by location, wildlife, or tags..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Button onClick={onSearch}>Search</Button>
          <Button variant="outline" className="flex items-center" onClick={onFilterClick}>
            <FilterIcon className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
