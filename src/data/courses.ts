export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price: string;
  rating: number;
  students: number;
  duration: string;
  category: string;
  modules: {
    title: string;
    lessons: string[];
  }[];
  whatYouLearn: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const courses: Course[] = [
  {
    id: "productivity-mastery",
    title: "Productivity Mastery",
    description: "Learn proven techniques to boost your productivity and achieve more in less time.",
    fullDescription: "Master the art of productivity with this comprehensive course. Learn time management, goal setting, and effective work strategies that will transform your daily routine.",
    image: "/src/assets/course-1.jpg",
    price: "NPR 2,999",
    rating: 4.8,
    students: 1250,
    duration: "6 weeks",
    category: "Productivity",
    modules: [
      {
        title: "Introduction to Productivity",
        lessons: [
          "Understanding Productivity",
          "Common Productivity Myths",
          "Setting Your Goals"
        ]
      },
      {
        title: "Time Management Techniques",
        lessons: [
          "The Pomodoro Technique",
          "Time Blocking",
          "Priority Matrix"
        ]
      },
      {
        title: "Building Productive Habits",
        lessons: [
          "Morning Routines",
          "Evening Wind-down",
          "Habit Stacking"
        ]
      }
    ],
    whatYouLearn: [
      "Effective time management strategies",
      "How to prioritize tasks and goals",
      "Building sustainable productive habits",
      "Overcoming procrastination",
      "Tools and systems for maximum efficiency"
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes! This course is designed for anyone looking to improve their productivity, regardless of their current level."
      },
      {
        question: "How long do I have access to the course?",
        answer: "You get lifetime access to all course materials and future updates."
      },
      {
        question: "Are there any prerequisites?",
        answer: "No prerequisites required. Just bring your willingness to learn and improve!"
      }
    ]
  },
  {
    id: "time-management-pro",
    title: "Time Management Pro",
    description: "Master time management skills to balance work, life, and personal goals effectively.",
    fullDescription: "Become a time management expert. This course teaches you how to make every minute count and achieve work-life balance.",
    image: "/src/assets/course-2.jpg",
    price: "NPR 3,499",
    rating: 4.9,
    students: 890,
    duration: "4 weeks",
    category: "Time Management",
    modules: [
      {
        title: "Time Management Fundamentals",
        lessons: [
          "Identifying Time Wasters",
          "Creating Your Schedule",
          "Setting Boundaries"
        ]
      },
      {
        title: "Advanced Planning",
        lessons: [
          "Weekly Planning System",
          "Monthly Goal Setting",
          "Annual Vision Planning"
        ]
      }
    ],
    whatYouLearn: [
      "Create effective daily schedules",
      "Eliminate time-wasting activities",
      "Balance multiple responsibilities",
      "Set and achieve realistic deadlines",
      "Maintain work-life harmony"
    ],
    faqs: [
      {
        question: "Will this help with work-life balance?",
        answer: "Absolutely! Work-life balance is a core focus of this course."
      },
      {
        question: "Can I apply these techniques immediately?",
        answer: "Yes, you'll learn actionable strategies you can implement right away."
      }
    ]
  },
  {
    id: "personal-growth",
    title: "Personal Growth & Development",
    description: "Transform your mindset and unlock your full potential with proven personal development strategies.",
    fullDescription: "Embark on a journey of self-discovery and growth. Learn how to overcome limiting beliefs, build confidence, and create the life you desire.",
    image: "/src/assets/course-3.jpg",
    price: "NPR 3,999",
    rating: 4.7,
    students: 1450,
    duration: "8 weeks",
    category: "Personal Development",
    modules: [
      {
        title: "Mindset Mastery",
        lessons: [
          "Fixed vs Growth Mindset",
          "Overcoming Limiting Beliefs",
          "Building Self-Confidence"
        ]
      },
      {
        title: "Goal Achievement",
        lessons: [
          "SMART Goal Setting",
          "Creating Action Plans",
          "Staying Motivated"
        ]
      },
      {
        title: "Building Better Habits",
        lessons: [
          "The Science of Habits",
          "Breaking Bad Habits",
          "Creating Lasting Change"
        ]
      }
    ],
    whatYouLearn: [
      "Develop a growth mindset",
      "Set and achieve meaningful goals",
      "Build unshakeable confidence",
      "Create powerful daily habits",
      "Overcome fear and self-doubt"
    ],
    faqs: [
      {
        question: "How is this different from other personal development courses?",
        answer: "This course focuses on practical, actionable strategies based on proven psychological principles."
      },
      {
        question: "Will I get personalized feedback?",
        answer: "Yes, you'll have access to community support and Q&A sessions."
      }
    ]
  }
];
