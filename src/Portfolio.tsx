import { motion } from "motion/react";
import { 
  Smartphone, 
  Code2, 
  Database, 
  Cloud, 
  Layout, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download,
  ExternalLink,
  ChevronRight,
  Github,
  Award,
  Layers,
  Zap
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

// --- Types ---

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: ReactNode;
  link?: string;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  icon: ReactNode;
}

interface Skill {
  name: string;
  level: number;
  category: "Technical" | "Soft";
}

// --- Constants ---

const LINKEDIN_URL = "https://www.linkedin.com/in/rasheedali-b-293141278/";
const GITHUB_URL = "https://github.com/reshy28";
const RESUME_URL = "https://drive.google.com/file/d/1_4QtEkwN9LZx4AywKl5ZmpUCCipdaa4g/view?usp=sharing";

const PROJECTS: Project[] = [
  {
    title: "KOT – Kitchen Order Ticket System",
    description: "Cross-platform restaurant order system with real-time notifications (FCM) and category-wise thermal printing. Integrated with ERP & POS.",
    tech: ["Flutter", "GetX", "Firebase", "Thermal Printing"],
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    category: "Restaurant Tech"
  },
  {
    title: "ERP System",
    description: "Full-scale ERP built from scratch featuring Masters, Vouchers, and Reports. Handles Purchase, Sales, Journal, and Receipts with REST API integration.",
    tech: ["Flutter", "REST API", "GetX", "Backend Integration"],
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    category: "Enterprise"
  },
  {
    title: "VANSALE – Sales & Inventory",
    description: "Barcode-based stock tracking and real-time sales data app with offline-first architecture and role-based Firebase Auth.",
    tech: ["Flutter", "SQLite", "Firebase", "GetX"],
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    category: "Logistics"
  },
  {
    title: "CDC Pract – SaaS Healthcare",
    description: "Therapy booking system for healthcare providers. Includes assessment management, parent dashboard, and session tracking.",
    tech: ["Flutter", "SaaS Architecture", "API Integration", "GetX"],
    icon: <Cloud className="w-6 h-6 text-emerald-400" />,
    category: "Healthcare"
  },
  {
    title: "Fineasy Marketing – CRM Tool",
    description: "Field marketing tracking app for executive activity logging, shop records, and location tracking with optimized CRUD operations.",
    tech: ["Flutter", "SQLite", "Firebase", "GetX"],
    icon: <Layout className="w-6 h-6 text-emerald-400" />,
    category: "Marketing"
  }
];

const EXPERIENCES: Experience[] = [
  {
    company: "Prayatna Child Development Center",
    role: "Flutter Developer",
    period: "JUL 2025 – PRESENT",
    achievements: [
      "Developing CDC Pract SaaS Application for therapy booking",
      "Implementing Assessment & Consultation Management systems",
      "Building Parent Portal with automated report access",
      "Focusing on scalable SaaS architecture and secure healthcare data"
    ],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    company: "Finisso Technologies",
    role: "Flutter Developer",
    period: "JAN 2024 – JUL 2025",
    achievements: [
      "Implemented advanced thermal printing with multi-connectivity support (Wi-Fi, Bluetooth, USB)",
      "Designed and developed a robust ERP system from scratch (Masters & Vouchers)",
      "Built a real-time sales and inventory management system (Vansale) with offline mode via SQLite",
      "Utilized GetX for efficient state management, dependency injection, and navigation"
    ],
    icon: <Briefcase className="w-6 h-6" />
  }
];

