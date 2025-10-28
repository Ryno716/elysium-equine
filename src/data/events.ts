// Event interface
export interface Event {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  endDate?: string; // For multi-day events
  time: string;
  location: string;
  category: string; // "Upcoming" or "Yearly"
  eventType: string; // "Competition", "Clinic", "Social", "Training"
  tags: string[];
  image: string;
  featured?: boolean;
  registrationUrl?: string;
  capacity?: number;
  spotsAvailable?: number;
}

// Sample events
export const events: Event[] = [
  {
    slug: "winter-showcase-2025",
    title: "Winter Showcase 2025",
    description: "Join us for our annual Winter Showcase featuring demonstrations from all our training programs, student performances, and facility tours.",
    fullDescription: `
# Winter Showcase 2025

Our annual Winter Showcase is the highlight of the season! This event brings together riders of all levels to demonstrate their skills and celebrate the progress made throughout the year.

## Event Schedule

### Morning Session (9:00 AM - 12:00 PM)
- Beginner rider demonstrations
- Ground work and liberty presentations
- Facility tours for prospective clients

### Afternoon Session (1:00 PM - 4:00 PM)
- Intermediate and advanced riding demonstrations
- Jumping exhibitions
- Award ceremony for training milestones

### Evening Reception (5:00 PM - 7:00 PM)
- Meet the trainers
- Refreshments and networking
- Q&A session about our programs

## What to Expect

- Professional demonstrations from our skilled trainers
- Student performances showcasing various disciplines
- Interactive sessions for children
- Photo opportunities with horses
- Vendor booths featuring equestrian products
- Food trucks and refreshments

## Admission

- General admission: Free
- VIP seating: $25 (includes reserved seating and refreshments)
- Children under 12: Free

## Registration

While admission is free, we ask that you register in advance to help us plan for capacity. Limited VIP seating available.
`,
    date: "December 15, 2025",
    time: "9:00 AM - 7:00 PM",
    location: "Elysium Equine Main Arena",
    category: "Upcoming",
    eventType: "Social",
    tags: ["showcase", "demonstrations", "family-friendly", "free-event"],
    image: "/images/facility.jpg",
    featured: true,
    registrationUrl: "#",
    capacity: 200,
    spotsAvailable: 87,
  },
  {
    slug: "dressage-clinic-november-2025",
    title: "Advanced Dressage Clinic with Sarah Chen",
    description: "Two-day intensive dressage clinic with internationally recognized trainer Sarah Chen. Limited spots available.",
    fullDescription: `
# Advanced Dressage Clinic with Sarah Chen

We're thrilled to host Sarah Chen, an internationally recognized dressage trainer with over 20 years of experience competing at the highest levels.

## About the Clinic

This intensive two-day clinic is designed for intermediate to advanced dressage riders looking to refine their skills and take their riding to the next level.

### Day 1: Foundation and Precision
- Proper warm-up techniques
- Developing collection and extension
- Half-halts and transitions
- Lateral movements mastery

### Day 2: Advanced Movements
- Flying changes
- Pirouettes and half-pirouettes
- Piaffe and passage introduction
- Putting it all together

## What's Included

- Two full days of instruction (6 hours per day)
- Video analysis of your rides
- Personalized feedback and training plan
- Written clinic notes
- Lunch and refreshments both days
- Certificate of completion

## Participant Requirements

- Riders must be comfortable at Second Level or above
- Horses should be sound and fit
- Current Coggins test required
- Trailer-in welcome, stabling available for additional fee

## Investment

- Riding participant: $450
- Auditor (both days): $75
- Limited to 8 riding spots

## About Sarah Chen

Sarah has represented her country in international competitions and has trained multiple Grand Prix horses. Her teaching method emphasizes classical principles with modern sport psychology.
`,
    date: "November 20, 2025",
    endDate: "November 21, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Elysium Equine Indoor Arena",
    category: "Upcoming",
    eventType: "Clinic",
    tags: ["dressage", "advanced", "clinic", "professional-development"],
    image: "/images/about2.jpg",
    featured: true,
    registrationUrl: "#",
    capacity: 8,
    spotsAvailable: 3,
  },
  {
    slug: "halloween-trail-ride-2025",
    title: "Halloween Costume Trail Ride",
    description: "Annual Halloween costume trail ride through scenic trails. Prizes for best costumes! Family-friendly event.",
    fullDescription: `
# Halloween Costume Trail Ride

Get into the Halloween spirit with our annual costume trail ride! This fun, family-friendly event welcomes riders of all ages and abilities.

## Event Details

Join us for a leisurely trail ride through our beautiful property, decorated with Halloween themes. Both horses and riders are encouraged to dress up!

### What to Expect
- Approximately 2-hour trail ride
- Professional guides leading the way
- Photo stations along the trail
- Costume contest with prizes
- Hot cider and treats after the ride
- Hayride for non-riders (free for families)

## Costume Contest Categories
- Best Horse Costume
- Best Rider Costume
- Best Horse & Rider Combo
- Most Creative Theme
- Funniest Costume

## Prizes
Winners in each category receive:
- Gift certificates to local tack shops
- Professional photo session
- Feature on our social media
- Bragging rights for a year!

## Safety Notes
- Costumes must be safe and not spook horses
- All riders must wear helmets (can be decorated!)
- Horses should be trail-safe and comfortable in groups
- Minors must be accompanied by an adult

## Registration
- Riders (bring your own horse): $35
- Lesson horses available: $55 (limited spots)
- Hayride only: Free with paid rider

Come dressed up and ready for fall fun!
`,
    date: "October 31, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Elysium Equine Trail System",
    category: "Upcoming",
    eventType: "Social",
    tags: ["trail-ride", "halloween", "costume", "family-friendly"],
    image: "/images/training.jpg",
    featured: true,
    registrationUrl: "#",
    capacity: 30,
    spotsAvailable: 12,
  },
  {
    slug: "spring-jumping-derby",
    title: "Annual Spring Jumping Derby",
    description: "Competitive jumping event with multiple divisions from ground poles to 3'6\". Open to all riders.",
    fullDescription: `
# Annual Spring Jumping Derby

Our Spring Jumping Derby returns for another exciting year! This competition welcomes jumpers of all levels with divisions designed for every skill set.

## Competition Divisions

### Ground Poles & Cross Rails
- Perfect for beginners
- Height: Ground poles to 18"
- Prize: Ribbons 1st-6th place

### 2' Division
- Beginner/Intermediate
- Course of 8-10 jumps
- Prize: Ribbons + champion prizes

### 2'6" Division
- Intermediate riders
- Technical course
- Prize: Ribbons + reserve champion prizes

### 3' Division
- Advanced intermediate
- Challenging course design
- Prize: Ribbons + cash prizes

### 3'6" Division
- Advanced riders
- Derby-style course
- Prize: Ribbons + significant cash prizes

## Schedule
- 7:00 AM - Schooling begins
- 9:00 AM - Competition starts (Ground Poles)
- 3:00 PM - Final division (3'6")
- 5:00 PM - Award ceremony

## Entry Fees
- One division: $45
- Two divisions: $75
- Three or more: $100
- Schooling fee (non-competitors): $20

## Requirements
- Current Coggins test
- Proof of liability insurance
- ASTM-approved helmet
- Pre-registration strongly encouraged

## Prizes
- Champion & Reserve in each division
- Special awards for best turned out, sportsmanship
- Cash prizes for 3' and 3'6" divisions
- Professional photos available for purchase

Join us for a day of competitive fun and excellent riding!
`,
    date: "April 15, 2026",
    time: "7:00 AM - 6:00 PM",
    location: "Elysium Equine Main Arena",
    category: "Yearly",
    eventType: "Competition",
    tags: ["jumping", "competition", "derby", "all-levels"],
    image: "/images/jumping.jpg",
    featured: false,
    registrationUrl: "#",
    capacity: 60,
    spotsAvailable: 45,
  },
  {
    slug: "summer-camp-sessions",
    title: "Summer Riding Camps",
    description: "Week-long summer camps for young riders ages 8-16. Multiple sessions available throughout the summer.",
    fullDescription: `
# Summer Riding Camps

Give your child an unforgettable summer experience with our riding camps! Designed for ages 8-16, our camps combine riding instruction with horse care education and outdoor fun.

## Camp Sessions

We offer multiple one-week sessions throughout the summer:
- Session 1: June 23-27, 2026
- Session 2: July 7-11, 2026
- Session 3: July 21-25, 2026
- Session 4: August 4-8, 2026

## Daily Schedule (9 AM - 3 PM)

### Morning
- Arrival and barn chores
- Grooming and tacking lesson
- Riding instruction (1.5 hours)
- Snack break

### Afternoon
- Horse care workshop
- Games and activities (mounted and unmounted)
- Craft time (horse-themed projects)
- Cool-down and wrap-up

## Skill Levels

### Beginner Camp
No experience necessary! Learn basic horsemanship and riding skills.

### Intermediate Camp
For riders with at least one year of experience. Focus on skill refinement.

### Advanced Camp
For experienced riders. Jumping, trail riding, and specialized instruction.

## What's Included
- 5 full days of instruction
- All equipment provided
- Snacks and drinks
- Camp t-shirt
- Friday family showcase
- End-of-week certificate

## What to Bring
- Packed lunch daily
- Water bottle
- Sunscreen
- Long pants and closed-toe shoes
- Riding helmet (can be provided)

## Cost
- $425 per week
- Sibling discount: 10% off second child
- Multi-week discount: $400/week for 2+ weeks

Limited to 12 campers per session. Register early!
`,
    date: "June 23, 2026",
    endDate: "August 8, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Elysium Equine Facility",
    category: "Yearly",
    eventType: "Training",
    tags: ["summer-camp", "youth", "education", "week-long"],
    image: "/images/facility2.jpg",
    featured: false,
    registrationUrl: "#",
  },
  {
    slug: "fall-trail-challenge",
    title: "Fall Trail Challenge",
    description: "Competitive trail obstacle course through our scenic property. Fun for all skill levels with multiple divisions.",
    fullDescription: `
# Fall Trail Challenge

Test your trail riding skills in our annual Fall Trail Challenge! This unique event combines natural trail riding with obstacle courses for an exciting day of competition.

## Event Format

Riders navigate a course featuring:
- Natural terrain challenges
- Man-made obstacles
- Timed sections
- Judged obstacles
- Optional bonus challenges

## Divisions

### Novice Division
- Walk/trot only
- Basic obstacles
- No time penalties
- Perfect for newcomers

### Open Division
- All gaits allowed
- More challenging obstacles
- Timed sections
- Experienced riders

### Extreme Division
- Advanced obstacles only
- Tight time requirements
- Water crossings
- Technical challenges

## Obstacle Examples
- Bridge crossing
- Gate opening/closing
- Backing through markers
- Side-passing
- Log jumps
- Water crossings
- Mailbox challenge
- Tarp walking

## Scoring
- Completion points
- Time bonuses
- Obstacle execution
- Sportsmanship award
- Overall champion

## Entry Information
- Pre-registration: $40
- Day-of registration: $50
- Practice course open week before (free)
- Schooling day available ($15)

## Requirements
- Trail-safe horse
- Current Coggins
- Helmet required
- Boots recommended

## Awards
- Champion & Reserve each division
- Special prizes for perfect scores
- Raffle prizes for all participants
- Professional photos available

Bring your trail partner and test your skills!
`,
    date: "September 20, 2026",
    time: "8:00 AM - 4:00 PM",
    location: "Elysium Equine Trail System",
    category: "Yearly",
    eventType: "Competition",
    tags: ["trail", "obstacles", "competition", "outdoor"],
    image: "/images/about1.jpg",
    featured: false,
    registrationUrl: "#",
  },
];

// Helper functions
export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function getFeaturedEvents(): Event[] {
  return events.filter((event) => event.featured);
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.category === "Upcoming");
}

export function getYearlyEvents(): Event[] {
  return events.filter((event) => event.category === "Yearly");
}

export function getEventsByType(eventType: string): Event[] {
  return events.filter((event) => event.eventType === eventType);
}

export function getAllEventTypes(): string[] {
  const types = events.map((event) => event.eventType);
  return Array.from(new Set(types));
}

export function getRecentEvents(count: number = 3): Event[] {
  return events.slice(0, count);
}
