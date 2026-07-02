import feedbackPreview from "../assets/projectImgs/feedbackSys2.png";
import feedbackScreenOne from "../assets/projectImgs/feedbackSys1.png";
import feedbackScreenFour from "../assets/projectImgs/feedbackSys4.png";
import coffeePreview from "../assets/projectImgs/coffeeSpot.png";
import coffeeScreenOne from "../assets/projectImgs/homeCoffee.png";
import coffeeScreenTwo from "../assets/projectImgs/logoCoffee.png";
import mediAidPreview from "../assets/projectImgs/mediAid.png";
import mediAidScreenTwo from "../assets/projectImgs/mediAid2.png";
import uniMartPreview from "../assets/projectImgs/uniMart6.jpeg";
import uniMartScreenOne from "../assets/projectImgs/uniMart1.jpeg";
import uniMartScreenTwo from "../assets/projectImgs/uniMart3.jpeg";
import uniMartScreenThree from "../assets/projectImgs/uniMart4.jpeg";

export const heroRotations = [
  "Building polished interfaces",
  "Designing mobile-first experiences",
  "Connecting frontend and backend",
  "Shipping practical products",
];

export const aboutBullets = [
  "Developing thoughtful web and mobile products with a strong product mindset",
  "Building interfaces in React and React Native that feel clear and modern",
  "Working across frontend, APIs, and data models with Node.js and MongoDB",
  "Turning ideas into tested, user-friendly flows with structured code and design",
  "Creating portfolio work that reflects real product thinking, not just demos",
];

export const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Interfaces that feel polished, responsive, and easy to use",
    items: [
      { name: "React.js", progress: 96 },
      { name: "React Native", progress: 92 },
      { name: "JavaScript", progress: 94 },
      { name: "HTML", progress: 98 },
      { name: "CSS", progress: 96 },
      { name: "Tailwind CSS", progress: 88 },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, auth flows, and data handling that support real usage",
    items: [
      { name: "Node.js", progress: 93 },
      { name: "Express.js", progress: 90 },
      { name: "MongoDB", progress: 91 },
      { name: "SQL", progress: 86 },
      { name: "REST APIs", progress: 95 },
    ],
  },
  {
    title: "Tools",
    subtitle: "A workflow that supports clean iteration and collaboration",
    items: [
      { name: "Git", progress: 95 },
      { name: "GitHub", progress: 95 },
      { name: "VS Code", progress: 98 },
      { name: "Android Studio", progress: 90 },
      { name: "Postman", progress: 92 },
    ],
  },
];

export const projects = [
  {
    title: "Student Feedback System",
    description:
      "A role-based feedback portal for students and admins with clear navigation, structured review flows, and progress tracking across each stage.",
    stack: ["React", "Node.js", "MongoDB"],
    accent: "sky",
    image: feedbackPreview,
    imageAlt: "Student feedback system dashboard",
    badge: "Education platform",
    category: "Academic product",
    outcome: "Simplified feedback collection for staff and students",
    previewShots: [
      {
        src: feedbackScreenOne,
        alt: "Student feedback system access screen",
      },
      {
        src: feedbackScreenFour,
        alt: "Student feedback system admin editor screen",
      },
    ],
    highlights: [
      "Role-based entry for students and admins",
      "Guided feedback flow with progress cues",
      "Dashboard-first experience with polished UI",
    ],
    githubUrl: "https://github.com/SandeepKaur84/Student-Feedback-System",
  },
  {
    title: "CoffeeSpot App",
    description:
      "A dark-themed React Native experience for exploring drinks, selecting sizes, and moving through the cart flow quickly and comfortably.",
    stack: ["React Native", "Mobile UI", "Node.js"],
    accent: "ember",
    image: coffeePreview,
    imageAlt: "CoffeeSpot mobile app preview",
    badge: "Mobile commerce",
    imageFit: "contain",
    category: "Mobile experience",
    outcome: "Fast shopping flow designed for coffee lovers",
    previewShots: [
      {
        src: coffeeScreenOne,
        alt: "CoffeeSpot home screen",
      },
      {
        src: coffeeScreenTwo,
        alt: "CoffeeSpot logo screen",
      },
    ],
    highlights: [
      "Polished dark UI built for phones",
      "Coffee browsing and size-based ordering",
      "Cart flow designed for quick checkout",
    ],
    githubUrl: "https://github.com/SandeepKaur84/CoffeeSpot-App-",
  },
  {
    title: "MediAid",
    description:
      "A healthcare-focused interface for appointment booking and doctor discovery, shaped around clarity, trust, and ease of use.",
    stack: ["React", "Healthcare UI", "Responsive Design"],
    accent: "mint",
    image: mediAidPreview,
    imageAlt: "MediAid healthcare landing page",
    badge: "Healthcare platform",
    category: "Service platform",
    outcome: "Calm, reassuring experience for patient-facing tasks",
    previewShots: [
      {
        src: mediAidScreenTwo,
        alt: "MediAid doctor detail and appointment screen",
      },
    ],
    highlights: [
      "Doctor discovery and appointment entry points",
      "Trust-first layout with clear actions",
      "Responsive layout that scales smoothly on mobile",
    ],
    githubUrl: "https://github.com/SandeepKaur84/MediAid",
  },
  // {
  //   title: "UniMart",
  //   description:
  //     "A university marketplace concept for verified students to sign up, browse support pages, and buy, sell, or trade items inside a trusted campus community.",
  //   stack: ["React Native", "UI Design", "Student Marketplace"],
  //   accent: "sand",
  //   image: uniMartPreview,
  //   imageAlt: "UniMart logo splash screen",
  //   badge: "Campus marketplace",
  //   imageFit: "contain",
  //   previewSize: "compact",
  //   category: "Community app",
  //   outcome: "Trusted student exchange experience for campus life",
  //   previewShots: [
  //     {
  //       src: uniMartScreenOne,
  //       alt: "UniMart create account screen",
  //     },
  //     {
  //       src: uniMartScreenThree,
  //       alt: "UniMart product listing screen",
  //     },
  //   ],
  //   highlights: [
  //     "Verified student community onboarding",
  //     "Marketplace concept for campus buying and selling",
  //     "Simple mobile-first experience for quick access",
  //   ],
  //   githubUrl: "https://github.com/SandeepKaur84/UniMart",
  // },
];
