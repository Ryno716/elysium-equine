"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./SearchModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Facility", path: "/facility" },
  { name: "Training", path: "/training" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-400/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-amber-400 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                <FaHome className="text-black text-xl" />
              </div>
              <span className="text-amber-400 font-bold text-xl hidden sm:block">
                Elysium Equine
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    pathname === link.path
                      ? "bg-amber-400 text-black"
                      : "text-amber-400 hover:bg-amber-400/20"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-amber-400 hover:bg-amber-400/20 transition-all duration-300"
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
                <span className="text-xs opacity-75">Ctrl+K</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-amber-400 p-2 hover:bg-amber-400/20 rounded-lg transition-colors"
                aria-label="Search"
              >
                <FiSearch size={24} />
              </button>
              <button
                onClick={toggleMenu}
                className="text-amber-400 p-2 hover:bg-amber-400/20 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/95 border-t border-amber-400/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-amber-400 text-black"
                    : "text-amber-400 hover:bg-amber-400/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16" />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
