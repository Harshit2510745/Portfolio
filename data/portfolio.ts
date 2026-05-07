import type { Achievement, Experience, Project, SkillCategory } from "@/types";

export const profile = {
  name: "Harshit Aggarwal",
  location: "Mohali, Punjab, India",
  title: "Frontend Engineer • Full Stack Developer • AI Enthusiast",
  email: "harshitsolan2006@gmail.com",
  phone: "+91-7018791991",
  github: "https://github.com/Harshit2510745",
  linkedin: "https://linkedin.com/in/harshit-aggarwal-2a9044382",
  summary:
    "I’m a frontend-focused full stack developer passionate about building immersive, responsive, and high-performance digital experiences.\n\nI specialize in modern React ecosystems, interactive UI systems, and visually polished web applications that combine engineering precision with thoughtful user experience.\n\nCurrently pursuing Computer Science Engineering at Chandigarh University while continuously building real-world projects focused on scalability, motion design, and frontend architecture.",
  heroDescription:
    "Building immersive, high-performance digital experiences through modern frontend engineering, cinematic UI systems, and scalable full stack development."
};

export const roles = [
  "Frontend Engineer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Creative Technologist"
];

export const projects: Project[] = [
  {
    id: "real-time-chat",
    title: "Real-Time Chat Platform",
    description:
      "Designed and developed a scalable real-time messaging platform focused on seamless communication, responsive interaction systems, and intuitive user experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time messaging",
      "Typing indicators",
      "Message delivery states",
      "Responsive UI system",
      "Smooth animated transitions"
    ],
    github: "https://github.com/Harshit2510745",
    live: "https://chat-application-mern-omega.vercel.app",
    preview: {
      hero: "/preview-chat.mp4",
      gallery: ["/preview-chat-1.png", "/preview-chat-2.png"],
      longDescription:
        "A large-scale real-time chat system demonstrating WebSocket architecture, optimized rendering, and accessible conversational UI.",
      tags: ["Realtime", "Socket.io", "Scalable"]
    }
  },
  {
    id: "atmos-weather",
    title: "Atmos — Weather Intelligence Dashboard",
    description:
      "A modern weather visualization platform designed around clean information hierarchy, accessibility, and dynamic API-driven experiences.",
    tech: ["JavaScript", "REST APIs", "Responsive UI"],
    features: [
      "Dynamic weather visualization",
      "Responsive dashboard layout",
      "Elegant data presentation",
      "Optimized UI states",
      "Modern visual system"
    ],
    github: "https://github.com/Harshit2510745",
    live: "https://example.com"
  },
  {
    id: "hospital-workflow",
    title: "Hospital Workflow Management",
    description:
      "A healthcare workflow platform focused on appointment scheduling, patient management, and intuitive administrative interfaces.",
    tech: ["JavaScript", "MySQL", "Responsive Interface"],
    features: [
      "Modular workflow system",
      "Patient record management",
      "Scheduling interface",
      "Role-based UI architecture",
      "Responsive layout"
    ],
    github: "https://github.com/Harshit2510745",
    live: "https://example.com"
  }
];

export const skills: SkillCategory[] = [
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP"
    ]
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Linux", "Postman"]
  },
  {
    name: "Core Expertise",
    items: [
      "Interactive UI Engineering",
      "Responsive Systems",
      "Real-Time Applications",
      "Performance Optimization",
      "Component Architecture"
    ]
  }
];

export const experiences: Experience[] = [
  {
    title: "Bachelor of Engineering — Computer Science & Engineering",
    org: "Chandigarh University",
    period: "2023 – 2027",
    highlights: [
      "Focused on frontend engineering, interaction design, and product usability.",
      "Building real-world projects centered on scalability and motion systems.",
      "Exploring AI-assisted interfaces and full stack performance optimization."
    ]
  }
];

export const certifications = [
  "HTML, CSS, and JavaScript for Web Developers — Coursera",
  "Full Stack Software Developer Professional Certificate — IBM",
  "Full Stack Web Development Certification — freeCodeCamp"
];

export const achievements: Achievement[] = [
  {
    id: "kickboxing",
    title: "State-Level Kickboxing Champion",
    metric: 1,
    label: "Title"
  },
  {
    id: "badminton",
    title: "State-Level Badminton Representative",
    metric: 2,
    label: "Selections"
  },
  {
    id: "imo",
    title: "IMO Level 2 Qualifier",
    metric: 1,
    label: "Qualifier"
  }
];

export const timeline = [
  {
    year: "2023",
    title: "Started CS Journey",
    description:
      "Began my B.Tech in Computer Science at Chandigarh University. Learned programming fundamentals and wrote my first programs in C/C++. Developed a strong interest in problem-solving and core computer science concepts.",
    tags: ["DSA Foundations", "University Learning"]
  },
  {
    year: "2024",
    title: "Exploring Development",
    description:
      "Started exploring web development and DSA more seriously. Built small projects, practiced coding platforms, and learned how real-world applications are structured. Gained hands-on experience with frontend and backend basics.",
    tags: ["Web Development", "Problem Solving"]
  },
  {
    year: "2025",
    title: "Projects & AI Focus",
    description:
      "Shifted focus toward AI and full-stack projects. Built portfolio-worthy applications including a real-time chat platform, weather dashboard, and hospital workflow system. Developed skills in React, Node.js, and MongoDB.",
    tags: ["Full Stack", "AI Integration", "React"]
  },
  {
    year: "2026",
    title: "Engineering at Scale",
    description:
      "Building production-grade systems with emphasis on performance, scalability, and cinematic UI design. Pursuing advanced frontend engineering with motion design and interactive experiences.",
    tags: ["Production Systems", "Motion Design", "Scale"]
  }
];

