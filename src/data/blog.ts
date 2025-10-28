// Blog post interface
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
  {
    slug: "essential-horse-care-tips-winter",
    title: "Essential Horse Care Tips for Winter",
    excerpt: "As winter approaches, learn how to keep your horse healthy, comfortable, and safe during the cold months with these expert tips.",
    content: `
# Essential Horse Care Tips for Winter

Winter can be a challenging time for horse owners. The cold weather, shorter days, and harsh conditions require special attention to ensure your horse stays healthy and happy.

## 1. Proper Shelter and Bedding

Your horse needs access to a dry, draft-free shelter. Make sure to:
- Provide plenty of clean, dry bedding
- Check for leaks in the roof
- Ensure proper ventilation without drafts
- Remove wet bedding daily to prevent respiratory issues

## 2. Nutrition and Hydration

Winter requires extra calories to maintain body temperature:
- Increase hay portions (hay produces heat during digestion)
- Ensure water doesn't freeze - use heated buckets
- Monitor body condition regularly
- Consider adding beet pulp for extra fiber

## 3. Blanketing Guidelines

Not all horses need blankets:
- Assess your horse's coat, body condition, and shelter
- Use appropriate weights for temperature
- Check fit regularly to prevent rubbing
- Remove and check daily for moisture

## 4. Hoof Care

Winter conditions can be tough on hooves:
- Pick hooves daily to prevent ice buildup
- Consider using hoof grease in wet conditions
- Maintain regular farrier visits
- Watch for thrush in damp conditions

## 5. Exercise and Mental Health

Don't let cold weather stop your routine:
- Continue regular exercise when safe
- Adapt riding schedule to daylight hours
- Provide mental stimulation with toys
- Turnout is still important when conditions allow

Remember, every horse is different. Work with your veterinarian to create a winter care plan specific to your horse's needs.
`,
    author: "Dr. Sarah Mitchell",
    date: "October 15, 2025",
    readTime: "5 min read",
    category: "Horse Care",
    tags: ["winter care", "horse health", "seasonal tips"],
    image: "/images/about2.jpg",
    featured: true,
  },
  {
    slug: "beginners-guide-horse-riding",
    title: "A Beginner's Guide to Horse Riding",
    excerpt: "Starting your equestrian journey? This comprehensive guide covers everything you need to know about learning to ride horses.",
    content: `
# A Beginner's Guide to Horse Riding

Starting your journey into the world of horses can be both exciting and intimidating. This guide will help you take your first steps with confidence.

## Getting Started

### What to Wear
- Long pants (preferably riding breeches or jeans)
- Boots with a small heel (riding boots or paddock boots)
- ASTM-approved riding helmet (required!)
- Comfortable shirt
- Gloves (optional but recommended)

### Finding the Right Instructor
Look for certified instructors with:
- Good reputation and references
- Patient teaching style
- Safe, well-maintained facilities
- Beginner-friendly horses

## Your First Lesson

### What to Expect
1. Introduction to your horse
2. Grooming and tacking up
3. Basic mounting and dismounting
4. Understanding rein and leg aids
5. Walking exercises

### Safety First
- Always listen to your instructor
- Stay calm around horses
- Approach from the side, never from behind
- Keep a safe distance from other horses

## Building Skills

As you progress, you'll learn:
- Different gaits (walk, trot, canter)
- Proper posture and balance
- Communication with your horse
- Basic horse care

## Common Mistakes to Avoid
- Gripping with your knees
- Looking down instead of ahead
- Holding your breath
- Being too tense

Remember, everyone starts as a beginner. Be patient with yourself and enjoy the journey!
`,
    author: "Emma Thompson",
    date: "October 10, 2025",
    readTime: "7 min read",
    category: "Training",
    tags: ["beginners", "riding lessons", "getting started"],
    image: "/images/training.jpg",
    featured: true,
  },
  {
    slug: "understanding-horse-body-language",
    title: "Understanding Horse Body Language",
    excerpt: "Learn to read your horse's emotions and intentions through their body language. A crucial skill for every rider and horse owner.",
    content: `
# Understanding Horse Body Language

Horses are incredibly expressive animals. Learning to read their body language is essential for safety and building a strong partnership.

## Ears

The position of a horse's ears tells you a lot:
- **Forward**: Alert, interested, curious
- **To the side**: Relaxed, at ease
- **Pinned back**: Angry, aggressive, or in pain
- **Rotating**: Listening to surroundings

## Eyes

Watch for these signs:
- **Soft eye**: Relaxed and content
- **Wide eye with white showing**: Fear or alarm
- **Half-closed**: Sleepy or relaxed
- **Hard stare**: Focus, possibly tension

## Tail

Tail movements indicate mood:
- **Swishing**: Irritation, flies, or excitement
- **Clamped down**: Fear or discomfort
- **Raised high**: Alert, excited, or showing off
- **Relaxed swing**: Content and relaxed

## Head and Neck

Position matters:
- **Head high**: Alert, possibly worried
- **Head low**: Relaxed, submissive, or tired
- **Stretched forward**: Curiosity
- **Tucked in**: Evasion or discomfort

## Body Posture

Overall stance tells the story:
- **Weight on one hip**: Resting
- **Tense muscles**: Alert or worried
- **Pawing ground**: Impatience or discomfort
- **Rolling**: Content and playful

## Putting It All Together

Reading body language requires looking at the whole picture. Context matters - the same signal can mean different things in different situations.

Practice observing horses regularly to become fluent in their language. It will make you a better, safer horse person.
`,
    author: "Michael Rodriguez",
    date: "October 5, 2025",
    readTime: "6 min read",
    category: "Horse Care",
    tags: ["behavior", "horse psychology", "communication"],
    image: "/images/facility2.jpg",
    featured: false,
  },
  {
    slug: "benefits-professional-horse-training",
    title: "The Benefits of Professional Horse Training",
    excerpt: "Discover why professional training is an investment in your horse's future and your partnership together.",
    content: `
# The Benefits of Professional Horse Training

Investing in professional horse training pays dividends in safety, performance, and the quality of your partnership with your horse.

## Why Professional Training Matters

### Safety First
- Professionals identify and address dangerous behaviors
- Establish clear boundaries and respect
- Reduce risk of injuries to both horse and rider
- Create predictable, trustworthy responses

### Solid Foundation
- Proper groundwork and desensitization
- Correct biomechanics from the start
- Prevention of bad habits
- Age-appropriate training progression

## What Professional Trainers Provide

### Expertise and Experience
- Years of working with various horses
- Understanding of different breeds and temperaments
- Problem-solving skills for behavioral issues
- Knowledge of competition requirements

### Customized Programs
- Tailored to your horse's personality
- Specific to your riding goals
- Flexible based on progress
- Consideration of physical limitations

## Common Training Areas

### Basic Training
- Leading and ground manners
- Trailer loading
- Standing for grooming and vet care
- Basic riding cues

### Advanced Training
- Discipline-specific skills (dressage, jumping, etc.)
- Competition preparation
- Problem behavior correction
- Performance refinement

## Choosing the Right Trainer

Look for:
- Certifications and credentials
- Positive references
- Clear communication
- Methods that align with your values
- Facility safety and quality

## The Investment

While professional training requires financial investment, consider:
- Prevention of costly behavioral problems
- Reduced injury risk
- Faster progress toward goals
- Long-term value in your horse's education

Your horse's education is a foundation for years of partnership. Choose wisely and invest well.
`,
    author: "Alexandra Hunt",
    date: "September 28, 2025",
    readTime: "8 min read",
    category: "Training",
    tags: ["professional training", "horse education", "investment"],
    image: "/images/jumping.jpg",
    featured: false,
  },
];

// Helper functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}
