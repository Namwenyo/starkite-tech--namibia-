import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
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
  MessageCircle,
  Menu,
  X,
  Loader2,
  Search,
  Filter,
  AlertCircle,
  Globe,
  Layers,
  FileText,
  Shield
} from "lucide-react";
import { AnimatePresence } from "motion/react";
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import ChatWidget from "./components/ChatWidget";
import Legal from "./Legal";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
    industries: ["Mining", "Energy", "Oil & Gas", "Manufacturing", "Transport"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Critical Infrastructure", "Industrial Systems", "Government", "Fintech"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Enterprise", "Government", "Fintech", "Banking"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Renewables", "Utilities", "Corporate"],
    image: "https://images.unsplash.com/photo-1466611653911-954ffaa13b6f?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Environment", "Corporate", "IT Services"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Government", "Agri-tech", "Conservation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
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
    industries: ["Mining", "Safety", "Heavy Industry"],
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop"
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
    industries: ["Conferences", "Expos", "Corporate"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
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
    bio: "Visionary leader driving Starkite's mission to bridge the gap between industrial operations and digital intelligence."
  },
  {
    name: "Tangi Haiduwa",
    role: "Lead Software Engineer",
    bio: "Architecting high-performance digital platforms and integrated enterprise systems for Starkite's global clients."
  },
  {
    name: "Selma Nakanyala",
    role: "Finance Manager",
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

const Skeleton = ({ className, style, ...props }: { className?: string; style?: React.CSSProperties; [key: string]: any }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded ${className}`} style={style} {...props} />
);

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -10 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, -5, 0],
    boxShadow: "0 0 20px rgba(2, 132, 199, 0.4)",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const ServiceCard = ({ service, itemVariants }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      variants={itemVariants}
      whileHover="hover"
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group h-fit flex flex-col bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${isExpanded ? 'ring-2 ring-sky-500/50' : ''}`}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 flex justify-between items-start">
          <Tooltip content={service.title}>
            <motion.div 
              variants={iconVariants}
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: SECTION_PRIMARY }}
            >
              <service.icon className="w-6 h-6" />
            </motion.div>
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
          
          {isExpanded && (
            <Link 
              to={`/services/${service.id}`}
              className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1 hover:text-sky-600 transition-colors ml-4"
            >
              Full Details <ExternalLink className="w-3 h-3" />
            </Link>
          )}
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-950/60 z-10" />
      
      {/* Cinematic Background Visual */}
      <motion.div
        style={{ y, opacity }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="High-tech digital infrastructure background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-125"
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
    <div 
      className="relative flex items-center justify-center h-full" 
      onMouseEnter={() => setIsVisible(true)} 
      onMouseLeave={() => setIsVisible(false)}
      onTouchStart={() => setIsVisible(true)}
      onTouchEnd={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            className="absolute bottom-full mb-3 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-2xl z-[100] pointer-events-none border border-slate-700 w-max max-w-[200px] text-center"
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
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Parallax Background Asset */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
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
          {/* Chart 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            {isLoading ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                  <Skeleton className="h-5 w-12" />
                </div>
                <div className="h-[300px] flex items-end justify-between gap-2 px-2">
                  {[...Array(12)].map((_, i) => (
                    <Skeleton 
                      key={i} 
                      className="w-full" 
                      style={{ height: `${Math.random() * 60 + 30}%` }} 
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-slate-900/10 backdrop-blur-[1px]">
                  <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Industrial Efficiency Trend</h4>
                    <p className="text-xs text-slate-500">Global average across monitored smart factories</p>
                  </div>
                  <div className="text-sky-500 flex items-center gap-1 font-bold">
                    <TrendingUp className="w-4 h-4" /> +26%
                  </div>
                </div>
                
                <div className="h-[300px] w-full min-h-[300px] relative">
                  <ResponsiveContainer width="100%" aspect={2}>
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
              </>
            )}
          </div>

          {/* Chart 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
            {isLoading ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                  <Skeleton className="h-5 w-12" />
                </div>
                <div className="h-[300px] flex items-end justify-between gap-4 px-4">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton 
                      key={i} 
                      className="w-full" 
                      style={{ height: `${Math.random() * 50 + 40}%` }} 
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 dark:bg-slate-900/10 backdrop-blur-[1px]">
                  <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Security Integrity Score</h4>
                    <p className="text-xs text-slate-500">Threat detection and mitigation efficacy</p>
                  </div>
                  <div className="text-sky-500 flex items-center gap-1 font-bold">
                    <BarChart3 className="w-4 h-4" /> 98.4%
                  </div>
                </div>
                
                <div className="h-[300px] w-full min-h-[300px] relative">
                  <ResponsiveContainer width="100%" aspect={2}>
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetail = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (val: boolean) => void }) => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Service not found</h2>
          <Link to="/#services" className="text-sky-600 hover:underline flex items-center gap-2 justify-center">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Detail Header */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center text-white" style={{ background: SECTION_PRIMARY, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
          <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter text-sm">STARKITE</span>
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <Link 
            to="/#services" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-sky-600 transition-colors group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
        </div>
      </nav>

      <main className="py-24 max-w-7xl mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-8">
              <service.icon className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Service Segment {service.id}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
              {service.description}
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-6">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.capabilities.map((cap: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-sky-600 mb-6">Industry Applicability</h3>
                <div className="flex flex-wrap gap-3">
                  {service.industries.map((industry: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src={service.image || `https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop`} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-bold text-lg mb-2">Technical Excellence</p>
                  <p className="text-slate-300 text-sm">Industrial-grade solutions engineered for precision and scale.</p>
                </div>
             </div>

             <div className="bg-slate-900 border border-white/5 rounded-2xl p-8 text-white">
                <h4 className="font-bold text-xl mb-4">Request a Case Study</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Deep dive into how we've implemented {service.title.toLowerCase()} for global industrial leaders.
                </p>
                <Link to="/#contact" className="block w-full text-center py-4 rounded-md bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                  Contact Specialist
                </Link>
             </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Reuse */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">© 2026 STARKITE TECHNOLOGIES</p>
          <div className="flex gap-8">
            <Link to="/legal" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-sky-600 transition-colors">Privacy</Link>
            <Link to="/legal" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-sky-600 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

function LandingPage({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (val: boolean) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('sending');
    setTimeout(() => {
      setNewsletterStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    }, 1500);
  };

  // Get unique industries from services
  const allIndustries = ["All", ...new Set(services.flatMap(s => s.industries))].sort();

  const filteredServices = services.filter(s => {
    const matchesFilter = activeFilter === "All" || s.industries.includes(activeFilter);
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.industries.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02, y: -5 }
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
          <div className="flex items-center gap-4">
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

              <Tooltip content="Message on WhatsApp">
                <a 
                  href="https://wa.me/264814001634" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-[#25D366] hover:bg-green-500/10 transition-all flex items-center justify-center hover:scale-110 active:scale-95"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 fill-[#25D366]/10" />
                </a>
              </Tooltip>

              <a 
                href="#contact" 
                className="px-5 py-2.5 rounded-md text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: SECTION_PRIMARY }}
              >
                Get in Touch
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Services</a>
                <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Products</a>
                <a href="#team" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Team</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Contact</a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 px-8 py-4 rounded-md text-white font-bold text-center"
                  style={{ backgroundColor: SECTION_PRIMARY }}
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <h2 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6">
                Industrial AI & Precision <span className="text-sky-400">Engineering</span> for the Digital Frontier
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-10">
                Starkite Technologies Pty Ltd delivers world-class technical integration and specialized R&D solutions for aerospace, defense, and industrial global sectors.
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
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12">
                <div className="max-w-xl">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Expertise & Services</h3>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">Core Service Pillars</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Use the controls below to discover our specialized R&D and implementation solutions across various technical domains.
                  </p>
                </div>
                
                <div className="flex flex-col gap-6 w-full xl:max-w-3xl">
                  {/* Search and Industry Filter Container */}
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-grow group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                      <input 
                        type="text" 
                        placeholder="Search services, capabilities, or industries..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-sm"
                      />
                    </div>

                    {/* Quick Filters / Counter */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="h-full px-4 flex items-center bg-sky-500/10 border border-sky-500/20 rounded-xl text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-widest">
                        {filteredServices.length} Results
                      </div>
                      {(activeFilter !== "All" || searchQuery !== "") && (
                        <button 
                          onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                          className="text-xs font-bold text-slate-500 hover:text-red-500 transition-colors underline decoration-dotted underline-offset-4"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Industry Tabs */}
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Filter services by industry">
                    <div className="flex items-center gap-2 mr-2 text-slate-400">
                      <Filter className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Sectors:</span>
                    </div>
                    {allIndustries.slice(0, 10).map((industry) => (
                      <button
                        key={industry}
                        onClick={() => setActiveFilter(industry)}
                        aria-pressed={activeFilter === industry}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none ${
                          activeFilter === industry 
                          ? "bg-[#0284C7] text-white shadow-md transform scale-105" 
                          : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <motion.div 
                key={`${activeFilter}-${searchQuery}`} // Trigger re-animation on both filters
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
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No matching services found</h4>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto p-4 leading-relaxed">
                Refine your search parameters or try clearing the current industry filter to find what you're looking for.
              </p>
              <button 
                onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                className="mt-6 px-8 py-3 bg-sky-500 text-white text-sm font-bold rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
              >
                Reset all filters
              </button>
            </motion.div>
          )}
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
                    
                    <div className="mb-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Real-time attendee analytics",
                          "AI-powered networking matchmaking",
                          "Seamless hybrid event synchronization",
                          "Enterprise-grade security protocols",
                          "Ultra-low latency streaming core"
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Security Protocols</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {[
                          "End-to-end encryption (TLS 1.3)",
                          "Role-based access control (RBAC)",
                          "Regular security audits by third-party",
                          "Compliance with ISO 27001 standards",
                          "DDoS mitigation and response plan"
                        ].map((protocol, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                            <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                            {protocol}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setIsDocsModalOpen(true)}
                        className="px-8 py-3 rounded-md bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none"
                      >
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

        {/* Methodologies Section */}
        <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
            <div className="mb-16">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sky-600 mb-4">Our Methodology</h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">Our Approach to Development Methodologies</h2>
              <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg">
                Our approach to custom software engineering is rooted in a diverse range of methodologies, each carefully selected to match the unique needs of your projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Scrum",
                  icon: Users,
                  desc: "With a deep understanding of Scrum, we embrace its collaborative and iterative framework to ensure efficient project management, seamless communication, and timely deliverables that align with your business goals."
                },
                {
                  title: "Waterfall",
                  icon: Layers,
                  desc: "Drawing from our experience in Waterfall, we excel in executing structured and sequential projects. We meticulously plan, execute, and validate each phase, ensuring precise outcomes that meet your project's defined requirements."
                },
                {
                  title: "Agile",
                  icon: Zap,
                  desc: "Our Agile expertise empowers us to adapt quickly to changing requirements, fostering flexibility and continuous improvement. By embracing Agile principles, we collaboratively evolve projects, delivering incremental value."
                },
                {
                  title: "DevOps",
                  icon: Activity,
                  desc: "Utilizing DevOps practices, we bridge the gap between development and operations, enabling continuous integration, automated testing, and swift deployments. Our proficiency in DevOps ensures accelerated software delivery."
                }
              ].map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <m.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{m.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="py-24 bg-slate-900 dark:bg-black transition-colors duration-300 relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Our Collaborative Partnership Approaches</h2>
              <p className="max-w-2xl text-slate-400 text-lg">
                We offer a range of unique partnership models designed to suit your needs and ensure a mutually beneficial journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dedicated team model",
                  icon: Users,
                  desc: "In our Dedicated team model, we offer an extended custom software engineering team that becomes an integral part of your organization. This model provides you with skilled professionals tailored to your project's requirements."
                },
                {
                  title: "Hybrid engagement",
                  icon: Globe,
                  desc: "Starkite Technologies offers a Hybrid engagement model which combines the best of both on-site and remote staffing. It offers flexibility by allowing some team members to work on-site and others remotely."
                },
                {
                  title: "Fixed Cost Model",
                  icon: FileText,
                  desc: "The Fixed cost model provides a clear scope, timeline, and cost upfront. Being known as a top software development agency, we work closely to define project requirements and then present a fixed estimate."
                }
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  className="p-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl group"
                >
                  <p className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-6">Model 0{i+1}</p>
                  <h4 className="text-2xl font-bold text-white mb-6">{p.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-8">{p.desc}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select Model</span>
                  </div>
                </motion.div>
              ))}
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
                    <div className="aspect-square relative overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <span className="text-5xl font-black text-slate-300 dark:text-slate-600 select-none">
                        {member.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
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
                    <p className="text-sm font-semibold text-[#0f172a] dark:text-white flex items-center gap-2">
                      Windhoek, Namibia 🇳🇦
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Direct Contact</p>
                    <a href="tel:+264814001634" className="text-sm font-semibold text-[#0f172a] dark:text-white hover:text-sky-600 transition-colors cursor-pointer">+264 81 400 1634</a>
                    <a href="mailto:starkitenamibia@gmail.com" className="text-sm font-semibold text-[#0f172a] dark:text-white hover:text-sky-600 transition-colors cursor-pointer">starkitenamibia@gmail.com</a>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <a 
                        href="https://wa.me/264814001634" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md text-xs font-bold sm:w-fit w-full justify-center hover:bg-green-600 transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </a>
                      <a 
                        href="mailto:starkitenamibia@gmail.com" 
                        className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md text-xs font-bold sm:w-fit w-full justify-center hover:bg-sky-700 transition-colors shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Email Specialist
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Reg. No</p>
                    <p className="text-sm font-semibold text-[#0f172a] dark:text-white">2026/0280</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-600 dark:text-slate-400">Our engineers will review your request and get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" id="contact-form" onSubmit={handleContactSubmit}>
                    <div className="space-y-4 mb-8">
                       <h4 className="text-lg font-bold text-slate-900 dark:text-white">Hey! there :)</h4>
                       <p className="text-sm text-slate-600 dark:text-slate-400">Once you fill out this form, our sales representatives will contact you within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label htmlFor="full-name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                         <input id="full-name" name="full-name" type="text" placeholder="John Doe" autoComplete="name" className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                         <input id="email" name="email" type="email" placeholder="john@company.com" autoComplete="email" className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Phone</label>
                         <input id="phone" name="phone" type="tel" placeholder="+264..." className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="company" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Company</label>
                         <input id="company" name="company" type="text" placeholder="Starkite Tech" className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Brief about project</label>
                       <textarea id="message" name="message" rows={4} placeholder="Describe your challenge..." className="w-full px-4 py-3 rounded-md border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all bg-white dark:bg-slate-700 dark:text-white" required />
                    </div>
                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="relative w-full py-3.5 rounded-md text-white font-bold text-md shadow-md hover:opacity-90 transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none disabled:opacity-70 flex items-center justify-center gap-2"
                      style={{ backgroundColor: SECTION_PRIMARY }}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
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
            <form className="mt-8 flex flex-col sm:flex-row gap-4" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder={newsletterStatus === 'success' ? 'Subscribed!' : 'Email Address'}
                aria-label="Email address for newsletter"
                disabled={newsletterStatus === 'success'}
                className="flex-grow px-6 py-4 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-medium focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none disabled:bg-green-50 dark:disabled:bg-green-900/10 disabled:border-green-200 dark:disabled:border-green-800"
                required
              />
              <button 
                type="submit"
                disabled={newsletterStatus !== 'idle'}
                className="px-8 py-4 rounded-md text-white font-bold whitespace-nowrap shadow-lg hover:opacity-90 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none disabled:opacity-70 flex items-center justify-center gap-2 min-w-[140px]"
                style={{ backgroundColor: newsletterStatus === 'success' ? '#22c55e' : SECTION_PRIMARY }}
              >
                {newsletterStatus === 'sending' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : newsletterStatus === 'success' ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : 'Sign Up'}
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              By clicking Sign Up, you agree to our <a href="#" className="underline hover:text-sky-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {isDocsModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center text-white text-xl">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">EVENTFLOW Documentation</h3>
                    <p className="text-xs font-medium text-slate-500">v4.2.0-stable | Technical Blueprint</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsDocsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-8 font-mono text-xs space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#0284C7] font-bold">Protocol Specification</h4>
                    <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800">
                      <pre className="text-slate-400">
{`{
  "protocol": "EVENTFLOW_V4",
  "streams": {
    "telemetry": "UDP_SECURE",
    "video": "WebRTC_MPEG_DASH",
    "data": "gRPC_PROTO"
  },
  "latency_target": "<15ms",
  "encryption": "AES_256_GCM"
}`}
                      </pre>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-[#0284C7] font-bold">Architectural Stack</h4>
                    <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-sky-400 rounded-full" />
                        Edge Computing Node (Rust/WASM)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-sky-400 rounded-full" />
                        In-Memory Data Grid (Redis/Dragonfly)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-sky-400 rounded-full" />
                        Global Distribution (Anycast BGP)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-[#0284C7] font-bold">Operational Lifecycle</h4>
                  <div className="relative h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-sky-500 w-[75%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>BOOTSTRAP</span>
                    <span>INGESTION</span>
                    <span>SYNC [LIVE]</span>
                    <span>ARCHIVE</span>
                  </div>
                </div>

                <div className="p-6 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <p className="text-slate-500 leading-relaxed italic text-[11px]">
                    "EVENTFLOW is not just a platform; it's the digital fabric that weaves together disparate event datasets into a singular, high-fidelity experience."
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-4">
                <button 
                  onClick={() => setIsDocsModalOpen(false)}
                  className="px-6 py-2 rounded font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  Close
                </button>
                <button 
                  className="px-6 py-2 bg-sky-600 text-white rounded font-bold hover:bg-sky-700 transition-colors"
                >
                  Download PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <a href="https://x.com/Starkitetech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors group" aria-label="X (Twitter)">
                  <Twitter className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">X</span>
                </a>
              </Tooltip>
              <Tooltip content="Follow on Instagram">
                <a href="https://www.instagram.com/starkite_tech?igsh=dTdwMXdrMTN6ZGZr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-500 transition-colors group" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:block">Instagram</span>
                </a>
              </Tooltip>
            </div>
            <div className="flex flex-wrap gap-8 text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider items-center">
              <span className="flex items-center gap-1.5">© 2026 Starkite Technologies Pty Ltd 🇳🇦</span>
              <Link to="/legal" className="hover:text-sky-600 transition-colors">Privacy & Legal</Link>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/services/:id" element={<ServiceDetail isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/legal" element={<Legal isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      </Routes>
    </>
  );
}
