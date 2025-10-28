"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ScrollReveal from "../../components/ScrollReveal";
import ContactForm from "../../components/ContactForm";
import LiveChat from "../../components/LiveChat";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaDirections,
  FaChevronDown,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to book in advance?",
      answer:
        "Yes, we recommend booking at least 24 hours in advance for lessons and facility tours. This ensures we can provide you with the best experience and proper attention.",
    },
    {
      question: "What should I wear?",
      answer:
        "Wear long pants and closed-toe shoes with a small heel. We provide helmets that meet safety standards. Avoid wearing loose jewelry or clothing that could get caught.",
    },
    {
      question: "Can I bring my own horse?",
      answer:
        "Yes! We welcome boarders and have various boarding packages available. All horses must have current health certificates and vaccination records.",
    },
    {
      question: "Is there parking available?",
      answer:
        "We have ample free parking available on-site. Follow the signs to the main parking area near the barn entrance.",
    },
    {
      question: "Are you open on holidays?",
      answer:
        "We are closed on major holidays (Christmas, New Year's Day). For other holidays, please check our events calendar or contact us directly.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        <Navigation />
        <LiveChat />

        {/* Hero Section - Full Screen with Farm Imagery */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/facility-bg.jpg')",
              }}
            />
          </div>

          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              Plan Your <span className="text-amber-400">Visit</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              Welcome to Elysium Equine. We&apos;re excited to meet you and
              share our passion for horses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="tel:5551234567"
                className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Call Now
              </a>
              <a
                href="#contact-form"
                className="border-2 border-amber-400 hover:bg-amber-400 hover:text-black text-amber-400 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Send a Message
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

        {/* Visit Information Cards */}
        <section className="py-16 px-4 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
            >
              Visit <span className="text-amber-400">Information</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all"
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">
                  Address
                </h3>
                <p className="text-gray-300 mb-4">
                  123 Elysium Lane
                  <br />
                  Langley, BC V3A 4H9
                  <br />
                  Canada
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <FaDirections className="mr-2" />
                  Get Directions
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-linear-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all"
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaClock className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">
                  Hours
                </h3>
                <p className="text-gray-300">
                  <strong>Mon-Fri:</strong> 8AM - 7PM
                  <br />
                  <strong>Saturday:</strong> 9AM - 6PM
                  <br />
                  <strong>Sunday:</strong> By appointment
                  <br />
                  <span className="text-sm text-gray-400 mt-2 block">
                    Closed major holidays
                  </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-linear-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all"
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaDirections className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">
                  Getting Here
                </h3>
                <p className="text-gray-300 text-sm">
                  <strong>From Highway 1:</strong> Exit at 232nd St, head south
                  for 3km
                  <br />
                  <strong>Parking:</strong> Free on-site parking available
                  <br />
                  <strong>Transit:</strong> Bus #562 stops nearby
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-linear-to-br from-gray-900 to-black p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/50 transition-all"
              >
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaEnvelope className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">
                  What to Expect
                </h3>
                <p className="text-gray-300 text-sm">
                  Arrive 15 minutes early
                  <br />
                  Wear long pants &amp; closed-toe shoes
                  <br />
                  Check in at main office
                  <br />
                  Tours available by appointment
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Multiple Ways to Connect */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Connect <span className="text-amber-400">With Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Whether you prefer a phone call, email, or social media, we&apos;re
              here for you. Choose your preferred way to reach out.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <a
                  href="tel:5551234567"
                  className="group block bg-linear-to-br from-gray-800 to-black p-8 rounded-xl border-2 border-amber-400/30 hover:border-amber-400 transition-all"
                >
                  <div className="bg-amber-500 group-hover:bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <FaPhone className="text-black text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-amber-400">
                    Call Us
                  </h3>
                  <p className="text-gray-300">
                    (555) 123-4567
                    <br />
                    <span className="text-sm text-gray-400">Mon-Sat 8AM-6PM</span>
                  </p>
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <a
                  href="mailto:info@elysiumequine.com"
                  className="group block bg-linear-to-br from-gray-800 to-black p-8 rounded-xl border-2 border-amber-400/30 hover:border-amber-400 transition-all"
                >
                  <div className="bg-amber-500 group-hover:bg-amber-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <FaEnvelope className="text-black text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-amber-400">
                    Email Us
                  </h3>
                  <p className="text-gray-300">
                    info@elysiumequine.com
                    <br />
                    <span className="text-sm text-gray-400">24hr response time</span>
                  </p>
                </a>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-linear-to-br from-gray-800 to-black p-8 rounded-xl border-2 border-amber-400/30 h-full">
                  <h3 className="text-xl font-bold mb-4 text-amber-400">
                    Follow Us
                  </h3>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://facebook.com/elysiumequine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-white text-xl" />
                    </a>
                    <a
                      href="https://instagram.com/elysiumequine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-white text-xl" />
                    </a>
                    <a
                      href="https://tiktok.com/@elysiumequine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                      aria-label="TikTok"
                    >
                      <SiTiktok className="text-black text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">
                    @elysiumequine
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-linear-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-amber-400/30 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3 text-center">
                  Send Us a Message
                </h2>
                <p className="text-gray-300 text-center mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-12"
              >
                Find <span className="text-amber-400">Us</span>
              </motion.h2>
              <div className="bg-gray-900 rounded-2xl overflow-hidden border-2 border-amber-400/30 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.34095321253!2d-122.65869935820312!3d49.10426599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d7f8f0e0e0e1%3A0x0!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elysium Equine Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Before You Visit - FAQs */}
        <section className="py-16 px-4 bg-linear-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
            >
              Before You <span className="text-amber-400">Visit</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-center mb-12"
            >
              Common questions to help you prepare for your visit
            </motion.p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-linear-to-br from-gray-900 to-black border border-amber-400/20 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        <Footer />
      </main>
    </PageTransition>
  );
}
