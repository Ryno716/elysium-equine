"use client";
import { useState } from "react";

export default function CenterModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Center Floating Logo/Button */}
      <button
        className="z-20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow-lg p-6 flex items-center justify-center border-4 border-amber-300 hover:scale-105 transition-all"
        onClick={() => setOpen(true)}
        style={{ width: 100, height: 100 }}
        aria-label="About Elysium"
      >
        {/* Placeholder Horse SVG (can swap later) */}
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#eab308" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3l2.5 3h4a1 1 0 011 1v7a5 5 0 01-5 5h-4a5 5 0 01-5-5V7a1 1 0 011-1h4L12 3zm0 2.236L10.618 6.5a1 1 0 01-.618.236h-3v7a3 3 0 003 3h4a3 3 0 003-3V6.736a1 1 0 01-.618-.236L12 5.236z" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="z-30 fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-[90vw] max-w-md mx-auto text-center relative">
            <h2 className="text-2xl font-bold mb-2">About Elysium Equine</h2>
            <p className="text-gray-700 mb-6">
              Elysium Equine is a premier equestrian facility providing top-tier training, boarding, and care for horses and riders. Our focus is on excellence, safety, and a strong community.
            </p>
            <button
              className="px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white font-semibold shadow transition"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
