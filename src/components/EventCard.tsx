"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export default function EventCard({ event, featured = false }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group ${featured ? "md:col-span-2" : ""}`}
    >
      <Link href={`/events/${event.slug}`}>
        <div className="bg-gray-900 border border-amber-400/20 rounded-lg overflow-hidden hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/10 transition-all duration-300">
          {/* Image */}
          <div className={`relative overflow-hidden ${featured ? "h-80" : "h-56"}`}>
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                {event.eventType}
              </span>
            </div>
            {featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-black/80 text-amber-400 border border-amber-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            )}
            {event.spotsAvailable !== undefined && event.spotsAvailable < 10 && (
              <div className="absolute bottom-4 right-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Only {event.spotsAvailable} spots left!
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3
              className={`${
                featured ? "text-2xl" : "text-xl"
              } font-bold text-white mb-3 group-hover:text-amber-400 transition-colors`}
            >
              {event.title}
            </h3>

            <p className="text-gray-300 mb-4 line-clamp-2">{event.description}</p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <FiCalendar className="w-4 h-4 text-amber-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiClock className="w-4 h-4 text-amber-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiMapPin className="w-4 h-4 text-amber-400" />
                <span>{event.location}</span>
              </div>
              {event.spotsAvailable !== undefined && (
                <div className="flex items-center gap-1">
                  <FiUsers className="w-4 h-4 text-amber-400" />
                  <span>{event.spotsAvailable} spots left</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {featured && (
              <div className="flex flex-wrap gap-2 mt-4">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-400/10 border border-amber-400/30 text-amber-400 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
