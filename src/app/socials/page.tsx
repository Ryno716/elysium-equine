"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialsPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black">
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
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3">Connect With Us</h1>
        <p className="text-white mb-6">
          Follow Elysium Equine on your favorite platforms for training reels, farm updates, and behind-the-scenes content.
        </p>
        {/* Social buttons */}
        <div className="flex gap-6 justify-center mb-6">
          <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-blue-500 hover:scale-110 transition-transform text-3xl" />
          </Link>
          <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-pink-500 hover:scale-110 transition-transform text-3xl" />
          </Link>
          <Link href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-black dark:text-white hover:scale-110 transition-transform text-3xl" style={{ color: "#000" }} />
          </Link>
        </div>
        {/* Contact buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <a
            href="mailto:info@elysium.com"
            className="px-6 py-2 rounded-full border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition"
          >
            Email Us
          </a>
          <a
            href="tel:+15551234"
            className="px-6 py-2 rounded-full border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition"
          >
            Call Us
          </a>
        </div>
        {/* Placeholder Address & Tagline */}
        <div className="text-amber-100 text-sm mb-2">
          123 Elysium Lane, Langley, BC &mdash; (555) 123-4567
        </div>
        <div className="text-xs text-amber-200 opacity-80">
          ✨ Tag us <span className="font-mono">@elysiumequine</span> — we’d love to feature your moments!
        </div>
      </div>
      <Link
  href="/"
  className="mt-8 px-6 py-2 bg-transparent border-2 border-amber-400 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition z-10"
>
  Back to Home
</Link>

    </main>
  );
}
