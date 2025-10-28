"use client";

import PageTransition from "@/components/PageTransition";
import { FiWifiOff } from "react-icons/fi";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <FiWifiOff className="w-24 h-24 mx-auto text-amber-400 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">
            You&apos;re Offline
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            It looks like you&apos;ve lost your internet connection. Some features
            may not be available until you&apos;re back online.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-400">
              You can still browse cached pages:
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-6 py-3 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                Go to Home
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gray-800 text-gray-200 border border-amber-400/30 rounded-lg font-semibold hover:border-amber-400 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
          <div className="mt-8 p-4 bg-gray-900 border border-amber-400/30 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-amber-400">Tip:</strong> This website works offline! Once you&apos;ve
              visited pages while online, you can view them again without an
              internet connection.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
