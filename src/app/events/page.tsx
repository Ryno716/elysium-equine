"use client";

import { useState } from "react";
import { events, getAllEventTypes } from "@/data/events";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import { FiSearch, FiCalendar } from "react-icons/fi";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const eventTypes = getAllEventTypes();

  // Filter events by category and search
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" || 
      event.eventType === selectedCategory ||
      event.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Separate upcoming and yearly events
  const upcomingEvents = filteredEvents.filter(e => e.category === "Upcoming");
  const yearlyEvents = filteredEvents.filter(e => e.category === "Yearly");

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-black">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FiCalendar className="w-12 h-12 text-amber-400" />
              <h1 className="text-5xl font-bold text-amber-400">
                Events & Schedule
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Join us for exciting equestrian events, competitions, clinics, and social gatherings. 
              From upcoming activities to annual traditions, there&apos;s always something happening at Elysium Equine.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-gray-900 border border-amber-400/30 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none text-white placeholder-gray-400"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-4 bg-black">
          <div className="container mx-auto max-w-6xl">
            <CategoryFilter
              categories={["Upcoming", "Yearly", ...eventTypes]}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* Upcoming Events Section */}
        {(selectedCategory === "All" || selectedCategory === "Upcoming" || upcomingEvents.length > 0) && upcomingEvents.length > 0 && (
          <section className="pb-12 px-4 bg-black">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-amber-400 mb-8">
                🎯 Upcoming Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.slug}
                    event={event}
                    featured={event.featured}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Yearly Events Section */}
        {(selectedCategory === "All" || selectedCategory === "Yearly" || yearlyEvents.length > 0) && yearlyEvents.length > 0 && (
          <section className="pb-20 px-4 bg-black">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-amber-400 mb-8">
                📅 Annual Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {yearlyEvents.map((event) => (
                  <EventCard
                    key={event.slug}
                    event={event}
                    featured={event.featured}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <section className="pb-20 px-4 bg-black">
            <div className="container mx-auto max-w-6xl text-center py-12">
              <p className="text-gray-300 text-lg">
                No events found matching your criteria.
              </p>
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  );
}
