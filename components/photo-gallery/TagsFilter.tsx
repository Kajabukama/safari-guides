import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface TagsFilterProps {
  tags: string[];
  onTagClick: (tag: string) => void;
  onShowMore: () => void;
}

export const TagsFilter = ({ tags, onTagClick, onShowMore }: TagsFilterProps) => {
  return (
    <motion.div 
      className="flex flex-wrap items-center gap-2 mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span className="text-gray-700 font-medium">Popular Tags:</span>
      {tags.map((tag, index) => (
        <motion.button
          key={index}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition-colors whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTagClick(tag)}
        >
          #{tag}
        </motion.button>
      ))}
      <button 
        className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium transition-colors"
        onClick={onShowMore}
      >
        More Tags
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </button>
    </motion.div>
  );
};
