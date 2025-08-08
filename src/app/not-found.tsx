"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-8">
      <h1 className="text-6xl font-extrabold text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="mb-8 text-lg max-w-xl">
        Sorry, the page you are looking for does not exist or has been moved.<br />
        Please check the URL or return to the homepage.
      </p>
      <Link href="/" className="px-6 py-2 bg-transparent border-2 border-amber-400 rounded-lg text-amber-400 hover:bg-amber-400 hover:text-white font-semibold transition">
        Back to Home
      </Link>
    </main>
  );
}
