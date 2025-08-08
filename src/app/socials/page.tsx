"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialsPage() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-black">
      {/* Blurred, darkened farm background */}
      <Image
        src="/images/socials-bg.jpg"
        alt="Aerial view of the farm"
        fill
        quality={70}
        priority={false}
        className="object-cover object-center brightness-20 blur-[0.5px] pointer-events-none select-none"
        style={{ position: "absolute" }}
      />
      {/* Overlay card */}
      <div className="relative z-10 bg-[#232325]/95 border border-amber-400 rounded-2xl shadow-2xl px-8 py-12 max-w-lg w-full flex flex-col items-center text-center">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl text-amber-400">Connect With Us</h1>
        <p className="mb-6 text-white">
          Follow Elysium Equine on your favorite platforms for training reels, farm updates, and behind-the-scenes content.
        </p>
        {/* Social buttons */}
        <div className="flex justify-center gap-6 mb-6">
          <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-3xl text-blue-500 transition-transform hover:scale-110" />
          </Link>
          <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-3xl text-pink-500 transition-transform hover:scale-110" />
          </Link>
          <Link href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-3xl text-black transition-transform dark:text-white hover:scale-110" style={{ color: "#000" }} />
          </Link>
        </div>
        {/* Contact buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="mailto:info@elysium.com"
            className="px-6 py-2 font-semibold transition border-2 rounded-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
          >
            Email Us
          </a>
          <a
            href="tel:+15551234"
            className="px-6 py-2 font-semibold transition border-2 rounded-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
          >
            Call Us
          </a>
        </div>
        {/* Placeholder Address & Tagline */}
        <div className="mb-2 text-sm text-amber-100">
          123 Elysium Lane, Langley, BC &mdash; (555) 123-4567
        </div>
        <div className="mb-6 text-xs text-amber-200 opacity-80">
          ✨ Tag us <span className="font-mono">@elysiumequine</span> — we’d love to feature your moments!
        </div>
        
        {/* Back to Home Button */}
        <Link
          href="/"
          className="px-6 py-2 font-semibold transition bg-transparent border-2 rounded-lg border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
