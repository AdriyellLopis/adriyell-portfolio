// ✏️ EDIT THIS FILE to update your content. Anything in [BRACKETS] is a placeholder.
export const profile = {
  name: "Adriyell Lopis",
  title: "IT Professional | Network Management | Digital Associate",
  intro: "IT professional with a Diploma in IT specialising in Network Management, practical experience in IT functional support, and a growing interest in Artificial Intelligence and emerging technologies.",
  tagline: "Building a career in Network Management while exploring the possibilities of AI.",
  email: "lopisadriyell@gmail.com",
  linkedin: "[LINKEDIN URL]",
  github: "[GITHUB URL]",
  cv: "/cv/my-cv.pdf",
  location: "Johannesburg, South Africa",
};
export const isPlaceholder = (v: string) => v.startsWith("[");

export const nav = [
  ["home", "Home"], ["about", "About"], ["focus", "Career Focus"], ["experience", "Experience"], ["skills", "Skills"],
  ["projects", "Projects"], ["education", "Education"], ["certifications", "Certifications"], ["cv", "CV"], ["contact", "Contact"],
] as const;

export const about = [
  "I am an IT professional with a Diploma in IT specialising in Network Management and practical experience in IT functional support. My primary career interest is Network Management and IT infrastructure, where I am interested in developing my skills in networking, troubleshooting, systems and technical support.",
  "I am currently expanding my technology knowledge as a Digital Associate through the CAPACITI programme, gaining practical exposure to digital technologies, Artificial Intelligence, Generative AI, chatbots and technology-focused projects.",
  "While Network Management remains my main career focus, I am actively exploring AI to understand how emerging technologies can complement traditional IT infrastructure and create new opportunities.",
];

export const focus = [
  { title: "Network Management", primary: true, icon: "Network", text: "Primary career interest focused on networking, infrastructure, troubleshooting and network support." },
  { title: "IT Infrastructure", primary: false, icon: "Server", text: "Interested in understanding how networks, systems and infrastructure work together to support organisations." },
  { title: "Artificial Intelligence", primary: false, icon: "Sparkles", text: "An emerging field I am actively exploring through AI projects, Generative AI, prompt engineering and chatbot development." },
];

export const journey = ["Diploma in IT – Network Management", "IT Functional Support – Gijima", "Digital Associate – CAPACITI", "Network Management & IT Infrastructure + Exploring AI", "Future IT Career"];

export const experience = [
  {
    role: "Digital Associate", org: "CAPACITI", period: "12-Month Programme · 2026–2027", current: true,
    text: "Participating in a 12-month digital skills and workplace development programme focused on building practical experience in technology, digital transformation, artificial intelligence and professional development.",
    points: [
      "Developing practical digital and technology skills through hands-on projects.",
      "Building and documenting AI and chatbot projects.",
      "Using Generative AI tools to improve productivity and solve problems.",
      "Developing a professional portfolio and GitHub projects.",
      "Collaborating with team members on technology-focused projects.",
      "Strengthening communication, teamwork, problem-solving and time-management skills.",
      "Participating in workplace readiness and professional development activities.",
      "Applying IT knowledge to real-world technology challenges.",
    ],
  },
  {
    role: "IT Functional Support", org: "Gijima", period: "2025", current: false,
    text: "Provided functional support for a digital patient file system used within government hospitals, assisting with system implementation, user support, troubleshooting and training.",
    points: ["Functional system support", "User support", "System implementation", "User training", "Troubleshooting", "Problem solving", "Digital system support"],
  },
];

export const skills = [
  { title: "Core IT & Networking", items: ["Network Management", "Network Administration", "IT Support", "Functional Support", "Troubleshooting", "IT Infrastructure", "System Implementation", "User Support", "Networking Fundamentals"] },
  { title: "Cybersecurity", items: ["Cybersecurity Fundamentals", "Fortinet", "Security Awareness", "Network Security Fundamentals"] },
  { title: "Exploring AI", items: ["Artificial Intelligence", "Generative AI", "Prompt Engineering", "AI Chatbots", "AI Productivity Tools", "AI Automation", "Digital Transformation"] },
  { title: "Professional Skills", items: ["Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Adaptability", "Time Management", "Collaboration", "Continuous Learning"] },
];

// ➕ To add a project, copy one object below. `image` is optional (e.g. "/images/projects/foo.png").
export type Project = {
  title: string; description: string; problem: string; solution: string; tech: string[];
  contribution: string; github: string; demo: string; image?: string;
};
export const projects: Project[] = [
  {
    title: "AI CareerBuddy Chatbot",
    description: "An AI-powered career assistant designed to help users with career guidance, CV support, interview preparation and professional development.",
    problem: "[Describe the problem this project addresses]",
    solution: "A chatbot that uses Generative AI and prompt engineering to give career guidance, CV support and interview preparation.",
    tech: ["AI", "Generative AI", "Prompt Engineering", "Chatbot Development", "Web Development", "GitHub"],
    contribution: "[Describe your contribution]", github: "[GITHUB URL]", demo: "[LIVE DEMO URL]",
  },
  {
    title: "AI Content Generator",
    description: "An AI productivity project exploring content generation and AI-assisted workflows.",
    problem: "[Describe the problem this project addresses]",
    solution: "A content generation tool with a prompt library for producing blogs, emails and more.",
    tech: ["Generative AI", "Prompt Engineering", "AI Productivity Tools", "Web Development"],
    contribution: "[Describe your contribution]", github: "[GITHUB URL]", demo: "[LIVE DEMO URL]",
  },
  {
    title: "Personal Portfolio Website",
    description: "A professional portfolio built to showcase my IT experience, projects, education, certifications and professional development.",
    problem: "[Describe the problem this project addresses]",
    solution: "A responsive, accessible portfolio built with Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    contribution: "[Describe your contribution]", github: "[GITHUB URL]", demo: "[LIVE DEMO URL]",
  },
];

export const education = [
  { qualification: "Diploma in IT – Network Management", institution: "IIE Rosebank College", year: "2022–2024", text: "Diploma in Information Technology specialising in Network Management." },
  { qualification: "[Dynamic DNA / relevant IT programme]", institution: "[Institution]", year: "[Year]", text: "[Short description]" },
  { qualification: "Matric (National Senior Certificate)", institution: "St Barnabas College", year: "2017–2021", text: "" },
];

export const certifications = [
  { name: "Fortinet Certified Associate in Cybersecurity", issuer: "Fortinet" },
  { name: "Fortinet Certified Fundamentals in Cybersecurity", issuer: "Fortinet" },
];
