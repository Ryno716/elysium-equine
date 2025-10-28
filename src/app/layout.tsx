import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elysium-equine.netlify.app/"),
  title: "Elysium Equine | Premier Equestrian Facility in Langley, BC",
  description: "Elysium Equine offers top-tier horse training, boarding, and riding in Langley, BC. Join our community of passionate riders and experience world-class care for your horse.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Elysium Equine",
  },
  openGraph: {
    title: "Elysium Equine | Premier Equestrian Facility in Langley, BC",
    description: "Elysium Equine offers top-tier horse training, boarding, and riding in Langley, BC. Join our community of passionate riders and experience world-class care for your horse.",
    url: "https://elysium-equine.netlify.app/",
    siteName: "Elysium Equine",
    images: [
      {
        url: "/images/about1.jpg",
        width: 1200,
        height: 630,
        alt: "Elysium Equine Facility",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elysium Equine | Premier Equestrian Facility in Langley, BC",
    description: "Elysium Equine offers top-tier horse training, boarding, and riding in Langley, BC. Join our community of passionate riders and experience world-class care for your horse.",
    images: ["/images/about1.jpg"],
    site: "@elysiumequine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
