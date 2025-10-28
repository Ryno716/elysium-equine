"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getEventBySlug, getRecentEvents } from "@/data/events";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import { FiClock, FiMapPin, FiCalendar, FiArrowLeft, FiUsers, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const recentEvents = getRecentEvents(3).filter((e) => e.slug !== slug);

  return (
    <PageTransition>
      <article className="min-h-screen bg-black">
        <Navigation />
        
        {/* Hero Image */}
        <div className="relative h-96 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
          
          {/* Back Button */}
          <Link href="/events">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-8 left-8 bg-gray-900 border border-amber-400/30 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-amber-400 font-semibold hover:border-amber-400 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Events
            </motion.button>
          </Link>

          {/* Event Type Badge */}
          <div className="absolute bottom-8 left-8 flex gap-3">
            <span className="bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              {event.eventType}
            </span>
            <span className="bg-black/80 text-amber-400 border border-amber-400 px-4 py-2 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          </div>

          {/* Spots Available Badge */}
          {event.spotsAvailable !== undefined && event.spotsAvailable < 10 && (
            <div className="absolute bottom-8 right-8">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Only {event.spotsAvailable} spots left!
              </span>
            </div>
          )}
        </div>

        {/* Event Content */}
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {event.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5 text-amber-400" />
                <span className="font-medium">
                  {event.date}
                  {event.endDate && ` - ${event.endDate}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-amber-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-5 h-5 text-amber-400" />
                <span>{event.location}</span>
              </div>
              {event.spotsAvailable !== undefined && (
                <div className="flex items-center gap-2">
                  <FiUsers className="w-5 h-5 text-amber-400" />
                  <span>{event.spotsAvailable} of {event.capacity} spots available</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-900 border border-amber-400/30 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Registration Button */}
          {event.registrationUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <Link href={event.registrationUrl}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  Register Now
                  <FiExternalLink className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          )}

          {/* Event Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none mb-16"
          >
            <div className="text-xl text-gray-300 mb-8 font-medium leading-relaxed">
              {event.description}
            </div>
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: event.fullDescription
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4 text-amber-400">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3 text-amber-400">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2 text-amber-400">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-6 mb-2">${line.slice(2)}</li>`;
                    }
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="font-bold mb-2">${line.slice(2, -2)}</p>`;
                    }
                    if (line.trim() === "") {
                      return "<br/>";
                    }
                    return `<p class="mb-4">${line}</p>`;
                  })
                  .join(""),
              }}
            />
          </motion.div>

          {/* Recent Events */}
          {recentEvents.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-amber-400/30 pt-12"
            >
              <h2 className="text-2xl font-bold text-amber-400 mb-6">
                More Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentEvents.map((recentEvent) => (
                  <Link key={recentEvent.slug} href={`/events/${recentEvent.slug}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-48 mb-3 rounded-lg overflow-hidden">
                        <Image
                          src={recentEvent.image}
                          alt={recentEvent.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                        {recentEvent.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {recentEvent.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                        <FiCalendar className="w-3 h-3" />
                        <span>{recentEvent.date}</span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </PageTransition>
  );
}
