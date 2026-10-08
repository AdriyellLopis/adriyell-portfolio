// ✏️ EDIT THIS FILE to update your content. Anything in [BRACKETS] is a placeholder.
export const profile = {
  name: "Adriyell Lopis",
  title: "IT Professional | Network Management | Digital Associate",
  intro: "IT professional with a Diploma in IT specialising in Network Management, practical experience in IT functional support, and a growing interest in Artificial Intelligence and emerging technologies.",
  tagline: "Building a career in Network Management while exploring the possibilities of AI.",
  email: "lopisadriyell@gmail.com",
  linkedin: "https://www.linkedin.com/in/adriyell-lopis-563921337",
  github: "https://github.com/AdriyellLopis",
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

// ➕ Projects
export type Project = {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  contribution: string;
  github: string;
  demo: string;
  image?: string;
};

export const projects: Project[] = [
  title: "Review Radar: Sentiment Analysis Dashboard",
    description: "A Python dashboard that analyses real Amazon phone-accessory reviews, shows what customers like and complain about, and checks its own accuracy.",
    problem: "Businesses receive far more customer reviews than anyone can read, so it is hard to see which parts of a product customers like and which cause complaints.",
    solution: "A Python dashboard that classifies each review as positive, neutral or negative, groups reviews by topic (battery, sound, comfort and build, price, service) and compares its answers with human labels. In my analysis, battery and charging drew the most complaints (75% negative) and the tool scored 75.8% accuracy on reviews it had never been tuned on.",
    tech: ["Sentiment Analysis", "NLP", "Python", "Streamlit", "Data Visualisation", "GitHub"],
    contribution: "Chose a real public dataset, built the sentiment engine and Streamlit dashboard with AI assistance, tested it against human labels using a train and test split, wrote the data insights report and technical explanation, and deployed it on Streamlit Community Cloud through GitHub.",
    github: "https://github.com/AdriyellLopis/review-radar-dashboard",
    demo: "https://review-radar-dashb.streamlit.app/", // 
  },

  // AI Content Generator
  {
    title: "AI Content Generator",
    description:
      "An AI productivity project exploring content generation and AI-assisted workflows.",
    problem:
      "Writing emails, blog posts and other content from scratch is time-consuming, and getting useful results from AI tools depends on knowing how to write good prompts.",
    solution:
      "A content generation tool with a prompt library for producing blogs, emails and more.",
    contribution:
      "Designed the tool's purpose and prompt library, built and tested the web interface, and deployed the project on Vercel as part of my CAPACITI programme.",
    tech: [
      "Generative AI",
      "Prompt Engineering",
      "AI Productivity Tools",
      "Web Development",
    ],
    github:
      "https://github.com/AdriyellLopis/promptforge-ai-content-generator",
    demo:
      "https://promptforge-ai-content-generator.vercel.app/",
  },

  // Personal Portfolio Website
  {
    title: "Personal Portfolio Website",
    description:
      "A professional portfolio built to showcase my IT experience, projects, education, certifications and professional development.",
       problem:
      "A CV alone is a limited way to show skills to employers, and there was no single place that brought my experience, projects, certifications and contact details together.",
    solution:
      "A responsive, accessible portfolio built with Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
    contribution:
      "Defined the content, design direction and structure, added my own CV, projects and certifications, and deployed it through GitHub and Vercel.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Vercel",
    ],
    github:
      "https://github.com/AdriyellLopis/adriyell-portfolio",
    demo:
      "https://adriyell-portfolio.vercel.app/",
  },

  // CareerFit: AI Career Assistant
  {
    title: "CareerFit: AI Career Assistant",
    description:
      "An AI career assistant that compares your CV with a job description to give a match score, missing keywords, interview preparation and a tailored CV.",
    problem:
      "Job seekers, especially graduates entering the industry, often don't know how to improve their CV, prepare for interviews or plan their next career step, and personalised guidance is hard to access.",
    solution:
      "A web app where users upload their CV and a job description (PDF, DOCX or text) and get a match score, missing ATS keywords, interview preparation, a chat assistant and a downloadable tailored CV. Nothing is stored, so everything clears when the page is refreshed.",
    contribution:
      "Worked in a team on this Week 1 CAPACITI project. My part was designing the assistant's purpose and prompts, and helping deploy it on Vercel.",
    tech: [
      "AI",
      "Generative AI",
      "Prompt Engineering",
      "Chatbot Development",
      "Web Development",
      "GitHub",
    ],
    github:
      "https://github.com/AdriyellLopis/job-mojo-bot",
    demo:
      "https://job-mojo-bot.vercel.app/",
  },
];export const education = [
  {
    qualification: "Diploma in IT – Network Management",
    institution: "IIE Rosebank College",
    year: "2022–2024",
    text: "Diploma in Information Technology specialising in Network Management.",
  },
  {
    qualification: "Matric (National Senior Certificate)",
    institution: "St Barnabas College",
    year: "2017–2021",
    text: "",
  },
];

export const certifications = [
  {
    name: "AI For Everyone",
    issuer: "Coursera · DeepLearning.AI",
    url: "https://coursera.org/share/237e3673faa3b9781e9aa3c7d52804aa",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera · IBM",
    url: "https://coursera.org/share/5760e79f13ecbc585c6abb3dc5113255",
  },
];
