"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Groundwork & Lunge",
    image: "/images/groundwork.jpg",
    price: "$50/session",
    description: "Foundation training for horse & rider. Teaches respect and communication.",
    contact: "Contact: 555-1234 or info@elysium.com"
  },
  {
    name: "Jumping Lessons",
    image: "/images/jumping.jpg",
    price: "$65/session",
    description: "From cross-rails to advanced show jumping, for all levels.",
    contact: "Contact: 555-1234 or info@elysium.com"
  },
  {
    name: "Dressage Training",
    image: "/images/dressage.jpg",
    price: "$60/session",
    description: "Develop balance, rhythm, and finesse with certified trainers.",
    contact: "Contact: 555-1234 or info@elysium.com"
  },
  {
    name: "Desensitization",
    image: "/images/desensitization.jpg",
    price: "$55/session",
    description: "Build your horse’s confidence with calm, controlled exposure.",
    contact: "Contact: 555-1234 or info@elysium.com"
  }
];

export default function TrainingPage() {
  const [modal, setModal] = useState<null | typeof programs[0]>(null);

  return (
    <main className="relative bg-[#181717] min-h-screen py-12 flex flex-col overflow-x-hidden">
      {/* Faded, blurred farm background */}
      <Image
        src="/images/bg-farm.jpg" // Place your background image here (ideally .webp or .avif for speed)
        alt="Farm background"
        fill
        quality={70}
        priority={false}
        className="z-0 object-full object-center opacity-40 blur-sm pointer-events-none select-none"
        style={{ position: "absolute" }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 text-center drop-shadow-lg">Training Programs</h2>
        <p className="text-white text-lg mb-8 text-center drop-shadow">
          At Elysium Equine, we offer world-class training programs tailored to riders of all levels.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {programs.map((prog, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden border-2 border-amber-400 shadow-lg cursor-pointer"
            onClick={() => setModal(prog)}
          >
            <Image
              src={prog.image}
              alt={prog.name}
              width={600}
              height={400}
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-2xl font-bold text-amber-300 drop-shadow">{prog.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info/Feature Section */}
      <section className="relative z-10 bg-[#131313] py-12 px-4 flex flex-col items-center text-center mt-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Why Choose Our Training?</h3>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          We combine expert coaching, personalized lesson plans, and a supportive environment to help riders and horses reach their full potential.
        </p>
        <ul className="text-white space-y-4 mb-8 font-semibold text-left max-w-lg mx-auto">
          <li>🌟 Certified and passionate instructors</li>
          <li>🐎 Focus on rider & horse partnership</li>
          <li>💡 Clinics, private and group sessions</li>
          <li>🏅 Safe, modern facilities</li>
        </ul>
        <Link
          href="/"
          className="px-6 py-2 bg-transparent border-2 border-amber-400 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition"
        >
          Back to Home
        </Link>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center relative">
            <button
              className="absolute top-2 right-3 text-xl text-amber-400 hover:text-amber-600"
              onClick={() => setModal(null)}
              aria-label="Close modal"
            >✕</button>
            <h3 className="text-3xl font-extrabold text-amber-400 mb-2">{modal.name}</h3>
            <p className="text-gray-700 mb-4">{modal.description}</p>
            <div className="mb-4 text-lg font-semibold text-stone-700">{modal.price}</div>
            <div className="mb-4 text-stone-600">{modal.contact}</div>
            <button
              className="px-6 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white font-semibold shadow transition"
              onClick={() => setModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
