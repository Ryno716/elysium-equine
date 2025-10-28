"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ScrollReveal from "../../components/ScrollReveal";
import ImageGallery from "../../components/ImageGallery";
import AnimatedCounter from "../../components/AnimatedCounter";
import EnhancedImage from "../../components/EnhancedImage";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import {
  facilityFeatures,
  boardingPackages,
  facilityStats,
  amenities,
  facilityImages,
  facilityFAQs,
} from "@/data/facilities";

export default function FacilityPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <PageTransition>
      <main className="bg-black min-h-screen">
        <Navigation />

        {/* Full-Screen Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <EnhancedImage
            src="/images/facility-bg.jpg"
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
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              World-Class <span className="text-amber-400">Facilities</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              Experience premier equestrian facilities designed for excellence.
              From our climate-controlled arenas to scenic trails, every detail
              matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#packages"
                className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                View Boarding Packages
              </a>
              <a
                href="#tour"
                className="border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Book a Tour
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

        {/* Facility Stats Section */}
        <section className="py-16 px-4 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                By the <span className="text-amber-400">Numbers</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {facilityStats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <stat.icon className="text-5xl text-amber-400 mx-auto mb-4" />
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Features Grid */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Our <span className="text-amber-400">Facilities</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Every aspect of our facility is designed with your horse&apos;s
                comfort and your riding experience in mind.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilityFeatures.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-linear-to-br from-gray-800 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all group">
                    <div className="bg-amber-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="text-black text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-amber-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-400 flex items-start"
                        >
                          <FaCheck className="text-amber-400 mr-2 mt-1 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Virtual <span className="text-amber-400">Tour</span>
              </h2>
              <p className="text-gray-400 text-center mb-12">
                Explore our facilities through photos (click to enlarge)
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {facilityImages.slice(0, 12).map((image, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div
                    className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => openGallery(index)}
                  >
                    <EnhancedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                      <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white font-bold">{image.alt}</p>
                        <p className="text-amber-400 text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Boarding Packages Section */}
        <section id="packages" className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Boarding <span className="text-amber-400">Packages</span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Choose the perfect care package for your horse. All packages
                include access to our world-class facilities.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {boardingPackages.map((pkg, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div
                    className={`relative bg-linear-to-br from-gray-800 to-black p-8 rounded-2xl border-2 ${
                      pkg.popular
                        ? "border-amber-400 shadow-lg shadow-amber-400/20"
                        : "border-amber-400/20"
                    } hover:border-amber-400/50 transition-all`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-amber-400 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400">/{pkg.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <FaCheck className="text-amber-400 mr-3 mt-1 shrink-0" />
                          <span>{feature}</span>
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

        {/* Amenities Checklist */}
        <section className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                Premium <span className="text-amber-400">Amenities</span>
              </h2>
              <p className="text-gray-400 text-center mb-12">
                Everything you need for a complete equestrian experience
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {amenities.map((amenity, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <div className="flex items-center gap-3 bg-linear-to-br from-gray-800 to-black p-4 rounded-lg border border-amber-400/20 hover:border-amber-400/50 transition-all">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      <amenity.icon className="text-black text-lg" />
                    </div>
                    <span className="text-gray-300 text-sm">{amenity.name}</span>
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
                Everything you need to know about our facilities and boarding
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {facilityFAQs.map((faq, index) => (
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

        {/* Book a Tour CTA */}
        <section id="tour" className="py-20 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="bg-linear-to-br from-amber-500/10 to-amber-600/10 border-2 border-amber-400/30 rounded-2xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Visit <span className="text-amber-400">Our Facility?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Schedule a personalized tour and experience our world-class
                  facilities firsthand. See why Elysium Equine is the premier
                  choice for equestrian excellence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                  >
                    Book Your Tour
                  </a>
                  <a
                    href="tel:5551234567"
                    className="border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                  >
                    Call Us Now
                  </a>
                </div>
                <p className="text-gray-400 mt-6">
                  Tours available Monday - Saturday | Call (555) 123-4567
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        <ImageGallery
          images={facilityImages}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          initialIndex={galleryIndex}
        />
        
        <Footer />
      </main>
    </PageTransition>
  );
}
