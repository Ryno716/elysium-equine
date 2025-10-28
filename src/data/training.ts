import { IconType } from "react-icons";
import {
  FaHorse,
  FaTrophy,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import { GiHorseHead, GiJumpingRope, GiHorseshoe } from "react-icons/gi";

export interface TrainingProgram {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  price: string;
  duration: string;
  skillLevel: string[];
  icon: IconType;
  features: string[];
  prerequisites?: string;
}

export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  yearsExperience: number;
}

export interface LessonPackage {
  name: string;
  price: string;
  sessions: number;
  savings?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface SkillLevel {
  level: string;
  title: string;
  description: string;
  icon: IconType;
  whatYouLearn: string[];
  duration: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  program: string;
  rating: number;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "beginner-lessons",
    name: "Beginner Lessons",
    description: "Perfect for riders just starting their equestrian journey",
    detailedDescription:
      "Our beginner program focuses on building a strong foundation in horsemanship, safety, and basic riding skills. You'll learn horse care, grooming, tacking, and develop confidence in the saddle with our gentle school horses.",
    image: "/images/training-bg.jpg",
    price: "$60",
    duration: "60 minutes",
    skillLevel: ["Beginner"],
    icon: FaGraduationCap,
    features: [
      "Horse care and safety fundamentals",
      "Proper mounting and dismounting",
      "Basic walk, trot, and halt",
      "Steering and balance exercises",
      "Grooming and tacking instruction",
      "Understanding horse behavior",
    ],
    prerequisites: "No prior experience required",
  },
  {
    id: "jumping-lessons",
    name: "Jumping Lessons",
    description: "From cross-rails to advanced show jumping courses",
    detailedDescription:
      "Develop your jumping skills with progressive training that builds confidence and technique. Our certified instructors guide you through proper position, approach, and landing techniques for jumps of all heights.",
    image: "/images/jumping.jpg",
    price: "$75",
    duration: "60 minutes",
    skillLevel: ["Intermediate", "Advanced"],
    icon: GiJumpingRope,
    features: [
      "Proper jumping position and balance",
      "Grid work and gymnastic exercises",
      "Course design and strategy",
      "Distance and stride control",
      "Show jumping techniques",
      "Competition preparation",
    ],
    prerequisites: "Solid walk/trot/canter ability required",
  },
  {
    id: "dressage-training",
    name: "Dressage Training",
    description: "Develop precision, balance, and harmony with your horse",
    detailedDescription:
      "Experience the art of dressage with our certified trainers. Focus on developing rhythm, suppleness, and collection through classical training methods. Perfect for riders seeking elegance and precision.",
    image: "/images/dressage.jpg",
    price: "$70",
    duration: "60 minutes",
    skillLevel: ["Intermediate", "Advanced", "Competition"],
    icon: FaAward,
    features: [
      "Classical dressage principles",
      "Lateral movements and collection",
      "Test preparation (USDF levels)",
      "Rider position refinement",
      "Horse conditioning and suppleness",
      "Competition coaching",
    ],
    prerequisites: "Comfortable at all three gaits",
  },
  {
    id: "groundwork",
    name: "Groundwork & Handling",
    description: "Build trust and communication from the ground up",
    detailedDescription:
      "Master the fundamentals of horse handling and ground training. Learn lunging, desensitization, and liberty work to develop a deeper connection with horses and improve overall horsemanship.",
    image: "/images/groundwork.jpg",
    price: "$55",
    duration: "60 minutes",
    skillLevel: ["Beginner", "Intermediate", "Advanced"],
    icon: GiHorseHead,
    features: [
      "Leading and handling techniques",
      "Lunging and ground driving",
      "Desensitization exercises",
      "Liberty work basics",
      "Problem-solving behaviors",
      "Building trust and respect",
    ],
  },
  {
    id: "western-riding",
    name: "Western Riding",
    description: "Learn the classic American riding style",
    detailedDescription:
      "Explore Western riding disciplines including trail riding, reining patterns, and ranch work. Develop a responsive, balanced seat and learn to work cattle or navigate challenging terrain.",
    image: "/images/training-bg.jpg",
    price: "$65",
    duration: "60 minutes",
    skillLevel: ["Beginner", "Intermediate", "Advanced"],
    icon: GiHorseshoe,
    features: [
      "Western saddle and tack",
      "Neck reining and one-handed riding",
      "Trail riding skills",
      "Reining patterns and spins",
      "Cattle work basics",
      "Ranch riding techniques",
    ],
  },
  {
    id: "competition-prep",
    name: "Competition Preparation",
    description: "Get show-ready with expert coaching",
    detailedDescription:
      "Intensive training designed for riders preparing for competitions. Includes course practice, mental preparation, show etiquette, and personalized feedback to help you achieve your competitive goals.",
    image: "/images/training-bg.jpg",
    price: "$85",
    duration: "90 minutes",
    skillLevel: ["Advanced", "Competition"],
    icon: FaTrophy,
    features: [
      "Show ring simulation",
      "Mental preparation techniques",
      "Course and test memorization",
      "Show etiquette and rules",
      "Performance analysis",
      "Competition strategy",
    ],
    prerequisites: "Instructor approval required",
  },
];

