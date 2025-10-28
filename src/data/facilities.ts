import { IconType } from "react-icons";
import {
  FaWarehouse,
  FaTree,
  FaHome,
  FaRoute,
  FaShower,
  FaTools,
  FaCamera,
  FaWifi,
  FaParking,
  FaFirstAid,
  FaAppleAlt,
  FaCouch,
  FaCoffee,
  FaLock,
  FaLightbulb,
  FaFan,
  FaHorse,
  FaSun,
} from "react-icons/fa";
import { GiHorseshoe, GiPathDistance, GiBarn } from "react-icons/gi";

export interface FacilityFeature {
  title: string;
  description: string;
  icon: IconType;
  features: string[];
}

export interface BoardingPackage {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FacilityStat {
  label: string;
  value: number;
  suffix: string;
  icon: IconType;
}

export interface FacilityImage {
  src: string;
  alt: string;
  category: string;
}

export interface FacilityFAQ {
  question: string;
  answer: string;
}

export const facilityFeatures: FacilityFeature[] = [
  {
    title: "Indoor Arena",
    description: "Professional-grade 20,000 sq ft climate-controlled arena",
    icon: FaWarehouse,
    features: [
      "Pristine footing with regular maintenance",
      "Full lighting for evening rides",
      "Mirrors for training enhancement",
      "Viewing gallery for spectators",
    ],
  },
  {
    title: "Outdoor Arena",
    description: "Expansive 25,000 sq ft outdoor riding arena",
    icon: FaSun,
    features: [
      "Sand and fiber footing blend",
      "Jump courses available",
      "Covered viewing area",
      "All-weather surface",
    ],
  },
  {
    title: "Premium Stables",
    description: "Spacious stalls with superior ventilation and natural light",
    icon: GiBarn,
    features: [
      "12x12 matted stalls",
      "Automatic waterers",
      "Rubber mat flooring",
      "Individual feed programs",
    ],
  },
  {
    title: "Scenic Trails",
    description: "Miles of well-maintained trails through beautiful landscapes",
    icon: FaRoute,
    features: [
      "Over 5 miles of trails",
      "Varying terrain levels",
      "Forest and field paths",
      "Clearly marked routes",
    ],
  },
  {
    title: "Turnout Pastures",
    description: "Lush, well-maintained pastures for daily turnout",
    icon: FaTree,
    features: [
      "Individual & group turnout",
      "Sheltered paddocks",
      "Regular pasture rotation",
      "Safe fencing throughout",
    ],
  },
  {
    title: "Modern Amenities",
    description: "Top-tier facilities for riders and horses alike",
    icon: GiHorseshoe,
    features: [
      "Climate-controlled tack room",
      "Wash stalls with hot water",
      "Lounge area with WiFi",
      "Ample trailer parking",
    ],
  },
];

export const boardingPackages: BoardingPackage[] = [
  {
    name: "Full Board",
    price: "$850",
    period: "per month",
    description: "Complete care package for your horse with all amenities included",
    features: [
      "Daily turnout",
      "Stall cleaning twice daily",
      "Premium hay & grain feeding",
      "Blanketing service",
      "Arena access anytime",
      "Pasture rotation",
    ],
    popular: true,
  },
  {
    name: "Partial Board",
    price: "$550",
    period: "per month",
    description: "Perfect balance of care and hands-on involvement",
    features: [
      "Daily turnout",
      "Stall cleaning once daily",
      "Hay provided (grain not included)",
      "Arena access anytime",
      "Shared responsibility",
    ],
  },
  {
    name: "Training Board",
    price: "$1,250",
    period: "per month",
    description: "Full board plus professional training for competitive horses",
    features: [
      "Everything in Full Board",
      "5 training sessions per week",
      "Show preparation",
      "Exercise program",
      "Progress reports",
      "Priority scheduling",
    ],
  },
];

export const facilityStats: FacilityStat[] = [
  {
    label: "Indoor Arena Size",
    value: 20000,
    suffix: " sq ft",
    icon: FaWarehouse,
  },
  {
    label: "Box Stalls",
    value: 40,
    suffix: "+",
    icon: FaHome,
  },
  {
    label: "Total Acreage",
    value: 50,
    suffix: " acres",
    icon: FaTree,
  },
  {
    label: "Trail Miles",
    value: 5,
    suffix: "+",
    icon: GiPathDistance,
  },
];

export const amenities = [
  { name: "Climate-Controlled Tack Room", icon: FaLock },
  { name: "Hot Water Wash Stalls", icon: FaShower },
  { name: "Viewing Lounge with WiFi", icon: FaWifi },
  { name: "Professional Farrier Services", icon: GiHorseshoe },
  { name: "On-Site Vet Visits", icon: FaFirstAid },
  { name: "Ample Trailer Parking", icon: FaParking },
  { name: "Feed & Supplement Storage", icon: FaAppleAlt },
  { name: "Rider Lounge Area", icon: FaCouch },
  { name: "Coffee & Refreshments", icon: FaCoffee },
  { name: "24/7 Security System", icon: FaLock },
  { name: "LED Arena Lighting", icon: FaLightbulb },
  { name: "High-Powered Ventilation", icon: FaFan },
  { name: "Equipment Storage", icon: FaTools },
  { name: "Security Cameras", icon: FaCamera },
  { name: "Grooming Stations", icon: FaHorse },
  { name: "Heated Viewing Area", icon: FaSun },
];

export const facilityImages: FacilityImage[] = [
  { src: "/images/facility1.jpg", alt: "Indoor Arena", category: "Arenas" },
  { src: "/images/facility2.jpg", alt: "Outdoor Arena", category: "Arenas" },
  { src: "/images/facility3.jpg", alt: "Barn & Stables", category: "Stables" },
  { src: "/images/facility-bg.jpg", alt: "Facility Overview", category: "Overview" },
  { src: "/images/facility.jpg", alt: "Main Facility", category: "Overview" },
  { src: "/images/hero-bg.jpg", alt: "Scenic View", category: "Grounds" },
  { src: "/images/about-hero.jpg", alt: "Training Session", category: "Training" },
  { src: "/images/training-bg.jpg", alt: "Training Arena", category: "Training" },
  // Placeholder for additional images
  { src: "/images/facility1.jpg", alt: "Stall Interior", category: "Stables" },
  { src: "/images/facility2.jpg", alt: "Wash Stall", category: "Amenities" },
  { src: "/images/facility3.jpg", alt: "Tack Room", category: "Amenities" },
  { src: "/images/facility-bg.jpg", alt: "Pasture Views", category: "Grounds" },
];

export const facilityFAQs: FacilityFAQ[] = [
  {
    question: "What is included in full board?",
    answer:
      "Full board includes daily turnout, twice-daily stall cleaning, premium hay and grain feeding, blanketing service, unlimited arena access, and regular pasture rotation. Your horse receives complete care from our experienced staff.",
  },
  {
    question: "Can I visit my horse anytime?",
    answer:
      "Yes! Boarders have 24/7 access to the facility. We ask that you check in at the office during your first few visits, and please be mindful of quiet hours (10 PM - 6 AM) out of respect for horses and neighbors.",
  },
  {
    question: "Do you offer trail riding?",
    answer:
      "Absolutely! We have over 5 miles of well-maintained trails with varying terrain. Trails are open during daylight hours for all boarders and lesson students. We also organize group trail rides monthly.",
  },
  {
    question: "What are your arena hours?",
    answer:
      "The indoor arena is available 24/7 for boarders. The outdoor arena is open during daylight hours. We maintain a shared calendar to coordinate arena usage during peak times and lessons.",
  },
  {
    question: "Is there a veterinarian on site?",
    answer:
      "We have a partnership with leading equine veterinarians who provide regular on-site visits. Emergency vet services are available 24/7. All routine care, vaccinations, and dental work can be coordinated through our staff.",
  },
  {
    question: "What security measures do you have?",
    answer:
      "Our facility features 24/7 security cameras, gated entry, motion-sensor lighting, and regular night checks. All buildings are alarmed and we have staff on-site during peak hours.",
  },
];

export const getAllFacilityImages = (): FacilityImage[] => facilityImages;

export const getFacilityImagesByCategory = (category: string): FacilityImage[] =>
  facilityImages.filter((img) => img.category === category);
