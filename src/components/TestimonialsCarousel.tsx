"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoPlay, interval]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Testimonial Card */}
      <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl border border-amber-400/30 shadow-2xl">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-amber-400/30 mb-4" />

              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-2xl ${
                      i < testimonials[currentIndex].rating
                        ? "text-amber-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-lg md:text-xl text-center italic mb-6 leading-relaxed">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                {testimonials[currentIndex].image ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 relative">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-black text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                )}
                <div className="text-left">
                  <p className="text-amber-400 font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  {testimonials[currentIndex].role && (
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-amber-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
