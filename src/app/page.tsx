"use client";
import Image from "next/image";
import Link from "next/link";
import CenterModal from "../components/CenterModal";

const sections = [
  {
    name: "Facility",
    image: "/images/facility.jpg", // Update path/filename as needed
    link: "/facility",
  },
  {
    name: "Training",
    image: "/images/training.jpg",
    link: "/training",
  },
  {
    name: "About",
    image: "/images/about.jpg",
    link: "/about",
  },
  {
    name: "Socials",
    image: "/images/socials.jpg",
    link: "/socials",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <CenterModal />
      <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-[100vh] md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4">

        {sections.map((section) => (
          <Link
            href={section.link}
            key={section.name}
            className="relative group flex items-center justify-center overflow-hidden"
            style={{ minHeight: "300px" }}
          >
            <Image
              src={section.image}
              alt={section.name}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform group-hover:scale-105 brightness-75 duration-500"
              priority
            />
            <span className="z-10 text-white text-3xl md:text-4xl font-extrabold drop-shadow-lg absolute">
              {section.name}
            </span>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
          </Link>
        ))}
      </div>
    </main>
  );
}
