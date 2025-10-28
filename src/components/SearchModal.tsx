"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import Link from "next/link";
import { events } from "@/data/events";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: "page" | "event";
  title: string;
  description: string;
  url: string;
  category?: string;
}

const pages: SearchResult[] = [
  {
    type: "page",
    title: "Home",
    description: "Welcome to Elysium Equine - Premier equestrian facility",
    url: "/",
  },
  {
    type: "page",
    title: "Facility",
    description: "State-of-the-art facilities and amenities for horses and riders",
    url: "/facility",
  },
  {
    type: "page",
    title: "Training Programs",
    description: "Professional training programs for all skill levels",
    url: "/training",
  },
  {
    type: "page",
    title: "About Us",
    description: "Learn about our history, mission, and team",
    url: "/about",
  },
  {
    type: "page",
    title: "Events",
    description: "Browse upcoming events, competitions, clinics, and annual schedules",
    url: "/events",
  },
  {
    type: "page",
    title: "Visit Us",
    description: "Plan your visit, get directions, contact us, and connect on social media",
    url: "/contact",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();

    // Search pages
    const pageResults = pages.filter(
      (page) =>
        page.title.toLowerCase().includes(searchQuery) ||
        page.description.toLowerCase().includes(searchQuery)
    );

    // Search events
    const eventResults: SearchResult[] = events
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery) ||
          event.description.toLowerCase().includes(searchQuery) ||
          event.tags.some((tag) => tag.toLowerCase().includes(searchQuery)) ||
          event.eventType.toLowerCase().includes(searchQuery) ||
          event.category.toLowerCase().includes(searchQuery)
      )
      .map((event) => ({
        type: "event" as const,
        title: event.title,
        description: event.description,
        url: `/events/${event.slug}`,
        category: event.eventType,
      }));

    setResults([...pageResults, ...eventResults]);
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    setQuery("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-amber-400/30">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-amber-400/30">
                <FiSearch className="w-6 h-6 text-amber-400" />
                <input
                  type="text"
                  placeholder="Search pages, events, programs..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 text-lg outline-none bg-transparent text-white placeholder-gray-400"
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <FiX className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim() === "" ? (
                  <div className="p-8 text-center text-gray-400">
                    <FiSearch className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>Start typing to search...</p>
                    <p className="text-sm mt-2">
                      Try searching for &quot;training&quot;, &quot;showcase&quot;, or
                      &quot;competition&quot;
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">
                    <p>No results found for &quot;{query}&quot;</p>
                    <p className="text-sm mt-2">Try a different search term</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-800">
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={result.url}
                        onClick={handleLinkClick}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="p-4 hover:bg-gray-800 cursor-pointer transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`px-2 py-1 rounded text-xs font-semibold ${
                                    result.type === "event"
                                      ? "bg-amber-500 text-black"
                                      : "bg-amber-500 text-black"
                                  }`}
                                >
                                  {result.type === "event" ? "Event" : "Page"}
                                </span>
                                {result.category && (
                                  <span className="text-xs text-gray-400">
                                    {result.category}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-semibold text-white mb-1">
                                {result.title}
                              </h3>
                              <p className="text-sm text-gray-300 line-clamp-2">
                                {result.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 bg-black border-t border-amber-400/30 text-xs text-gray-400 flex items-center justify-between">
                <div>
                  <kbd className="px-2 py-1 bg-gray-800 border border-amber-400/30 rounded text-gray-300">
                    Esc
                  </kbd>{" "}
                  to close
                </div>
                <div>
                  {results.length > 0 && (
                    <span>{results.length} result{results.length !== 1 ? "s" : ""}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
