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
  "React Native Developer",
  "Node.js Developer",
  "JavaScript Developer",
  "Problem Solver",
];

export const aboutBullets = [
  "Aspiring software developer with a strong academic foundation",
  "React.js and React Native for practical interfaces",
  "Node.js, Express.js, MongoDB, and SQL for backend work",
  "Java and Android Studio experience from mobile app work",
  "Real-world projects with clean UI and useful workflows",
];

export const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Interfaces with clarity and restraint",
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
    subtitle: "APIs, auth flows, and data handling",
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
    subtitle: "Production workflow and collaboration",
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
      "A role-based feedback portal for students and admins with clean navigation, structured review flows, and progress tracking across feedback steps.",
    stack: ["React", "Node.js", "MongoDB"],
    accent: "sky",
    image: feedbackPreview,
    imageAlt: "Student feedback system dashboard",
    badge: "Education platform",
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
      "Dashboard-first interface with soft gradients",
    ],
    githubUrl: "https://github.com/SandeepKaur84/Student-Feedback-System",
  },
  {
    title: "CoffeeSpot App",
    description:
      "A dark-themed React Native coffee app for browsing drinks and beans, selecting sizes, and moving through the cart experience quickly.",
    stack: ["React Native", "Mobile UI", "Node.js"],
    accent: "ember",
    image: coffeePreview,
    imageAlt: "CoffeeSpot mobile app preview",
    badge: "Mobile commerce",
    imageFit: "contain",
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
      "A healthcare platform focused on appointment booking, doctor discovery, and a reassuring visual hierarchy that keeps the experience clear.",
    stack: ["React", "Healthcare UI", "Responsive Design"],
    accent: "mint",
    image: mediAidPreview,
    imageAlt: "MediAid healthcare landing page",
    badge: "Healthcare platform",
    previewShots: [
      {
        src: mediAidScreenTwo,
        alt: "MediAid doctor detail and appointment screen",
      },
    ],
    highlights: [
      "Doctor discovery and appointment entry points",
      "Calm, trust-first layout with clear actions",
      "Desktop screen that scales cleanly on mobile",
    ],
    githubUrl: "https://github.com/SandeepKaur84/MediAid",
  },
  {
    title: "UniMart",
    description:
      "A university marketplace app for verified students to sign up, browse support pages, and buy, sell, or trade items inside a trusted campus community.",
    stack: ["React Native", "UI Design", "Student Marketplace"],
    accent: "sand",
    image: uniMartPreview,
    imageAlt: "UniMart logo splash screen",
    badge: "Campus marketplace",
    imageFit: "contain",
    previewSize: "compact",
    previewShots: [
      {
        src: uniMartScreenOne,
        alt: "UniMart create account screen",
      },
      {
        src: uniMartScreenTwo,
        alt: "UniMart profile screen",
      },
      {
        src: uniMartScreenThree,
        alt: "UniMart product listing screen",
      },
    ],
    highlights: [
      "Verified student community onboarding",
      "Marketplace concept for campus buying and selling",
      "Simple mobile-first experience for quick access",
    ],
    githubUrl: "https://github.com/SandeepKaur84/UniMart",
  },
];