export const instructors: Instructor[] = [
  {
    name: "Sarah Mitchell",
    title: "Head Trainer & Director",
    image: "/images/about-hero.jpg",
    bio: "With over 20 years of experience in equestrian sports, Sarah brings expertise in multiple disciplines including dressage, jumping, and eventing. Her patient teaching style and deep understanding of horse behavior make her a favorite among students.",
    specialties: ["Dressage", "Show Jumping", "Eventing", "Young Horse Training"],
    certifications: [
      "USDF Gold Medalist",
      "British Horse Society Instructor (BHSII)",
      "Certified Horsemanship Association",
    ],
    yearsExperience: 20,
  },
  {
    name: "Marcus Rodriguez",
    title: "Jumping & Competition Coach",
    image: "/images/about-hero.jpg",
    bio: "Marcus competed internationally for 15 years before dedicating himself to coaching. His expertise in show jumping and course design helps riders develop winning strategies and confidence in the show ring.",
    specialties: ["Show Jumping", "Hunters", "Equitation", "Course Design"],
    certifications: [
      "USHJA Certified Trainer",
      "SafeSport Certified",
      "Level 3 Eventing Coach",
    ],
    yearsExperience: 15,
  },
  {
    name: "Emily Chen",
    title: "Beginner & Youth Instructor",
    image: "/images/about-hero.jpg",
    bio: "Emily's gentle approach and enthusiasm for teaching make her perfect for beginners and young riders. She creates a supportive environment where students build confidence and develop a lifelong love of horses.",
    specialties: [
      "Beginner Lessons",
      "Youth Programs",
      "Confidence Building",
      "Pony Club",
    ],
    certifications: [
      "CHA Master Instructor",
      "PATH International Certified",
      "First Aid & CPR Certified",
    ],
    yearsExperience: 10,
  },
];

