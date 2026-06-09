// ============================================================
//  EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
//  All your personal info lives here — no need to touch
//  any component files.
// ============================================================

export const personal = {
  name: "Jatin Kumar",
  nameAccent: "Chen.", // highlighted part of name
  eyebrow: "Available for internships & opportunities",
  roles: [
    "CS Engineer",
    //"Systems Thinker",
    "ML Practitioner",
    "Open Source Contributor",
    "Full Stack Developer",
  ],
  bio: "AI/ML-focused Computer Science student with hands-on experience in Python, machine learning libraries, and full-stack web development. Seeking an internship to apply technical skills in real-world AI/ML or software engineering projects and grow through collaborative, product-driven environments.",
  university: "Anand Engineering College, B.Tech CSE (AIML)",
  year: "4th Year",
 // gpa: "9.2",
  interests: ["Artificial Intelligence", "ML", "Gen-AI"],
  hobbies: ["Gaming", "Photography", "Competitive coding"],
  currentlyReading: "Designing Data-Intensive Applications",
  openTo: "Web dev roles, research internships", 
  stats: [
    { value: "3", suffix: "+", label: "Projects Built" },
   // { value: "3",  suffix: "+", label: "Internships" },//
    { value: "4",  suffix: "th", label: "Year CS Student" },
    { value: "8",  suffix: "+", label: "Technologies" },
  ],
};

export const contact = {
  email: "jatin0977kumar@gmail.com",
  linkedin: "linkedin.com/in/jatinkumar",
  linkedinUrl: "https://www.linkedin.com/in/jatin-kumar-319118299?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "github.com/jatinkumar",
  githubUrl: "https://github.com/Jatin0977",
  resumeUrl: "https://drive.google.com/file/d/1qKOBVvAkE2J_DFLkfenYJby0ryhNjKEA/view?usp=sharing"
};

export const skills = [
  {
    icon: "⚡",
    title: "Languages",
    tags: ["Python", "JavaScript","C++", "Java",],
    variant: "cyan",
  },
  {
    icon: "🌐",
    title: "Frontend",
    tags: ["React","Tailwind", "HTML/CSS",],
    variant: "cyan",
  },
  {
    icon: "🔧",
    title: "Backend & Cloud",
    tags: ["Node.js", "FastAPI", "PostgreSQL",],
    variant: "mixed", // last 3 will be purple
  },
  {
    icon: "🤖",
    title: "ML & AI",
    tags: ["PyTorch", "Scikit-learn", "OpenCV", "Pandas","Numpy"],
    variant: "mixed",
  },
];

export const projects = [
  {
    num: "001",
    title: "Sentiment Analyzer – Review Classification",
    desc: "Developed an NLP-based sentiment analysis web application using VADER, TextBlob, and Logistic Regression for review classification",
    stack: ["Python", "Scikit-learn", "VADER", "Streamlit", "TextBlob"],
    url: "https://github.com/Jatin0977/Sentiment_Analyzer",
  },
  {
    num: "002",
    title: "Sensei – AI Powered Career Coach",
    desc: "Built an AI-based career guidance web application focused on resume building and interview preparation.",
    stack: ["React", "Node.js", "Next.js"],
    url: "https://github.com/Jatin0977/Fullstack-Sens-AI-career-coach",
  },
  {
    num: "003",
    title: "PlayPlex – Multi-Dimensional Gaming Platform",
    desc: "ML-powered network intrusion detection system. Trained on NSL-KDD dataset, achieving 97.8% accuracy. Built a live dashboard with D3.js to visualize traffic patterns.",
    stack: ["Python", "Scikit-learn", "D3.js"],
    url: "#",
  },
  //{
   // num: "004",
    //title: "FluxDB — Distributed Key-Value Store",
    //desc: "Developed a multi-game platform featuring chess, hangman, snake, and other interactive browser games.",
    //stack: ["HTML", "CSS", "Javascript"],
    //url: "#",
  //},
  ///{
   // num: "005",
    //title: "GlanceAI — Visual Search Engine",
    //desc: "Multimodal search engine using CLIP embeddings. Upload any image or type any query and retrieve semantically similar images from a 1M+ image index in under 200ms.",
    //stack: ["Python", "FastAPI", "CLIP"],
    //url: "#",
  //},
  //{
    //num: "006",
    //title: "ByteBoard — Developer Portfolio CMS",
    //desc: "Headless CMS tailored for developers with MDX support, GitHub activity sync, and automated deploy previews. 300+ developers use it to ship their portfolios.",
    //stack: ["Next.js", "TypeScript", "Vercel"],
    //url: "#",
  //},
];

export const experience = [
  {
    date: "Jun 2024 – Aug 2024",
    role: "Software Engineering Intern",
    company: "Google — Bangalore, India",
    desc: "Worked on Search infrastructure. Reduced cold-start latency by 18% on a core serving pipeline used by 2B+ daily queries. Shipped 3 features to production.",
  },
  {
    date: "Dec 2023 – Jan 2024",
    role: "Backend Engineering Intern",
    company: "Razorpay — Remote",
    desc: "Built a rule-based fraud detection microservice in Go, processing 4M+ transactions/day. Integrated with existing payment orchestration layer.",
  },
  {
    date: "May 2023 – Jul 2023",
    role: "Research Intern — NLP",
    company: "IIT Bombay CSE Department",
    desc: "Fine-tuned transformer models for low-resource Indian language NLP tasks. Achieved SOTA on 2 benchmarks, co-authored a workshop paper at ACL 2023.",
  },
];
