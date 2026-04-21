import { motion } from "motion/react";
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
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  Monitor,
  Database,
  Cpu,
  Lock,
  Sun,
  HardHat,
  Users,
  CheckCircle2
} from "lucide-react";

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
    industries: ["Mining", "Energy", "Manufacturing", "Transport"]
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
    industries: ["Critical Infrastructure", "Industrial Systems", "Government"]
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
    industries: ["Enterprise", "Government", "Fintech"]
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

const SECTION_PRIMARY = "#0284C7";
const SECTION_DARK = "#075985";
const SLATE_900 = "#0f172a";

export default function App() {
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
    <div className="min-h-screen bg-slate-50 selection:bg-sky-100 selection:text-sky-900">
      {/* Top Banner */}
      <div style={{ backgroundColor: SECTION_DARK }} className="py-2 text-white/90 text-xs px-4 text-center border-b border-white/10 flex flex-wrap justify-center gap-4">
        <span>Reg. No: 2026/0280</span>
        <span className="hidden sm:inline">|</span>
        <span>Innovating Tomorrow</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center text-white" style={{ background: SECTION_PRIMARY, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight text-[#0f172a] leading-none uppercase">STARKITE TECHNOLOGIES</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
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

      <main>
        {/* Hero Section */}
        <section style={{ background: `linear-gradient(135deg, ${SLATE_900} 0%, ${SECTION_DARK} 100%)` }} className="relative overflow-hidden pt-20 pb-32 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Precision Engineering for the Digital Frontier
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
                  className="px-8 py-4 rounded-md bg-white border border-slate-200 text-slate-900 font-bold text-lg hover:bg-slate-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Decorative element from theme */}
          <div className="absolute -top-1/2 -right-10 w-[500px] h-[500px] bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="mb-20">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Expertise & Services</h3>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Core Service Pillars</h2>
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex flex-col h-full bg-white p-8 rounded-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                    <div className="mb-6 flex justify-between items-start">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: SECTION_PRIMARY }}
                      >
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7] mb-3">Key Capabilities</p>
                        <ul className="space-y-2">
                          {service.capabilities.slice(0, 3).map((cap, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-[#0284C7] shrink-0" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Differentiators</h3>
                <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-8">
                  Why Leading Organizations Choose Starkite.
                </h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
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
                      <h4 className="font-bold text-[#0f172a]">{prop.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{prop.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-2xl border border-slate-200">
                   <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial Technology"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div 
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-md border border-slate-200 shadow-xl max-w-xs"
                >
                  <p className="text-xl font-bold text-slate-900 leading-tight mb-2">Sustainable Innovation</p>
                  <p className="text-xs text-slate-600">We prioritize clean technology and circular economy principles in all our deliverables.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Strip Section */}
        <section id="contact" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-4">Get in Touch</h3>
                <h2 className="text-4xl font-extrabold text-[#0f172a] tracking-tight mb-8">
                  Let's Build the Future Together.
                </h2>
                <p className="text-slate-600 text-lg mb-12">
                  Ready to modernize your operations? Get in touch with our specialist team for a consultation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-slate-200">
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider">Headquarters</p>
                    <p className="text-sm font-semibold text-[#0f172a]">Windhoek, Namibia</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider">Direct Contact</p>
                    <p className="text-sm font-semibold text-[#0f172a]">+264 81 400 1634</p>
                    <p className="text-sm font-semibold text-[#0f172a]">starkitenamibia@gmail.com</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider">Reg. No</p>
                    <p className="text-sm font-semibold text-[#0f172a]">2026/0280</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all bg-white" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700">Email Address</label>
                       <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all bg-white" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700">Message</label>
                     <textarea rows={4} placeholder="Describe your challenge..." className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all bg-white" />
                  </div>
                  <button 
                    className="w-full py-3.5 rounded-md text-white font-bold text-md shadow-md hover:opacity-90 transition-all"
                    style={{ backgroundColor: SECTION_PRIMARY }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center text-white" style={{ background: SECTION_PRIMARY, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}>
              </div>
              <p className="font-extrabold text-[#0f172a] tracking-tight uppercase text-sm">STARKITE TECHNOLOGIES</p>
            </div>
            <div className="flex flex-wrap gap-8 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
              <span>© 2024 Starkite Technologies Pty Ltd</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