const SKILLS: Skill[] = [
  { name: "Flutter Framework", level: 95, category: "Technical" },
  { name: "Dart", level: 90, category: "Technical" },
  { name: "GetX", level: 95, category: "Technical" },
  { name: "Provider", level: 95, category: "Technical" },
  { name: "Firebase", level: 85, category: "Technical" },
  { name: "REST APIs", level: 90, category: "Technical" },
  { name: "SQLite / Hive", level: 85, category: "Technical" },
  { name: "ERP Architecture", level: 80, category: "Technical" },
  { name: "SupaBase", level: 90, category: "Technical" },
  { name: "UI/UX Design", level: 75, category: "Technical" },
  { name: "Creative Problem Solving", level: 90, category: "Soft" },
  { name: "Fast Learner", level: 95, category: "Soft" },
  { name: "Team Collaboration", level: 85, category: "Soft" },
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          RASHEED<span className="text-emerald-500">ALI</span>
        </motion.div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-emerald-400 border-emerald-500/30"
        >
          Resume
        </motion.a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-mesh">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            Available for New Opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Rasheedali <span className="text-emerald-500">B</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-lg">
            Flutter Developer | Cross-Platform App Specialist
            <span className="block mt-4 text-lg text-gray-500">
              Built production-grade ERP & SaaS applications used in real business environments.
            </span>
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              View Projects <ChevronRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-xl font-bold flex items-center gap-2"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass p-8 rounded-3xl border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
            <div className="grid grid-cols-2 gap-4">
              {["Flutter", "Dart", "GetX", "Firebase", "REST API", "SQLite"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass p-4 rounded-2xl flex items-center gap-3 glass-hover"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <span className="text-sm font-mono">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
      
      {/* Floating particles background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "Experience", value: "2+ Years", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Production Apps", value: "5+", icon: <Smartphone className="w-5 h-5" /> },
    { label: "ERP Systems", value: "Custom Built", icon: <Layers className="w-5 h-5" /> },
    { label: "API Expertise", value: "Expert", icon: <Cloud className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Professional Flutter Developer with hands-on experience in building scalable ERP systems, 
              real-time sales applications, SaaS platforms, and healthcare therapy booking systems.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Cross-platform mobile development",
                "GetX architecture",
                "Provider architecture",
                "Offline-first applications",
                "Thermal printing integrations",
                "ERP & POS integrations"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl glass-hover"
              >
                <div className="text-emerald-500 mb-4">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark-card/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Professional Experience</h2>
        <div className="relative border-l border-emerald-500/20 ml-4 md:ml-0">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-16 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark-bg border-2 border-emerald-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="glass p-8 rounded-3xl border-emerald-500/10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="text-gray-400 flex gap-3 text-sm leading-relaxed">
                      <span className="text-emerald-500 mt-1">•</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-500">Transforming complex business workflows into scalable solutions.</p>
          </div>
          <div className="flex gap-2">
            <div className="glass px-4 py-2 rounded-full text-xs font-bold text-emerald-400">All Projects</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden border-emerald-500/5 flex flex-col h-full group"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-500">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-gray-500 border border-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-white/5 flex justify-end">
                <button className="text-emerald-500 hover:text-emerald-400 p-2 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Skills = () => {
  const skillGroups = [
    {
      title: "Architecture & State Management",
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      skills: ["GetX", "Provider", "Clean Architecture", "Dependency Injection", "Modular Structure"],
    },
    {
      title: "Backend & APIs",
      icon: <Cloud className="w-5 h-5 text-emerald-500" />,
      skills: ["REST APIs", "Firebase", "Supabase", "Authentication", "API Optimization"],
    },
    {
      title: "Database & Offline Systems",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      skills: ["SQLite", "Hive", "Offline-first Architecture", "Local Caching"],
    },
    {
      title: "Tools & Deployment",
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      skills: ["Git", "Google Play Console", "Figma", "App Deployment", "CI/CD Basics"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Skills & Expertise</h2>
        <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
          Strong focus on scalable architecture, clean code practices, and building
          production-ready Flutter applications.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-emerald-500/10">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-white/5 rounded-full border border-white/5 hover:border-emerald-500/40 hover:text-emerald-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// const Skills = () => {
//   const categories = ["Technical", "Soft"];
  
//   return (
//     <section id="skills" className="py-24 bg-dark-card/30">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
        
//         <div className="grid md:grid-cols-2 gap-16">
//           {categories.map((cat) => (
//             <div key={cat}>
//               <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
//                 {cat === "Technical" ? <Code2 className="w-5 h-5 text-emerald-500" /> : <Award className="w-5 h-5 text-emerald-500" />}
//                 {cat} Skills
//               </h3>
//               <div className="space-y-6">
//                 {SKILLS.filter(s => s.category === cat).map((skill, i) => (
//                   <div key={skill.name}>
//                     <div className="flex justify-between text-sm mb-2">
//                       <span className="text-gray-300">{skill.name}</span>
//                       <span className="text-emerald-500 font-mono">{skill.level}%</span>
//                     </div>
//                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1, delay: i * 0.1 }}
//                         className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const Education = () => {
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl border-emerald-500/10 inline-block"
        >
          <GraduationCap className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
          <p className="text-emerald-400 font-medium mb-4">2020 – 2023</p>
          <p className="text-gray-400">Nehru Arts and Science College</p>
          <p className="text-gray-500 text-sm">Coimbatore, Tamil Nadu</p>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-card/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-500 mb-16">Let's discuss your next project or just say hi!</p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Mail />, label: "Email", value: "rasheedreshy2@gmail.com", href: "mailto:rasheedreshy2@gmail.com" },
            { icon: <Phone />, label: "Phone", value: "+91-7012011684", href: "tel:+917012011684" },
            { icon: <MapPin />, label: "Location", value: "Kerala, India", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl glass-hover group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                {item.icon}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">{item.label}</div>
              <div className="text-sm font-bold text-white break-all">{item.value}</div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn Profile
          </motion.a>
          <motion.a
            href={RESUME_URL}
            download="RasheedAli_B_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-10 py-4 rounded-2xl font-bold flex items-center gap-2"
          >
            <Download className="w-5 h-5" /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">
          RASHEED<span className="text-emerald-500">ALI</span>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} RasheedAli B. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors"><Github className="w-5 h-5" /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:rasheedreshy2@gmail.com" className="text-gray-500 hover:text-emerald-500 transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 glass p-4 rounded-2xl text-emerald-500 border-emerald-500/20 shadow-xl shadow-emerald-500/10"
    >
      <ChevronRight className="w-6 h-6 -rotate-90" />
    </motion.button>
  );
};

export default function Portfolio() {
  return (
    <div className="selection:bg-emerald-500/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