export const lessonPackages: LessonPackage[] = [
  {
    name: "Single Lesson",
    price: "$75",
    sessions: 1,
    description: "Perfect for trying out a new discipline or occasional riders",
    features: [
      "60-minute private lesson",
      "School horse included",
      "Personalized instruction",
      "Flexible scheduling",
    ],
  },
  {
    name: "5-Lesson Package",
    price: "$350",
    sessions: 5,
    savings: "Save $25",
    description: "Great for riders committed to regular improvement",
    features: [
      "Five 60-minute lessons",
      "$70 per lesson rate",
      "Valid for 2 months",
      "Priority scheduling",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    name: "10-Lesson Package",
    price: "$650",
    sessions: 10,
    savings: "Save $100",
    description: "Best value for serious riders",
    features: [
      "Ten 60-minute lessons",
      "$65 per lesson rate",
      "Valid for 4 months",
      "Priority scheduling",
      "Quarterly progress review",
      "One free clinic attendance",
    ],
  },
  {
    name: "Monthly Unlimited",
    price: "$480",
    sessions: 0,
    savings: "Unlimited riding",
    description: "For dedicated riders training multiple times per week",
    features: [
      "Unlimited group lessons",
      "4 private lessons/month",
      "School horse included",
      "Competition support",
      "Video analysis sessions",
      "Priority event registration",
    ],
  },
];

export const skillLevels: SkillLevel[] = [
  {
    level: "Beginner",
    title: "Just Starting Out",
    description:
      "New to riding or returning after a long break. We'll build your confidence and fundamental skills.",
    icon: FaGraduationCap,
    whatYouLearn: [
      "Horse safety and behavior",
      "Grooming and tacking",
      "Mounting and dismounting",
      "Walk and trot basics",
      "Basic steering and stopping",
      "Stable management",
    ],
    duration: "6-12 months typically",
  },
  {
    level: "Intermediate",
    title: "Building Skills",
    description:
      "Comfortable at walk, trot, and canter. Ready to refine technique and explore disciplines.",
    icon: FaHorse,
    whatYouLearn: [
      "Refined seat and position",
      "Cantering and transitions",
      "Introduction to jumping or dressage",
      "Trail riding skills",
      "Independent riding",
      "Show preparation",
    ],
    duration: "12-24 months typically",
  },
  {
    level: "Advanced",
    title: "Mastering Technique",
    description:
      "Experienced rider ready for specialized training in your chosen discipline.",
    icon: FaAward,
    whatYouLearn: [
      "Advanced movements",
      "Course or test riding",
      "Training strategies",
      "Horse conditioning",
      "Problem-solving",
      "Teaching others",
    ],
    duration: "Ongoing development",
  },
  {
    level: "Competition",
    title: "Show Ring Ready",
    description:
      "Preparing for or actively competing in shows. Intensive coaching for peak performance.",
    icon: FaTrophy,
    whatYouLearn: [
      "Competition strategy",
      "Mental preparation",
      "Show ring etiquette",
      "Performance optimization",
      "Video analysis",
      "Goal setting",
    ],
    duration: "Season-based training",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jessica Thompson",
    role: "Adult Amateur Rider",
    image: "/images/about-hero.jpg",
    quote:
      "I started as a complete beginner at 35, and the instructors at Elysium made me feel comfortable from day one. Three years later, I'm competing in local dressage shows!",
    program: "Dressage Training",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Junior Rider",
    image: "/images/about-hero.jpg",
    quote:
      "The jumping program here is amazing! My coach helped me go from cross-rails to 3-foot courses in just two years. I've won ribbons at every show this season.",
    program: "Jumping Lessons",
    rating: 5,
  },
  {
    name: "Amanda Rodriguez",
    role: "Parent",
    image: "/images/about-hero.jpg",
    quote:
      "My daughter has been taking lessons for two years and her confidence has soared. The instructors are patient, professional, and truly care about each student's progress.",
    program: "Beginner Lessons",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Competition Rider",
    image: "/images/about-hero.jpg",
    quote:
      "Training at Elysium took my riding to the next level. The competition prep program is top-notch, and I qualified for regionals within one season.",
    program: "Competition Preparation",
    rating: 5,
  },
];

export const trainingFAQs = [
  {
    question: "Do I need my own horse to take lessons?",
    answer:
      "No! We have a wonderful selection of well-trained school horses available for lessons. However, if you have your own horse, you're welcome to bring them for training (boarding required).",
  },
  {
    question: "What should I wear for my first lesson?",
    answer:
      "Wear long pants (jeans or riding breeches), closed-toe shoes with a small heel (riding boots preferred, but sturdy shoes work), and comfortable clothing. We provide ASTM-certified helmets for all riders.",
  },
  {
    question: "How long does it take to learn to ride?",
    answer:
      "Everyone progresses at their own pace! Most beginners feel comfortable at walk and trot within 6-8 lessons. Developing solid riding skills typically takes 1-2 years of consistent practice. We focus on safety and proper technique at every level.",
  },
  {
    question: "Can adults learn to ride, or is it just for kids?",
    answer:
      "Absolutely! We have riders of all ages, from children to adults in their 60s and beyond. It's never too late to start riding. We tailor our instruction to each individual's goals, fitness level, and learning style.",
  },
  {
    question: "What's the difference between private and group lessons?",
    answer:
      "Private lessons offer one-on-one instruction tailored to your specific goals. Group lessons (max 4 riders) are more affordable and great for building confidence with peers. We recommend private lessons for beginners and those preparing for competition.",
  },
  {
    question: "Do you offer trial lessons?",
    answer:
      "Yes! We offer a discounted first-time rider package ($50 for your first lesson). This includes a facility tour, safety orientation, and a full riding lesson with one of our experienced instructors.",
  },
];

export const getProgramById = (id: string): TrainingProgram | undefined =>
  trainingPrograms.find((program) => program.id === id);

export const getProgramsBySkillLevel = (level: string): TrainingProgram[] =>
  trainingPrograms.filter((program) => program.skillLevel.includes(level));
