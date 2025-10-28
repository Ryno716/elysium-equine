"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ScrollReveal from "../../components/ScrollReveal";
import EnhancedImage from "../../components/EnhancedImage";
import { FaChevronDown, FaCheck, FaStar } from "react-icons/fa";
import {
  trainingPrograms,
  instructors,
  lessonPackages,
  skillLevels,
  testimonials,
  trainingFAQs,
} from "@/data/training";

export default function TrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        <Navigation />

        {/* Full-Screen Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <EnhancedImage
            src="/images/training-bg.jpg"
            alt="Elysium Equine Training"
            fill
            className="object-cover brightness-50"
          />
          
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Expert <span className="text-amber-400">Training</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              Transform your riding with world-class instruction tailored to
              every skill level. From your first lesson to the show ring.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#programs"
                className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                View Programs
              </a>
              <a
                href="#packages"
                className="border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Lesson Packages
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <FaChevronDown className="text-amber-400 text-3xl" />
          </motion.div>
        </section>

        {/* Skill Levels Section */}
        <section className="py-16 px-4 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Find Your <span className="text-amber-400">Level</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                We offer programs for every stage of your equestrian journey
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillLevels.map((level, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-linear-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all h-full">
                    <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <level.icon className="text-black text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-400">
                      {level.level}
                    </h3>
                    <p className="text-lg font-semibold text-white mb-2">
                      {level.title}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {level.description}
                    </p>
                    <div className="text-amber-400 text-sm mb-3 font-semibold">
                      What You&apos;ll Learn:
                    </div>
                    <ul className="space-y-1 text-xs text-gray-400">
                      {level.whatYouLearn.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-amber-400 mr-2 mt-0.5 shrink-0 text-xs" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-amber-400/20 text-xs text-gray-500">
                      {level.duration}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section id="programs" className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Our <span className="text-amber-400">Programs</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Specialized training programs designed to help you achieve your riding goals
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-linear-to-br from-gray-800 to-black rounded-xl overflow-hidden border border-amber-400/20 hover:border-amber-400/50 transition-all group">
                    <div className="relative h-48 overflow-hidden">
                      <EnhancedImage
                        src={program.image}
                        alt={program.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {program.price}/session
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                          <program.icon className="text-black text-lg" />
                        </div>
                        <h3 className="text-xl font-bold text-amber-400">
                          {program.name}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-3 text-sm">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.skillLevel.map((level, i) => (
                          <span
                            key={i}
                            className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded"
                          >
                            {level}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400 mb-4">
                        {program.duration} | {program.prerequisites || "All welcome"}
                      </div>
                      <ul className="space-y-2 mb-6">
                        {program.features.slice(0, 4).map((feature, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-400 flex items-start"
                          >
                            <FaCheck className="text-amber-400 mr-2 mt-0.5 shrink-0 text-xs" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contact"
                        className="block text-center bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Lesson Packages Section */}
        <section id="packages" className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Lesson <span className="text-amber-400">Packages</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Save money with our lesson packages. The more you ride, the more you save!
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lessonPackages.map((pkg, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div
                    className={`relative bg-linear-to-br from-gray-800 to-black p-6 rounded-2xl border-2 ${
                      pkg.popular
                        ? "border-amber-400 shadow-lg shadow-amber-400/20"
                        : "border-amber-400/20"
                    } hover:border-amber-400/50 transition-all h-full flex flex-col`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-amber-400 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-white">
                        {pkg.price}
                      </span>
                      {pkg.sessions > 0 && (
                        <span className="text-gray-400 text-sm ml-2">
                          ({pkg.sessions} lessons)
                        </span>
                      )}
                    </div>
                    {pkg.savings && (
                      <div className="text-amber-400 text-sm font-semibold mb-3">
                        {pkg.savings}
                      </div>
                    )}
                    <p className="text-gray-300 text-sm mb-4">
                      {pkg.description}
                    </p>
                    <ul className="space-y-2 mb-6 grow">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 flex items-start"
                        >
                          <FaCheck className="text-amber-400 mr-2 mt-0.5 shrink-0 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`block text-center px-6 py-3 rounded-lg font-bold transition-all ${
                        pkg.popular
                          ? "bg-amber-500 hover:bg-amber-400 text-black"
                          : "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Meet Your <span className="text-amber-400">Instructors</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Learn from experienced, certified professionals who are passionate about your success
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="bg-linear-to-br from-gray-800 to-black rounded-xl overflow-hidden border border-amber-400/20 hover:border-amber-400/50 transition-all">
                    <div className="relative h-64 overflow-hidden">
                      <EnhancedImage
                        src={instructor.image}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-amber-400 mb-1">
                        {instructor.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {instructor.title}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {instructor.bio}
                      </p>
                      <div className="mb-3">
                        <div className="text-amber-400 text-sm font-semibold mb-2">
                          Specialties:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {instructor.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {instructor.yearsExperience}+ years experience
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Student <span className="text-amber-400">Success Stories</span>
              </h2>
              <p className="text-gray-400 text-center mb-12">
                Hear from our riders about their training experience
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-linear-to-br from-gray-800 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="border-t border-amber-400/20 pt-4">
                      <p className="text-white font-bold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                      <p className="text-amber-400 text-xs mt-1">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Frequently Asked <span className="text-amber-400">Questions</span>
              </h2>
              <p className="text-gray-400 text-center mb-12">
                Everything you need to know about our training programs
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {trainingFAQs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-linear-to-br from-gray-800 to-black border border-amber-400/20 rounded-xl overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="text-lg font-bold text-amber-400">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-amber-400" />
                      </motion.div>
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-300">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-linear-to-br from-amber-500/10 to-amber-600/10 border-2 border-amber-400/30 rounded-2xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start <span className="text-amber-400">Your Journey?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Book your first lesson today and discover the joy of riding. New riders
                  receive a special introductory rate of $50 for their first lesson!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Book Your First Lesson
                  </a>
                  <a
                    href="tel:5551234567"
                    className="border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                  >
                    Call (555) 123-4567
                  </a>
                </div>
                <p className="text-gray-400 mt-6 text-sm">
                  First-time riders: $50 | Includes safety orientation & full lesson
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
}
