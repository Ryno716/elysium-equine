"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHorse, FaHome, FaTrophy, FaChevronDown } from "react-icons/fa";
import { GiHorseshoe } from "react-icons/gi";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";
import EnhancedImage from "../components/EnhancedImage";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import EventCard from "../components/EventCard";
import { getFeaturedEvents } from "@/data/events";

const services = [
  {
    icon: FaHorse,
    title: "Professional Training",
    description: "Expert instruction for riders of all levels, from beginners to competitive athletes.",
    link: "/training",
    color: "amber",
  },
  {
    icon: GiHorseshoe,
    title: "Premium Boarding",
    description: "State-of-the-art facilities with personalized care for your horse's comfort and well-being.",
    link: "/facility",
    color: "amber",
  },
  {
    icon: FaTrophy,
    title: "World-Class Facilities",
    description: "Indoor and outdoor arenas, scenic trails, and top-tier amenities for an exceptional experience.",
    link: "/facility",
    color: "amber",
  },
];

const stats = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Happy Clients", value: 150, suffix: "+" },
  { label: "Horses Cared For", value: 50, suffix: "+" },
  { label: "Training Programs", value: 12, suffix: "" },
];

const testimonials = [
  {
    text: "Elysium Equine has transformed my riding abilities. The trainers are world-class and truly care about each rider's progress.",
    author: "Sophia Martinez",
    role: "Competitive Rider",
  },
  {
    text: "The boarding facilities are exceptional. My horse has never been happier or healthier. I have complete peace of mind.",
    author: "James Peterson",
    role: "Horse Owner",
  },
];

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <EnhancedImage
            src="/images/facility.jpg"
            alt="Elysium Equine Facility"
            fill
            className="object-cover brightness-50"
          />
          
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6"
            >
              Where Passion Meets Excellence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            >
              Premier equestrian training, boarding, and facilities in Langley, BC. 
              Join our community of passionate riders and experience world-class care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
                >
                  Book a Lesson
                </motion.button>
              </Link>
              <Link href="/facility">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-amber-500 text-black text-lg font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-lg"
                >
                  Explore Our Facility
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white"
            >
              <FaChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </section>

        {/* Services Highlight */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                Discover our comprehensive equestrian services designed for excellence
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.2}>
                  <Link href={service.link}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="bg-gray-900 border border-amber-400/20 rounded-xl p-8 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20 transition-all duration-300 cursor-pointer h-full"
                    >
                      <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-amber-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <span className="text-amber-400 font-semibold hover:underline">
                        Learn More →
                      </span>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-linear-to-r from-gray-900 to-black border-y border-amber-400/20">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-16">
                Why Choose Elysium
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-extrabold text-amber-400 mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                Join us for exciting competitions, clinics, and social gatherings
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredEvents.map((event) => (
                <div key={event.slug}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center">
                <Link href="/events">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-amber-500 text-black text-lg font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                  >
                    View All Events
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-16">
                What Our Clients Say
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-black border border-amber-400/30 rounded-xl p-8 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/10 transition-all"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaTrophy key={i} className="w-5 h-5 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 text-lg">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-amber-500 text-black text-lg font-semibold rounded-lg hover:bg-amber-400 transition-colors"
                  >
                    Read All Reviews
                  </motion.button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-linear-to-r from-amber-500 to-amber-600">
          <div className="container mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-black/90 mb-10 max-w-2xl mx-auto">
                Whether you&apos;re a beginner or an experienced rider, we&apos;re here to help you achieve your equestrian goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
                  >
                    Schedule a Visit
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-black">
                <FaHome className="w-5 h-5" />
                <a href="tel:+16045551234" className="text-xl font-semibold hover:underline">
                  (604) 555-1234
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
