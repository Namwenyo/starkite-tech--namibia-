import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, ArrowLeft } from "lucide-react";

const Legal = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (val: boolean) => void }) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const switchTab = (name: "privacy" | "terms") => {
    setActiveTab(name);
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, tab: "privacy" | "terms") => {
    e.preventDefault();
    switchTab(tab);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#080C10] text-[#E8EDF2] font-['DM_Sans',sans-serif] font-light leading-relaxed relative selection:bg-[#00D4FF] selection:text-[#080C10]">
      {/* Google Fonts Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        
        .legal-noise::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .eyebrow-mark::before {
          content: '◆';
          font-size: 0.5rem;
        }

        .logo-clip {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .gradient-text {
          background: linear-gradient(90deg, #00D4FF, #0066FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .toc-link {
          transition: all 0.2s;
        }
        
        .toc-link:hover {
          color: #00D4FF;
          border-left-color: #00D4FF;
        }
      `}} />

      <div className="legal-noise" />

      {/* HEADER */}
      <header className="sticky top-0 z-[100] bg-[#080C10]/85 backdrop-blur-xl border-b border-[#1C2530] px-6 lg:px-20">
        <div className="max-w-[1100px] mx-auto h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#0066FF] logo-clip" />
            <span className="font-['Syne',sans-serif] font-extrabold text-base tracking-wider text-[#E8EDF2]">
              STARKITE<span className="text-[#00D4FF]">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-[#1C2530] transition-colors focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:outline-none"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-[#00D4FF]" /> : <Moon className="w-5 h-5 text-[#6B7E8F]" />}
            </button>
            <Link 
              to="/#services" 
              className="hidden sm:flex items-center gap-2 font-['DM_Mono',monospace] text-[0.7rem] uppercase tracking-widest text-[#6B7E8F] hover:text-[#00D4FF] transition-colors no-underline group"
            >
              <div className="w-4 h-4 rounded-full border border-[#6B7E8F] group-hover:border-[#00D4FF] flex items-center justify-center transition-colors">
                <span className="text-[10px]">←</span>
              </div>
              Back to Services
            </Link>
            <nav className="hidden md:flex gap-1 bg-[#0E1318] border border-[#1C2530] rounded-full p-1">
            <button 
              onClick={() => switchTab('privacy')}
              className={`font-['DM_Mono',monospace] text-[0.7rem] tracking-wider px-3.5 py-1.5 rounded-full transition-all ${activeTab === 'privacy' ? 'bg-[#00D4FF] text-[#080C10]' : 'text-[#6B7E8F] hover:text-[#E8EDF2]'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => switchTab('terms')}
              className={`font-['DM_Mono',monospace] text-[0.7rem] tracking-wider px-3.5 py-1.5 rounded-full transition-all ${activeTab === 'terms' ? 'bg-[#00D4FF] text-[#080C10]' : 'text-[#6B7E8F] hover:text-[#E8EDF2]'}`}
            >
              Terms of Service
            </button>
          </nav>
        </div>
      </div>
    </header>

      {/* HERO */}
      <section className="relative px-6 lg:px-20 pt-16 lg:pt-28 pb-12 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,212,255,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 font-['DM_Mono',monospace] text-[0.7rem] tracking-[0.15em] text-[#00D4FF] uppercase bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-3.5 py-1 rounded mb-6 eyebrow-mark">
            Legal Documentation
          </div>
          <h1 className="font-['Syne',sans-serif] font-extrabold text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
            Privacy & <em className="italic not-italic gradient-text">Terms</em>
          </h1>
          <div className="flex flex-wrap items-center gap-8 mt-6">
            <div className="flex items-center gap-2 font-['DM_Mono',monospace] text-[0.72rem] text-[#6B7E8F]">
              <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" /> Starkite Technologies (Pty) Ltd
            </div>
            <div className="flex items-center gap-2 font-['DM_Mono',monospace] text-[0.72rem] text-[#6B7E8F]">
              <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" /> Reg. No. 2026/0280
            </div>
            <div className="flex items-center gap-2 font-['DM_Mono',monospace] text-[0.72rem] text-[#6B7E8F]">
              <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full" /> Effective: April 2026
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-20 pb-24 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">
        {/* SIDEBAR TOC */}
        <aside className="sticky top-20 hidden lg:block">
          <p className="font-['DM_Mono',monospace] text-[0.65rem] tracking-[0.15em] uppercase text-[#6B7E8F] mb-3">On this page</p>
          <ul className="list-none border-l border-[#1C2530]">
            <li>
              <button onClick={() => switchTab('privacy')} className={`block w-full text-left px-4 py-1.5 text-xs font-['Syne',sans-serif] font-bold tracking-wider hover:text-[#00D4FF] ${activeTab === 'privacy' ? 'text-[#E8EDF2] border-l-2 border-[#00D4FF] -ml-px' : 'text-[#6B7E8F]'}`}>
                Privacy Policy
              </button>
            </li>
            {activeTab === 'privacy' && (
              <>
                <li><a href="#p1" onClick={(e) => handleTocClick(e, 'p1', 'privacy')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">1. Information We Collect</a></li>
                <li><a href="#p2" onClick={(e) => handleTocClick(e, 'p2', 'privacy')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">2. How We Use Your Data</a></li>
                <li><a href="#p3" onClick={(e) => handleTocClick(e, 'p3', 'privacy')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">3. Data Sharing</a></li>
                <li><a href="#p4" onClick={(e) => handleTocClick(e, 'p4', 'privacy')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">4. Data Security</a></li>
              </>
            )}
            <li className="mt-4">
              <button onClick={() => switchTab('terms')} className={`block w-full text-left px-4 py-1.5 text-xs font-['Syne',sans-serif] font-bold tracking-wider hover:text-[#00D4FF] ${activeTab === 'terms' ? 'text-[#E8EDF2] border-l-2 border-[#00D4FF] -ml-px' : 'text-[#6B7E8F]'}`}>
                Terms of Service
              </button>
            </li>
            {activeTab === 'terms' && (
              <>
                <li><a href="#t1" onClick={(e) => handleTocClick(e, 't1', 'terms')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">1. Acceptance</a></li>
                <li><a href="#t2" onClick={(e) => handleTocClick(e, 't2', 'terms')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">2. Our Services</a></li>
                <li><a href="#t5" onClick={(e) => handleTocClick(e, 't5', 'terms')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">5. Intellectual Property</a></li>
                <li><a href="#t7" onClick={(e) => handleTocClick(e, 't7', 'terms')} className="block px-4 py-1.5 text-[0.8rem] text-[#6B7E8F] toc-link hover:text-[#00D4FF] border-l-2 border-transparent -ml-px">7. Liability</a></li>
              </>
            )}
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="min-w-0">
          {/* TABS */}
          <div className="flex border-b border-[#1C2530] mb-12 overflow-x-auto">
            <button 
              onClick={() => switchTab('privacy')}
              className={`font-['Syne',sans-serif] font-bold text-[0.85rem] tracking-wider px-7 py-3 cursor-pointer border-b-2 transition-all whitespace-nowrap ${activeTab === 'privacy' ? 'text-[#00D4FF] border-[#00D4FF]' : 'text-[#6B7E8F] border-transparent hover:text-[#E8EDF2]'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => switchTab('terms')}
              className={`font-['Syne',sans-serif] font-bold text-[0.85rem] tracking-wider px-7 py-3 cursor-pointer border-b-2 transition-all whitespace-nowrap ${activeTab === 'terms' ? 'text-[#00D4FF] border-[#00D4FF]' : 'text-[#6B7E8F] border-transparent hover:text-[#E8EDF2]'}`}
            >
              Terms of Service
            </button>
          </div>

          {/* PRIVACY PANEL */}
          {activeTab === 'privacy' && (
            <div className="animate-in fade-in duration-500">
              <div className="bg-[#00D4FF]/[0.04] border border-[#00D4FF]/15 border-l-[3px] border-l-[#00D4FF] rounded-r-md p-4 lg:px-5 mb-12">
                <p className="text-[0.85rem] text-[#B8CDD9]">This Privacy Policy explains how Starkite Technologies (Pty) Ltd collects, uses, and protects the personal information you submit when requesting services through our website or any Starkite platform.</p>
              </div>

              <section id="p1" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">01</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">Information We Collect</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-6">When you reach out to us for services, we may collect the following categories of personal data:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#0E1318] border border-[#1C2530] rounded-lg p-5 hover:border-[#00D4FF]/30 transition-colors group">
                    <div className="text-xl mb-2.5">👤</div>
                    <h4 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-wider text-[#E8EDF2] mb-1.5 uppercase">Identity Data</h4>
                    <p className="text-[0.78rem] text-[#A0B0BE]">Full name, company name, job title, and representative details.</p>
                  </div>
                  <div className="bg-[#0E1318] border border-[#1C2530] rounded-lg p-5 hover:border-[#00D4FF]/30 transition-colors">
                    <div className="text-xl mb-2.5">📬</div>
                    <h4 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-wider text-[#E8EDF2] mb-1.5 uppercase">Contact Data</h4>
                    <p className="text-[0.78rem] text-[#A0B0BE]">Email address, phone number, physical or postal address.</p>
                  </div>
                  <div className="bg-[#0E1318] border border-[#1C2530] rounded-lg p-5 hover:border-[#00D4FF]/30 transition-colors">
                    <div className="text-xl mb-2.5">📋</div>
                    <h4 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-wider text-[#E8EDF2] mb-1.5 uppercase">Service Data</h4>
                    <p className="text-[0.78rem] text-[#A0B0BE]">Project requirements, budget range, and technical documentation.</p>
                  </div>
                  <div className="bg-[#0E1318] border border-[#1C2530] rounded-lg p-5 hover:border-[#00D4FF]/30 transition-colors">
                    <div className="text-xl mb-2.5">🌐</div>
                    <h4 className="font-['Syne',sans-serif] font-bold text-[0.8rem] tracking-wider text-[#E8EDF2] mb-1.5 uppercase">Technical Data</h4>
                    <p className="text-[0.78rem] text-[#A0B0BE]">IP address, browser type, and interaction diagnostics.</p>
                  </div>
                </div>
              </section>

              <hr className="border-[#1C2530] mb-12" />

              <section id="p2" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">02</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">How We Use Your Data</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-4">Your data is used specifically for technical and operational orchestration:</p>
                <ul className="space-y-3 mb-6">
                  {["Evaluation of service requests", "Preparation of technical proposals", "Communication of delivery milestones", "Financial and contractual maintenance"].map((item, i) => (
                    <li key={i} className="text-[0.88rem] text-[#A0B0BE] flex items-start gap-4">
                      <span className="text-[#00D4FF] mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <hr className="border-[#1C2530] mb-12" />

              <section id="p4" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">04</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">Data Security</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-6">As a cybersecurity-aware technology company, we apply industrial-grade safeguard protocols:</p>
                <ul className="space-y-3 mb-8">
                  {["Encrypted transmission (HTTPS/TLS)", "Multi-factor authentication for data access", "Secure-by-design cloud infrastructure", "Regular vulnerability assessments"].map((item, i) => (
                    <li key={i} className="text-[0.88rem] text-[#A0B0BE] flex items-start gap-4">
                      <span className="text-[#00D4FF] mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-[#0E1318] border border-[#1C2530] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 mt-12">
                  <div className="w-11 h-11 bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] rounded-lg flex items-center justify-center text-xl shrink-0">📧</div>
                  <div>
                    <p className="text-[0.85rem] font-bold text-[#E8EDF2] mb-1 uppercase tracking-wider">Privacy Contact</p>
                    <p className="text-[0.8rem] text-[#A0B0BE]">For data inquiries or deletion: <a href="mailto:privacy@starkite.com" className="text-[#00D4FF] hover:underline">privacy@starkite.com</a></p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* TERMS PANEL */}
          {activeTab === 'terms' && (
            <div className="animate-in fade-in duration-500">
              <div className="bg-[#00D4FF]/[0.04] border border-[#00D4FF]/15 border-l-[3px] border-l-[#00D4FF] rounded-r-md p-4 lg:px-5 mb-12">
                <p className="text-[0.85rem] text-[#B8CDD9]">These Terms of Service govern your use of Starkite Technologies' platforms and professional engagements. Submission of any request constitutes acceptance of these parameters.</p>
              </div>

              <section id="t1" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">01</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">Acceptance</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-4">By accessing our infrastructure or requesting services, you confirm that you have understood and agree to be bound by these corporate protocols.</p>
              </section>

              <hr className="border-[#1C2530] mb-12" />

              <section id="t5" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">05</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">Intellectual Property</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-6">Ownership parameters for technological output:</p>
                <div className="bg-[#0E1318] border border-[#1C2530] rounded-lg p-5 mb-6">
                  <p className="text-[0.85rem] text-[#A0B0BE] leading-relaxed">Upon full financial settlement, ownership of project deliverables transfers to the client. Starkite Technologies retains the right to utilize proprietary frameworks and methodologies developed prior to or independently of the engagement.</p>
                </div>
                <ul className="space-y-3">
                  {["Right to showcase in portfolio (unless NDA present)", "Third-party dependency compliance", "Proprietary tool retention"].map((item, i) => (
                    <li key={i} className="text-[0.88rem] text-[#A0B0BE] flex items-start gap-4">
                      <span className="text-[#00D4FF] mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <hr className="border-[#1C2530] mb-12" />

              <section id="t8" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#00D4FF] bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] px-2 py-0.5 rounded leading-none">08</span>
                  <h2 className="font-['Syne',sans-serif] font-bold text-lg tracking-tight text-[#E8EDF2]">Governing Law</h2>
                </div>
                <p className="text-[0.9rem] text-[#A0B0BE] mb-8">These terms are governed by the laws of the <strong className="text-[#E8EDF2]">Republic of Namibia</strong>. Jurisdiction for any technical or commercial disputes shall be the High Court of Namibia.</p>
                <div className="bg-[#0E1318] border border-[#1C2530] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-11 h-11 bg-[rgba(0,212,255,0.07)] border border-[rgba(0,212,255,0.2)] rounded-lg flex items-center justify-center text-xl shrink-0">⚖️</div>
                  <div>
                    <p className="text-[0.85rem] font-bold text-[#E8EDF2] mb-1 uppercase tracking-wider">Legal Inquiries</p>
                    <p className="text-[0.8rem] text-[#A0B0BE]">Email: <a href="mailto:legal@starkite.com" className="text-[#00D4FF] hover:underline">legal@starkite.com</a></p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#1C2530] px-6 lg:px-20 py-12">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-['DM_Mono',monospace] text-[0.7rem] text-[#6B7E8F]">© 2026 Starkite Technologies (Pty) Ltd. All rights reserved.</p>
          <span className="font-['DM_Mono',monospace] text-[0.65rem] text-[#6B7E8F] bg-[#0E1318] border border-[#1C2530] px-3 py-1 rounded">BIPA Reg. 2026/0280</span>
        </div>
      </footer>
    </div>
  );
};

export default Legal;
