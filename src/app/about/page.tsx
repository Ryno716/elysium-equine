"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Carousel images
const carouselImages = [
  { src: "/images/about1.jpg", alt: "Barn interior" },
  { src: "/images/about2.jpg", alt: "Horses grazing" },
  { src: "/images/about3.jpg", alt: "Sunrise over Elysium" },
];

// Testimonials
const testimonials = [
  { name: "Sophia M.", text: "My horse has never been happier. The care and training here are unmatched." },
  { name: "James P.", text: "The best equestrian facility I&apos;ve ever been to. Highly recommend!" },
];

// Team/horse members (use your own images/names if you wish)
const team = [
  { name: "Bella", role: "Lead Mare", img: "/images/horse1.jpg", emoji: "🐴" },
  { name: "Sarah", role: "Barn Manager", img: "/images/sarah.jpg", emoji: "👩‍🌾" },
  { name: "Max", role: "Jumping Coach", img: "/images/horse2.jpg", emoji: "🐎" },
  { name: "Alex", role: "Trainer", img: "/images/alex.jpg", emoji: "🧑‍🏫" }
];

export default function AboutPage() {
  // Carousel state
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Go to slide (dot navigation)
  const goToIdx = (i: number) => setCarouselIdx(i);

  return (
    <main className="relative min-h-screen flex flex-col bg-[#181717] overflow-x-hidden">
      {/* Hero Carousel */}
      <section className="relative w-full h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={carouselImages[carouselIdx].src}
          alt={carouselImages[carouselIdx].alt}
          fill
          priority
          quality={80}
          className="object-cover brightness-75 transition-all duration-700"
        />
        {/* Overlay Title/Subtitle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow-lg mb-4">
            About Elysium Equine
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl drop-shadow">
            Where every horse, rider, and guest is part of our family.<br />
            Discover the story and values that set us apart.
          </p>
        </div>
        {/* Carousel Nav Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIdx(i)}
              className={`w-3 h-3 rounded-full ${i === carouselIdx ? "bg-white" : "bg-amber-300 opacity-50"} border-2 border-white`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Black section: Our Story + Testimonials */}
      <section className="bg-[#181717] w-full flex flex-col items-center pt-16 pb-12 px-4">
        {/* Our Story */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-l-4 border-amber-400 min-w-[280px] max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-3">Our Story</h2>
          <p className="text-stone-800 mb-2">
            Elysium Equine was founded on a passion for horses and the dream of building a place where animals and people thrive together. From humble beginnings to our state-of-the-art facility, every day is guided by care, community, and connection to nature.
          </p>
          <p className="text-stone-700">
            We invite you to become a part of our story, whether you’re a seasoned competitor, a first-time rider, or just love horses.
          </p>
        </div>
        {/* Testimonials */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-amber-50/95 backdrop-blur-md rounded-xl shadow-xl p-6 text-center border-l-4 border-amber-400 flex-1 min-w-[240px]">
              <p className="italic text-stone-800 mb-2">&ldquo;{t.text}&rdquo;</p>
              <span className="block text-amber-800 font-bold">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team or Horses */}
      <section className="bg-[#181717] py-16 flex flex-col items-center mt-10">
        <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-8">Meet the Team</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/80 rounded-full w-28 h-28 flex items-center justify-center shadow-lg mb-2 overflow-hidden">
                {/* Use an emoji fallback if no image is available */}
                {member.img ? (
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <span className="text-4xl">{member.emoji}</span>
                )}
              </div>
              <span className="font-bold text-amber-700">{member.name}</span>
              <span className="text-stone-400 text-sm">{member.role}</span>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="mt-12 px-6 py-2 bg-transparent border-2 border-amber-400 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
