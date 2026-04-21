import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from "recharts";
import { 
  Brain, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Recycle, 
  Wifi, 
  Glasses, 
  Tv, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Monitor,
  Database,
  Cpu,
  Lock,
  Sun,
  Moon,
  HardHat,
  Users,
  CheckCircle2,
  ExternalLink,
  Twitter,
  Instagram,
  Linkedin,
  TrendingUp,
  Activity,
  BarChart3,
  MessageCircle
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import ChatWidget from "./components/ChatWidget";

const services = [
  {
    id: "01",
    title: "AI & Industrial Intelligence",
    icon: Brain,
    description: "Intelligent systems that enhance operational efficiency, reduce downtime, and optimize asset performance across heavy industries.",
    capabilities: [
      "AI-driven predictive maintenance",
      "Asset digital twins (3D modeling)",
      "Industrial performance dashboards",
      "Equipment health monitoring"
    ],
    industries: ["Mining", "Energy", "Oil & Gas", "Manufacturing", "Transport"]
  },
  {
    id: "02",
    title: "Cybersecurity & OT/IT Integration",
    icon: ShieldCheck,
    description: "Enterprise-grade cybersecurity solutions protecting both digital (IT) and operational technology (OT) systems.",
    capabilities: [
      "SOC services (24/7 monitoring)",
      "Penetration testing & assessments",
      "OT/ICS security solutions",
      "Incident response & forensics"
    ],
    industries: ["Critical Infrastructure", "Industrial Systems", "Government", "Fintech"]
  },
  {
    id: "03",
    title: "Software Dev & Digital Platforms",
    icon: Code2,
    description: "Scalable, secure, and user-centric digital platforms and enterprise software systems tailored to organizational needs.",
    capabilities: [
      "Web & mobile application development",
      "ERP and workflow management",
      "SaaS platform development",
      "API development & integration"
    ],
    industries: ["Enterprise", "Government", "Fintech", "Banking"]
  },
  {
    id: "04",
    title: "Smart Energy & Clean Tech",
    icon: Zap,
    description: "Intelligent systems for renewable energy monitoring, efficiency optimization, and smart grid integration.",
    capabilities: [
      "Solar monitoring systems",
      "Smart metering solutions",
      "EV charging management",
      "Demand response solutions"
    ],
    industries: ["Renewables", "Utilities", "Corporate"]
  },
  {
    id: "05",
    title: "E-Waste & Circular Economy",
    icon: Recycle,
    description: "Sustainable technology management and digital waste reduction through circular economy principles.",
    capabilities: [
      "E-waste upcycling hubs",
      "IT asset disposal & recovery",
      "Circular economy tracking",
      "ESG sustainability reporting"
    ],
    industries: ["Environment", "Corporate", "IT Services"]
  },
  {
    id: "06",
    title: "IoT & Environmental Monitoring",
    icon: Wifi,
    description: "Connected IoT systems delivering real-time environmental data for informed decision-making.",
    capabilities: [
      "Air & water quality monitoring",
      "Smart agriculture solutions",
      "Climate data dashboards",
      "Flood & hazard detection"
    ],
    industries: ["Government", "Agri-tech", "Conservation"]
  },
  {
    id: "07",
    title: "VR/AR Industrial Training",
    icon: Glasses,
    description: "Immersive VR and AR simulation platforms that transform how industrial teams are trained and prepared.",
    capabilities: [
      "Mining & safety simulations",
      "Equipment operation training",
      "Virtual factory walkthroughs",
      "Compliance-based training"
    ],
    industries: ["Mining", "Safety", "Heavy Industry"]
  },
  {
    id: "08",
    title: "Event Tech & Hybrid Platforms",
    icon: Tv,
    description: "Digital solutions for modern conferences, expos, and corporate events — enabling world-class experiences.",
    capabilities: [
      "Hybrid event platforms",
      "Virtual conference systems",
      "Ticketing & registration",
      "Live-stream integration"
    ],
    industries: ["Conferences", "Expos", "Corporate"]
  }
];

const valueProps = [
  {
    title: "Multi-disciplinary Expertise",
    desc: "Our team spans AI, cybersecurity, software, energy, IoT, and XR."
  },
  {
    title: "Industrial-Grade Architecture",
    desc: "Built for the demanding standards of mining, energy, and manufacturing."
  },
  {
    title: "Cybersecurity-First Design",
    desc: "Security is embedded into every solution we build, not bolted on."
  },
  {
    title: "Long-Term Partnerships",
    desc: "We partner with clients for ongoing support, evolution, and innovation."
  }
];

const teamMembers = [
  {
    name: "Assad Antonio",
    role: "CEO/Founder",
    image: "https://picsum.photos/seed/kite-modern-1/400/400",
    bio: "Visionary leader driving Starkite's mission to bridge the gap between industrial operations and digital intelligence."
  },
  {
    name: "Tangi Haiduwa",
    role: "Lead Software Engineer",
    image: "https://picsum.photos/seed/kite-modern-2/400/400",
    bio: "Architecting high-performance digital platforms and integrated enterprise systems for Starkite's global clients."
  },
  {
    name: "Selma Nakanyala",
    role: "Finance Manager",
    image: "https://picsum.photos/seed/kite-modern-3/400/400",
    bio: "Ensuring fiscal integrity and strategic resource allocation to support Starkite's technical and operational expansion."
  }
];

const SECTION_PRIMARY = "#0284C7";
const SECTION_DARK = "#075985";
const SLATE_900 = "#0f172a";

interface ServiceCardProps {
  service: any;
  itemVariants: any;
  key?: any;
}

const ServiceCard = ({ service, itemVariants }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group h-fit flex flex-col bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${isExpanded ? 'ring-2 ring-sky-500/50' : ''}`}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 flex justify-between items-start">
          <Tooltip content={service.title}>
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: SECTION_PRIMARY }}
            >
              <service.icon className="w-6 h-6" />
            </div>
          </Tooltip>
        </div>
        
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">{service.title}</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7] mb-3">All Capabilities</p>
                  <ul className="space-y-2">
                    {service.capabilities.map((cap: string, i: number) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#0284C7] shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7] mb-3">Target Industries</p>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((ind: string, i: number) => (
                      <span key={i} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider uppercase">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
          {!isExpanded && (
             <div className="flex -space-x-1">
               {service.industries.slice(0, 2).map((_: any, i: number) => (
                 <div key={i} className="w-5 h-5 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[8px] font-bold text-slate-500">
                   {i === 1 ? '+' : ''}
                 </div>
               ))}
             </div>
          )}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7] dark:text-sky-400 flex items-center gap-2 hover:text-[#075985] dark:hover:text-sky-300 transition-colors ml-auto focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded p-1"
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Learn more about'} ${service.title}`}
          >
            {isExpanded ? (
              <>Collapse <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>Learn More <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CosmicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-950 opacity-40" />
      {/* Stars Layer 1 */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`s1-${i}`}
            initial={{ 
              opacity: Math.random(), 
              x: Math.random() * 2000 - 1000, 
              y: Math.random() * 2000 - 1000,
              z: Math.random() * 1000
            }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              z: [null, -500],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              filter: 'blur(1px)',
              boxShadow: '0 0 10px white'
            }}
          />
        ))}
      </div>
      {/* Nebula Globs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-sky-500/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px]"
      />
    </div>
  );
};

const IndustrialHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-950/60 z-10" />
      
      {/* Cinematic Background Visual */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="High-tech digital infrastructure background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Animated Light Streaks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "-100%", y: Math.random() * 100 + "%" }}
          animate={{ x: "200%" }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: i * 2,
            ease: "easeInOut" 
          }}
          className="absolute w-64 h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent z-20"
        />
      ))}

      {/* Legacy Sparkles for added vertical depth */}
      <CosmicBackground />
    </div>
  );
};

