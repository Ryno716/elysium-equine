"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageGalleryProps {
  images: Array<{ src: string; alt: string }>;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] text-white hover:text-amber-400 transition-colors p-2 bg-black/50 rounded-full"
          aria-label="Close gallery"
        >
          <FaTimes size={24} />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-[110] text-white hover:text-amber-400 transition-colors p-3 bg-black/50 rounded-full"
            aria-label="Previous image"
          >
            <FaChevronLeft size={24} />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-[110] text-white hover:text-amber-400 transition-colors p-3 bg-black/50 rounded-full"
            aria-label="Next image"
          >
            <FaChevronRight size={24} />
          </button>
        )}

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
            quality={90}
          />
        </motion.div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Thumbnail Navigation */}
        {images.length > 1 && images.length <= 10 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-amber-400 scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
