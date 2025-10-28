"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import TestimonialsCarousel, { Testimonial } from "../../components/TestimonialsCarousel";
import WriteReviewModal from "../../components/WriteReviewModal";

// Carousel images
const carouselImages = [
  { src: "/images/about1.jpg", alt: "Barn interior" },
  { src: "/images/about2.jpg", alt: "Horses grazing" },
  { src: "/images/about3.jpg", alt: "Sunrise over Elysium" },
];

// Enhanced Testimonials with ratings
const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Horse Owner",
    rating: 5,
    text: "My horse has never been happier. The care and training here are unmatched. The staff truly understands the bond between horse and rider.",
    date: "October 2025",
  },
  {
    id: 2,
    name: "James Peterson",
    role: "Riding Student",
    rating: 5,
    text: "The best equestrian facility I've ever been to. Highly recommend! The instructors are patient, knowledgeable, and genuinely care about your progress.",
    date: "September 2025",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Boarding Client",
    rating: 5,
    text: "Outstanding facilities and professional staff. My horse receives excellent care and I have complete peace of mind. The boarding options are flexible and affordable.",
    date: "August 2025",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Competition Rider",
    rating: 5,
    text: "Training here has taken my riding to the next level. The coaching is world-class and the arena facilities are perfect for competition preparation.",
    date: "July 2025",
  },
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
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
    <PageTransition>
      <main className="relative min-h-screen flex flex-col bg-[#181717] overflow-x-hidden">
        <Navigation />
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
        
        {/* Testimonials Carousel */}
        <ScrollReveal>
          <div className="w-full max-w-5xl mt-16 mb-12">
            <h2 className="text-4xl font-bold text-amber-400 text-center mb-3">What Our Clients Say</h2>
            <p className="text-gray-300 text-center mb-8">Hear from riders who have experienced Elysium Equine</p>
            <TestimonialsCarousel testimonials={testimonialsData} />
            
            {/* Write Review Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-lg transition-all hover:scale-105"
              >
                Write a Review
              </button>
            </div>
          </div>
        </ScrollReveal>
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

        {/* Statistics Section */}
        <ScrollReveal>
          <section className="bg-[#131313] py-12 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="text-white">
                <AnimatedCounter value={25} suffix="+" className="text-5xl font-bold text-amber-400 block mb-2" />
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="text-white">
                <AnimatedCounter value={150} suffix="+" className="text-5xl font-bold text-amber-400 block mb-2" />
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="text-white">
                <AnimatedCounter value={50} suffix="+" className="text-5xl font-bold text-amber-400 block mb-2" />
                <p className="text-gray-300">Horses Trained</p>
              </div>
              <div className="text-white">
                <AnimatedCounter value={100} suffix="%" className="text-5xl font-bold text-amber-400 block mb-2" />
                <p className="text-gray-300">Satisfaction Rate</p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </section>
      
      <WriteReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
      
      <Footer />
    </main>
    </PageTransition>
  );
}
