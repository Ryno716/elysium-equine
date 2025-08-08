"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/facility1.jpg", alt: "Indoor Arena" },
  { src: "/images/facility2.jpg", alt: "Outdoor Arena" },
  { src: "/images/facility3.jpg", alt: "Barn & Stables" },
];

export default function FacilityPage() {
  const [idx, setIdx] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer); // Clean up on unmount
  }, []); // Removed images.length dependency as it's static

  // Manual dot navigation (resets timer)
  const goToIdx = (i: number) => setIdx(i);

  return (
    <main className="bg-black min-h-screen flex flex-col">
      {/* Carousel/Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[62vh]">
        <Image
          src={images[idx].src}
          alt={images[idx].alt}
          fill
          priority
          className="object-cover brightness-80 transition-all duration-700"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow-lg text-center">Top-Tier Training</h1>
          <p className="mt-2 text-lg md:text-2xl text-white drop-shadow text-center">
            Train in professional-grade arenas with experienced coaches.
          </p>
        </div>
        {/* Carousel Nav Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIdx(i)}
              className={`w-3 h-3 rounded-full ${i === idx ? "bg-white" : "bg-amber-300 opacity-50"} border-2 border-white`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Info/Feature Section */}
      <section className="bg-[#181717] py-16 px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">Why Choose Our Facility?</h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Elysium Equine offers state-of-the-art boarding, top-tier riding arenas, and expansive pastures to ensure the best care for your horses.
        </p>
        <ul className="text-white space-y-4 mb-8 font-semibold text-left max-w-lg mx-auto">
          <li>🐴 Spacious & ventilated stables for comfort</li>
          <li>🌿 Premium riding fields and scenic trails</li>
          <li>🏅 Professional-grade indoor & outdoor arenas</li>
        </ul>
        <Link
          href="/"
          className="mt-4 px-6 py-2 bg-transparent border-2 border-amber-400 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