const Tooltip = ({ content, children }: { content: string, children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative flex items-center justify-center h-full" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            className="absolute bottom-full mb-3 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-2xl z-[100] pointer-events-none border border-slate-700"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[5px] border-t-slate-900 dark:border-t-slate-800" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-[5px] border-x-transparent border-t-[5px] border-t-slate-700 translate-y-[1px] -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const performanceData = [
  { month: "Jan", efficiency: 68, security: 82, energy: 45 },
  { month: "Feb", efficiency: 72, security: 84, energy: 48 },
  { month: "Mar", efficiency: 75, security: 88, energy: 55 },
  { month: "Apr", efficiency: 82, security: 92, energy: 62 },
  { month: "May", efficiency: 88, security: 94, energy: 75 },
  { month: "Jun", efficiency: 94, security: 98, energy: 88 },
];

const PerformanceInsights = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4" /> Real-time Analytics
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] dark:text-white tracking-tight">Performance Insights</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
            Our AI-driven platforms provide continuous monitoring and performance trends across global industrial assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Industrial Efficiency Trend</h4>
                <p className="text-xs text-slate-500">Global average across monitored smart factories</p>
              </div>
              <div className="text-sky-500 flex items-center gap-1 font-bold">
                <TrendingUp className="w-4 h-4" /> +26%
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284C7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0284C7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-700" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dx={-10} domain={[0, 100]} />
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#bae6fd', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="efficiency" stroke="#0284C7" strokeWidth={3} fillOpacity={1} fill="url(#colorEff)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Security Integrity Score</h4>
                <p className="text-xs text-slate-500">Threat detection and mitigation efficacy</p>
              </div>
              <div className="text-sky-500 flex items-center gap-1 font-bold">
                <BarChart3 className="w-4 h-4" /> 98.4%
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" className="dark:stroke-slate-700" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dx={-10} domain={[0, 100]} />
                  <RechartsTooltip 
                    cursor={{ fill: 'rgba(2, 132, 199, 0.05)' }}
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#bae6fd', fontSize: '12px' }}
                  />
                  <Bar dataKey="security" fill="#0284C7" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique industries from services
  const allIndustries = ["All", ...new Set(services.flatMap(s => s.industries))].sort();

  const filteredServices = services.filter(s => 
    activeFilter === "All" || s.industries.includes(activeFilter)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 selection:bg-sky-100 dark:selection:bg-sky-900 selection:text-sky-900 dark:selection:text-sky-100">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-md focus:font-bold focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Top Banner */}
      <div style={{ backgroundColor: SECTION_DARK }} className="py-2 text-white/90 text-xs px-4 text-center border-b border-white/10 flex flex-wrap justify-center gap-4">
        <span>Reg. No: 2026/0280</span>
        <span className="hidden sm:inline">|</span>
        <span>Innovating Tomorrow</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900/80 dark:backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Modern representation of the Hourglass Grid Logo */}
              <div className="absolute inset-0 bg-slate-900 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center group-hover:border-sky-500/50 transition-colors">
                 <div className="w-full h-full opacity-30 absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
                 <div className="relative z-10 w-8 h-8 flex flex-col items-center justify-center">
                   <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent absolute top-1/2 -translate-y-1/2 rotate-45" />
                   <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent absolute top-1/2 -translate-y-1/2 -rotate-45" />
                   <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-[0_0_8px_white]" />
                 </div>
              </div>
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight text-[#0f172a] dark:text-white leading-none uppercase">STARKITE</h1>
              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mt-0.5">TECHNOLOGIES</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#services" className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded px-1">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#products" className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded px-1">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#team" className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded px-1">
              Team
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded px-1">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-all group focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none rounded px-1">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <Tooltip content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            </Tooltip>

            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-md text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: SECTION_PRIMARY }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section style={{ background: `linear-gradient(135deg, ${SLATE_900} 0%, ${SECTION_DARK} 100%)` }} className="relative overflow-hidden pt-24 pb-48 text-white">
          <IndustrialHeroBackground />
          <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-30">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Industrial AI & Precision Engineering for the Digital Frontier
              </h2>
              <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-10">
                Starkite Technologies Pty Ltd delivers world-class technical integration and specialized R&D solutions for aerospace and industrial sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#services" 
                  className="px-8 py-4 rounded-md text-white font-bold text-lg flex items-center gap-3 shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: SECTION_PRIMARY }}
                >
                  Explore Services <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 rounded-md bg-white border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Decorative element from theme */}
          <div className="absolute -top-1/2 -right-10 w-[500px] h-[500px] bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* CEO Quote Section */}
        <section className="bg-white dark:bg-slate-950 py-20 border-b border-slate-100 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sky-500/10 dark:text-sky-500/5 select-none pointer-events-none">
                <Brain className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <span className="text-sky-500 text-6xl font-serif">"</span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-2 mb-8 leading-tight italic tracking-tight">
                  YOUR GREATEST WEAPON IS YOUR MIND, TRAIN IT TO SEE OPPORTUNITIES, NOT OBSTACLES
                </h3>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-1 bg-sky-500 rounded-full mb-2" />
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0f172a] dark:text-white">Assad Antonio</p>
                  <p className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest">CEO & Founder, Starkite Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="mb-20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Expertise & Services</h3>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Core Service Pillars</h2>
                
                {/* Industry Filter */}
                <div className="flex flex-wrap gap-2 max-w-2xl" role="group" aria-label="Filter services by industry">
                  {allIndustries.slice(0, 8).map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setActiveFilter(industry)}
                      aria-pressed={activeFilter === industry}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${
                        activeFilter === industry 
                        ? "bg-[#0284C7] text-white shadow-md" 
                        : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-sky-500"
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                  {allIndustries.length > 8 && activeFilter !== "All" && !allIndustries.slice(0, 8).includes(activeFilter) && (
                    <button
                      className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#0284C7] text-white shadow-md"
                    >
                      {activeFilter}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <motion.div 
              key={activeFilter} // Key change triggers re-animation
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
            >
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} itemVariants={itemVariants} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="mb-20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Proprietary Solutions</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Innovative Product Ecosystem</h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-12 md:p-16 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6 w-fit">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Flagship Infrastructure</span>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight italic">EVENTFLOW</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                      The premier unified digital ecosystem for hybrid events. EVENTFLOW bridges physical and digital spaces through real-time telemetry, ultra-low latency streaming, and AI-driven attendee engagement.
                    </p>
                    <ul className="space-y-4 mb-10">
                      {[
                        "Enterprise-grade hybrid infrastructure",
                        "Real-time event data visualization",
                        "End-to-end security & asset protection",
                        "AI networking & matchmaking core"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <button className="px-8 py-3 rounded-md bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none">
                        View Technical Docs
                      </button>
                    </div>
                  </div>
                  <div className="relative h-[400px] lg:h-auto bg-slate-800 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
                      alt="Starkite EVENTFLOW - Unified digital ecosystem for hybrid events"
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-l" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Insights Section */}
        <PerformanceInsights />

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Differentiators</h3>
                <h2 className="text-4xl font-extrabold text-[#0f172a] dark:text-white tracking-tight mb-8">
                  Why Leading Organizations Choose Starkite.
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                  We don't just deliver technology; we build long-term partnerships. Our approach prioritizes scalability, security, and sustainability in every architectural choice.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {valueProps.map((prop, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <h4 className="font-bold text-[#0f172a] dark:text-white">{prop.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{prop.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                   <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial Technology"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div 
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-md border border-slate-200 dark:border-slate-700 shadow-xl max-w-xs"
                >
                  <p className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-2">Sustainable Innovation</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">We prioritize clean technology and circular economy principles in all our deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="mb-20 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Leadership & Talent</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Our Specialist Team</h2>
              <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A multi-disciplinary group of engineers, researchers, and strategists dedicated to pushing the boundaries of industrial technology.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
                      <p className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-4">{member.role}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Strip Section */}
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Get in Touch</h3>
                <h2 className="text-4xl font-extrabold text-[#0f172a] dark:text-white tracking-tight mb-8">
                  Let's Build the Future Together.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-12">
                  Ready to modernize your operations? Get in touch with our specialist team for a consultation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Headquarters</p>
                    <p className="text-sm font-semibold text-[#0f172a] dark:text-white">Windhoek, Namibia</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Direct Contact</p>
                    <a href="tel:+264814001634" className="text-sm font-semibold text-[#0f172a] dark:text-white hover:text-sky-600 transition-colors cursor-pointer">+264 81 400 1634</a>
                    <a href="mailto:starkitenamibia@gmail.com" className="text-sm font-semibold text-[#0f172a] dark:text-white hover:text-sky-600 transition-colors cursor-pointer">starkitenamibia@gmail.com</a>
                    <a 
                      href="https://wa.me/264814001634" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-green-500 text-white rounded text-xs font-bold w-fit hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Reg. No</p>
                    <p className="text-sm font-semibold text-[#0f172a] dark:text-white">2026/0280</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                 <form className="space-y-6" id="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label htmlFor="full-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                       <input id="full-name" name="full-name" type="text" placeholder="John Doe" autoComplete="name" className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                     </div>
                     <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                       <input id="email" name="email" type="email" placeholder="john@company.com" autoComplete="email" className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                     <textarea id="message" name="message" rows={4} placeholder="Describe your challenge..." className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-md text-white font-bold text-md shadow-md hover:opacity-90 transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                    style={{ backgroundColor: SECTION_PRIMARY }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white tracking-tight mb-4">
              Interested in staying up to date with StarKITE?
            </h2>
            <form className="mt-8 flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                aria-label="Email address for newsletter"
                className="flex-grow px-6 py-4 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-md text-white font-bold whitespace-nowrap shadow-lg hover:opacity-90 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                style={{ backgroundColor: SECTION_PRIMARY }}
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              By clicking Sign Up, you agree to our <a href="#" className="underline hover:text-sky-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center text-white" style={{ background: SECTION_PRIMARY, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
              </div>
              <p className="font-extrabold text-[#0f172a] dark:text-white tracking-tight uppercase text-sm">STARKITE TECHNOLOGIES</p>
            </div>
            <div className="flex items-center gap-8">
              <Tooltip content="Message on WhatsApp">
                <a href="https://wa.me/264814001634" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors group" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">WhatsApp</span>
                </a>
              </Tooltip>
              <Tooltip content="Follow on LinkedIn">
                <a href="https://linkedin.com/company/starkite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-sky-600 transition-colors group" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">LinkedIn</span>
                </a>
              </Tooltip>
              <Tooltip content="Follow on X">
                <a href="https://twitter.com/starkite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group" aria-label="X (Twitter)">
                  <Twitter className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">X</span>
                </a>
              </Tooltip>
              <Tooltip content="Follow on Instagram">
                <a href="https://instagram.com/starkite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors group" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">Instagram</span>
                </a>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-8 text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
              <span>© 2026 Starkite Technologies Pty Ltd</span>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
