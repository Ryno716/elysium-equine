"use client";

import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelectCategory("All")}
        className={`px-6 py-2 rounded-full font-semibold transition-colors ${
          selectedCategory === "All"
            ? "bg-amber-500 text-black"
            : "bg-gray-900 border border-amber-400/30 text-gray-300 hover:border-amber-400"
        }`}
      >
        All Posts
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === category
              ? "bg-amber-500 text-black"
              : "bg-gray-900 border border-amber-400/30 text-gray-300 hover:border-amber-400"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
