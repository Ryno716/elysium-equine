"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-amber-400/30 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-amber-400 font-bold text-xl mb-4">Elysium Equine</h3>
            <p className="text-gray-300 text-sm mb-4">
              Premier equestrian facility providing top-tier training, boarding, and care for horses and riders in Langley, BC.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-2xl text-blue-500 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-400 transition-colors" />
              </Link>
              <Link href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok className="text-2xl text-white hover:text-gray-300 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/facility" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Facility
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-400 font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <span>123 Elysium Lane<br />Langley, BC</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-amber-400 flex-shrink-0" />
                <a href="tel:+15551234" className="hover:text-amber-400 transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@elysium.com" className="hover:text-amber-400 transition-colors">
                  info@elysium.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-400/30 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Elysium Equine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
